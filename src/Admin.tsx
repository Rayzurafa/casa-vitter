import React, { useState, useEffect } from 'react';
import { supabase, BlockedDate, BookingRequest } from './supabaseClient';
import { Calendar, LogOut, Trash2, Plus, AlertCircle, CheckCircle, X, Clock, Mail, Phone, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>([]);
  const [selectedCheckIn, setSelectedCheckIn] = useState<Date | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<Date | null>(null);
  const [note, setNote] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'requests' | 'blocked'>('requests');

  useEffect(() => {
    // Controlla se l'utente è già loggato
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listener per cambiamenti di autenticazione
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchBlockedDates();
      fetchBookingRequests();
    }
  }, [user]);

  const fetchBookingRequests = async () => {
    const { data, error } = await supabase
      .from('booking_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching booking requests:', error);
    } else {
      setBookingRequests(data || []);
    }
  };

  const fetchBlockedDates = async () => {
    const { data, error } = await supabase
      .from('blocked_dates')
      .select('*')
      .order('check_in', { ascending: true });

    if (error) {
      console.error('Error fetching blocked dates:', error);
    } else {
      setBlockedDates(data || []);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoginError('Credenziali non valide. Riprova.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleAddBlockedDate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCheckIn || !selectedCheckOut) return;

    if (selectedCheckOut < selectedCheckIn) {
      alert('La data di check-out deve essere successiva al check-in');
      return;
    }

    const checkInString = selectedCheckIn.toISOString().split('T')[0];
    const checkOutString = selectedCheckOut.toISOString().split('T')[0];

    const { error } = await supabase
      .from('blocked_dates')
      .insert([{ check_in: checkInString, check_out: checkOutString, note: note || null }]);

    if (error) {
      console.error('Error adding blocked dates:', error);
      alert('Errore durante il blocco delle date. Controlla che non ci siano sovrapposizioni.');
    } else {
      setSuccessMessage('Date bloccate con successo!');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
      setNote('');
      fetchBlockedDates();
    }
  };

  const handleDeleteBlockedDate = async (id: string) => {
    if (!confirm('Sei sicuro di voler sbloccare questa data?')) return;

    const { error } = await supabase
      .from('blocked_dates')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blocked date:', error);
    } else {
      setSuccessMessage('Data sbloccata con successo!');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      fetchBlockedDates();
    }
  };

  const handleAcceptRequest = async (request: BookingRequest) => {
    if (!confirm(`Vuoi accettare la prenotazione di ${request.nome}? Le date verranno automaticamente bloccate.`)) return;

    console.log('Attempting to block dates:', {
      check_in: request.check_in,
      check_out: request.check_out,
      note: `Prenotazione di ${request.nome}`
    });

    // 1. Blocca le date
    const { data: blockData, error: blockError } = await supabase
      .from('blocked_dates')
      .insert([{
        check_in: request.check_in,
        check_out: request.check_out,
        note: `Prenotazione di ${request.nome}`
      }])
      .select();

    if (blockError) {
      console.error('Error blocking dates:', blockError);
      alert(`Errore durante il blocco delle date: ${blockError.message}\n\nDettagli: ${JSON.stringify(blockError)}`);
      return;
    }

    console.log('Dates blocked successfully:', blockData);

    // 2. Aggiorna lo status della richiesta
    const { error: updateError } = await supabase
      .from('booking_requests')
      .update({ status: 'accepted', updated_at: new Date().toISOString() })
      .eq('id', request.id);

    if (updateError) {
      console.error('Error updating request:', updateError);
      alert(`Errore durante l'aggiornamento della richiesta: ${updateError.message}`);
    } else {
      setSuccessMessage('Prenotazione accettata e date bloccate!');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      await fetchBookingRequests();
      await fetchBlockedDates();
    }
  };

  const handleRejectRequest = async (id: string) => {
    if (!confirm('Sei sicuro di voler rifiutare questa richiesta?')) return;

    const { error } = await supabase
      .from('booking_requests')
      .update({ status: 'rejected', updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      console.error('Error rejecting request:', error);
    } else {
      setSuccessMessage('Richiesta rifiutata.');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      fetchBookingRequests();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#3f486e] to-[#5a678f] flex items-center justify-center">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#3f486e] to-[#5a678f] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-[#3f486e] rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#4d4d4d] mb-2">Admin Casa Vitter</h1>
            <p className="text-gray-600">Accedi per gestire le date occupate</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{loginError}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                placeholder="admin@casavitter.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Accedi
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-[#3f486e] hover:text-[#5a678f] font-medium transition-colors duration-300"
            >
              ← Torna al sito
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3f486e] to-[#5a678f] rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#4d4d4d]">Admin Casa Vitter</h1>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
              <span>Esci</span>
            </button>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3">
            <CheckCircle className="h-5 w-5" />
            <span>{successMessage}</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('requests')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                activeTab === 'requests'
                  ? 'border-[#3f486e] text-[#3f486e]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Richieste di Prenotazione</span>
                {bookingRequests.filter(r => r.status === 'pending').length > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {bookingRequests.filter(r => r.status === 'pending').length}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('blocked')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                activeTab === 'blocked'
                  ? 'border-[#3f486e] text-[#3f486e]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Date Bloccate</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Richieste di Prenotazione Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-6">
            {/* Richieste Pendenti */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#4d4d4d] mb-6 flex items-center space-x-2">
                <Clock className="h-6 w-6 text-yellow-600" />
                <span>Richieste in Attesa</span>
              </h2>

              {bookingRequests.filter(r => r.status === 'pending').length === 0 ? (
                <p className="text-gray-500 text-center py-8">Nessuna richiesta in attesa</p>
              ) : (
                <div className="space-y-4">
                  {bookingRequests.filter(r => r.status === 'pending').map((request) => {
                    const checkIn = new Date(request.check_in);
                    const checkOut = new Date(request.check_out);
                    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
                    
                    return (
                      <div key={request.id} className="border-2 border-yellow-200 bg-yellow-50 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-[#4d4d4d] mb-1">{request.nome}</h3>
                            <p className="text-sm text-gray-600">
                              Richiesta del {new Date(request.created_at).toLocaleDateString('it-IT', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            In Attesa
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                              <Calendar className="h-4 w-4 text-[#3f486e]" />
                              <span className="font-semibold">Check-in:</span>
                              <span>{checkIn.toLocaleDateString('it-IT')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Calendar className="h-4 w-4 text-[#3f486e]" />
                              <span className="font-semibold">Check-out:</span>
                              <span>{checkOut.toLocaleDateString('it-IT')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="font-semibold">Notti:</span>
                              <span>{nights}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                              <Mail className="h-4 w-4 text-[#3f486e]" />
                              <a href={`mailto:${request.email}`} className="hover:text-[#3f486e] transition-colors">
                                {request.email}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Phone className="h-4 w-4 text-[#3f486e]" />
                              <a href={`tel:${request.telefono}`} className="hover:text-[#3f486e] transition-colors">
                                {request.telefono}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Users className="h-4 w-4 text-[#3f486e]" />
                              <span>
                                {request.adulti} {request.adulti === 1 ? 'adulto' : 'adulti'}
                                {request.bambini > 0 && `, ${request.bambini} ${request.bambini === 1 ? 'bambino' : 'bambini'}`}
                                {request.neonati > 0 && `, ${request.neonati} ${request.neonati === 1 ? 'neonato' : 'neonati'}`}
                              </span>
                            </div>
                          </div>
                        </div>

                        {request.messaggio && (
                          <div className="mb-4 p-3 bg-white rounded-lg">
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold">Messaggio:</span> {request.messaggio}
                            </p>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <button
                            onClick={() => handleAcceptRequest(request)}
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <CheckCircle className="h-5 w-5" />
                            <span>Accetta e Blocca Date</span>
                          </button>
                          <button
                            onClick={() => handleRejectRequest(request.id)}
                            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <X className="h-5 w-5" />
                            <span>Rifiuta</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Storico (Accettate e Rifiutate) */}
            {bookingRequests.filter(r => r.status !== 'pending').length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#4d4d4d] mb-6">Storico Richieste</h2>
                <div className="space-y-3">
                  {bookingRequests.filter(r => r.status !== 'pending').map((request) => (
                    <div key={request.id} className={`border-2 rounded-xl p-4 ${
                      request.status === 'accepted' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-[#4d4d4d]">{request.nome}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(request.check_in).toLocaleDateString('it-IT')} - {new Date(request.check_out).toLocaleDateString('it-IT')}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          request.status === 'accepted'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-400 text-white'
                        }`}>
                          {request.status === 'accepted' ? 'Accettata' : 'Rifiutata'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Date Bloccate Tab */}
        {activeTab === 'blocked' && (
          <div className="grid lg:grid-cols-2 gap-8">
          {/* Aggiungi Data Bloccata */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-[#4d4d4d] mb-6 flex items-center space-x-2">
              <Plus className="h-6 w-6 text-[#3f486e]" />
              <span>Blocca Data</span>
            </h2>

            <form onSubmit={handleAddBlockedDate} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                    Check-in *
                  </label>
                  <DatePicker
                    selected={selectedCheckIn}
                    onChange={(date: Date | null) => setSelectedCheckIn(date)}
                    selectsStart
                    startDate={selectedCheckIn}
                    endDate={selectedCheckOut}
                    minDate={new Date()}
                    locale="it"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Data inizio"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                    wrapperClassName="w-full"
                    calendarClassName="custom-datepicker"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                    Check-out *
                  </label>
                  <DatePicker
                    selected={selectedCheckOut}
                    onChange={(date: Date | null) => setSelectedCheckOut(date)}
                    selectsEnd
                    startDate={selectedCheckIn}
                    endDate={selectedCheckOut}
                    minDate={selectedCheckIn || new Date()}
                    locale="it"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Data fine"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                    wrapperClassName="w-full"
                    calendarClassName="custom-datepicker"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="note" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                  Nota (opzionale)
                </label>
                <input
                  type="text"
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                  placeholder="Es: Prenotazione confermata"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedCheckIn || !selectedCheckOut}
                className="w-full bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Blocca Date
              </button>
            </form>
          </div>

          {/* Lista Date Bloccate */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-[#4d4d4d] mb-6 flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-[#3f486e]" />
              <span>Date Bloccate ({blockedDates.length})</span>
            </h2>

            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {blockedDates.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Nessuna data bloccata</p>
                </div>
              ) : (
                blockedDates.map((blockedDate) => {
                  const checkIn = new Date(blockedDate.check_in + 'T00:00:00');
                  const checkOut = new Date(blockedDate.check_out + 'T00:00:00');
                  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
                  
                  return (
                    <div
                      key={blockedDate.id}
                      className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-[#3f486e] transition-all duration-300"
                    >
                      <div>
                        <p className="font-semibold text-[#4d4d4d]">
                          {checkIn.toLocaleDateString('it-IT', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short',
                          })} → {checkOut.toLocaleDateString('it-IT', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {nights} {nights === 1 ? 'notte' : 'notti'}
                        </p>
                        {blockedDate.note && (
                          <p className="text-sm text-gray-600 mt-1">{blockedDate.note}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteBlockedDate(blockedDate.id)}
                        className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all duration-300"
                        title="Sblocca date"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        )}
      </main>
    </div>
  );
}

export default Admin;
