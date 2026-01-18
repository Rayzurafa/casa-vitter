import React, { useState, useEffect } from 'react';
import { supabase, BlockedDate } from './supabaseClient';
import { Calendar, LogOut, Trash2, Plus, AlertCircle, CheckCircle, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { it } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [selectedCheckIn, setSelectedCheckIn] = useState<Date | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<Date | null>(null);
  const [note, setNote] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
    }
  }, [user]);

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
                    onChange={(date) => setSelectedCheckIn(date)}
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
                    onChange={(date) => setSelectedCheckOut(date)}
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
      </main>
    </div>
  );
}

export default Admin;
