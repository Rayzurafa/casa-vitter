import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  FileText, 
  Hammer, 
  Shield, 
  Award,
  Users,
  Target,
  Menu,
  X,
  Star,
  Clock,
  TrendingUp,
  Quote,
  Plus,
  Minus,
  Calendar,
  Globe
} from 'lucide-react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { it } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { supabase } from './supabaseClient';
import { translations, Language } from './translations';

registerLocale('it', it);

// Funzione per calcolare il prezzo per notte in base alla data
function getPriceForDate(date: Date): number {
  const month = date.getMonth() + 1; // getMonth() ritorna 0-11
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0=Dom, 1=Lun, 2=Mar, 3=Mer, 4=Gio, 5=Ven, 6=Sab

  // BASELINE: 100€ per qualsiasi giorno non definito
  const BASELINE = 100;

  // GENNAIO: sempre 100€
  if (month === 1) return 100;

  // FEBBRAIO e MARZO: sempre 100€
  if (month === 2 || month === 3) return 100;

  // APRILE
  if (month === 4) {
    // Eccezioni: 3-5 aprile (Ven-Dom): 130€
    if (day >= 3 && day <= 5) return 130;
    
    // Venerdì e Sabato: 123€
    if (dayOfWeek === 5 || dayOfWeek === 6) return 123;
    
    // Tutti gli altri giorni (Lun-Gio, Dom): 110€
    return 110;
  }

  // MAGGIO
  if (month === 5) {
    // Eccezioni: 29-31 maggio (Ven-Dom): 135€
    if (day >= 29 && day <= 31) return 135;
    
    // Venerdì e Sabato: 123€
    if (dayOfWeek === 5 || dayOfWeek === 6) return 123;
    
    // Tutti gli altri giorni (Lun-Gio, Dom): 110€
    return 110;
  }

  // GIUGNO
  if (month === 6) {
    // Eccezione: 1 giugno (Lun): 135€
    if (day === 1) return 135;
    
    // Venerdì e Sabato: 123€
    if (dayOfWeek === 5 || dayOfWeek === 6) return 123;
    
    // Tutti gli altri giorni (Lun-Gio, Dom): 110€
    return 110;
  }

  // LUGLIO
  if (month === 7) {
    // Dal 1 al 26: 125€
    if (day >= 1 && day <= 26) return 125;
    
    // 27-30 (Lun-Gio): 110€
    if (day >= 27 && day <= 30) return 110;
    
    // 31 (Ven): 123€
    if (day === 31) return 123;
  }

  // AGOSTO
  if (month === 8) {
    // Venerdì e Sabato: 123€
    if (dayOfWeek === 5 || dayOfWeek === 6) return 123;
    
    // Lun-Gio, Dom: 110€
    return 110;
  }

  // Default: 100€ per qualsiasi altro periodo
  return BASELINE;
}

function App() {
  const [language, setLanguage] = useState<Language>('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [showBookingError, setShowBookingError] = useState(false);
  
  const t = translations[language];
  
  // Booking form states
  const [bookingStep, setBookingStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adulti, setAdulti] = useState(2);
  const [bambini, setBambini] = useState(0);
  const [neonati, setNeonati] = useState(0);
  
  // Blocked dates from Supabase
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);

  // Fetch blocked dates on mount
  useEffect(() => {
    const fetchBlockedDates = async () => {
      const { data, error } = await supabase
        .from('blocked_dates')
        .select('check_in, check_out');
      
      if (error) {
        console.error('Error fetching blocked dates:', error);
        return;
      }
      
      if (data) {
        console.log('Blocked bookings from DB:', data);
        
        // Espandi ogni range in tutti i giorni compresi
        const allBlockedDates: Date[] = [];
        data.forEach(booking => {
          // Parse le date senza conversioni timezone
          const [checkInYear, checkInMonth, checkInDay] = booking.check_in.split('-').map(Number);
          const [checkOutYear, checkOutMonth, checkOutDay] = booking.check_out.split('-').map(Number);
          
          const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay);
          const checkOut = new Date(checkOutYear, checkOutMonth - 1, checkOutDay);
          
          console.log(`Blocking from ${checkIn.toLocaleDateString()} to ${checkOut.toLocaleDateString()}`);
          
          // Aggiungi ogni giorno dal check-in al check-out (escluso)
          const currentDate = new Date(checkIn);
          while (currentDate < checkOut) {
            allBlockedDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
        });
        
        console.log('Total blocked dates:', allBlockedDates.length, allBlockedDates);
        setBlockedDates(allBlockedDates);
      }
    };

    fetchBlockedDates();
  }, []);

  const services = [
    {
      icon: MapPin,
      title: t.feature1Title,
      description: t.feature1Description,
      image: "/casa_vitter_02.jpg"
    },
    {
      icon: Building2,
      title: t.feature6Title,
      description: t.feature6Description,
      image: "/casa_vitter_19.jpg"
    },
    {
      icon: Users,
      title: t.feature2Title,
      description: t.feature2Description,
      image: "/casa_vitter_18.jpg"
    },
    {
      icon: Award,
      title: t.feature3Title,
      description: t.feature3Description,
      image: "/casa_vitter_23.jpg"
    },
    {
      icon: Shield,
      title: t.feature4Title,
      description: t.feature4Description,
      image: "/casa_vitter_05.jpg"
    },
    {
      icon: Target,
      title: t.feature5Title,
      description: t.feature5Description,
      image: "/merano-fiume.jpg"
    }
  ];

  const portfolioImages = [
    "/casa_vitter_01.jpg",
    "/casa_vitter_03.jpg",
    "/casa_vitter_04.jpg",
    "/casa_vitter_05.jpg",
    "/casa_vitter_07.jpg",
    "/casa_vitter_08.jpg",
    "/casa_vitter_09.jpg",
    "/casa_vitter_11.jpg",
    "/casa_vitter_12.jpg",
    "/casa_vitter_14.jpg",
    "/casa_vitter_16.jpg",
    "/casa_vitter_17.jpg",
    "/casa_vitter_18.jpg",
    "/casa_vitter_19.jpg",
    "/casa_vitter_20.jpg",
    "/casa_vitter_21.jpg",
    "/casa_vitter_22.jpg",
    "/casa_vitter_23.jpg",
    "/casa_vitter_24.jpg",
    "/casa_vitter_25.jpg",
    "/casa_vitter_26.jpg",
    "/casa_vitter_27.jpg",
    "/casa_vitter_28.jpg",
    "/casa_vitter_29.jpg",
    "/casa_vitter_30.jpg",
    "/casa_vitter_31.jpg",
    "/casa_vitter_32.jpg",
    "/casa_vitter_34.jpg",
    "/casa_vitter_35.jpg",
    "/casa_vitter_36.jpg",
    "/casa_vitter_37.jpg",
    "/casa_vitter_38.jpg",
    "/casa_vitter_39.jpg",
    "/casa_vitter_41.jpg",
    "/casa_vitter_42.jpg",
    "/casa_vitter_45.jpg",
    "/casa_vitter_46.jpg",
    "/casa_vitter_48.jpg"
  ];

  // Get testimonials from translations
  const testimonials = t.testimonials.map((testimonial, index) => ({
    ...testimonial,
    rating: 5
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <img 
                src="/LogoVitter.png"
                alt="Casa Vitter Logo" 
                className="h-16 w-auto transform group-hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex space-x-8 flex-1 justify-center">
              <a 
                href="#home"
                className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
              >
                {t.home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#lappartamento"
                className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
              >
                {t.about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#recensioni"
                className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
              >
                {t.reviews}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contatti"
                className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
              >
                {t.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#prenota"
                className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
              >
                {t.book}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Language Selector + CTA - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                {(['it', 'de', 'en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center ${
                      language === lang
                        ? 'bg-white text-[#3f486e] shadow-sm'
                        : 'text-gray-600 hover:text-[#3f486e]'
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w20/${lang === 'it' ? 'it' : lang === 'de' ? 'de' : 'gb'}.png`}
                      srcSet={`https://flagcdn.com/w40/${lang === 'it' ? 'it' : lang === 'de' ? 'de' : 'gb'}.png 2x`}
                      alt={lang}
                      className="w-5 h-4"
                    />
                  </button>
                ))}
              </div>
              
              {/* CTA Button */}
              <a 
                href="#prenota" 
                className="group bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>{t.book}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              {/* Language Selector - Mobile */}
              <div className="flex justify-center space-x-2 pt-4 pb-2">
                {(['it', 'de', 'en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center ${
                      language === lang
                        ? 'bg-[#3f486e] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w20/${lang === 'it' ? 'it' : lang === 'de' ? 'de' : 'gb'}.png`}
                      srcSet={`https://flagcdn.com/w40/${lang === 'it' ? 'it' : lang === 'de' ? 'de' : 'gb'}.png 2x`}
                      alt={lang}
                      className="w-6 h-5"
                    />
                  </button>
                ))}
              </div>
              
              <nav className="flex flex-col space-y-2 pt-2">
                <a 
                  href="#home"
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.home}
                </a>
                <a 
                  href="#lappartamento"
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.about}
                </a>
                <a 
                  href="#recensioni"
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.reviews}
                </a>
                <a 
                  href="#contatti"
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.contact}
                </a>
                <a 
                  href="#prenota"
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.book}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-auto sm:min-h-screen flex items-center overflow-hidden py-16 sm:py-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/casa_vitter_09.jpg"
            alt="Casa Vitter - Appartamento a Merano"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto sm:mx-0">
            {/* Main Content Card */}
            <div className="bg-white/20 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 transform perspective-1000 hover:shadow-3xl transition-all duration-500">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#fd8607]" />
                  <span className="text-sm sm:text-base font-semibold text-[#fd8607]">Merano, Alto Adige</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                  {t.heroTitle}<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-[#5a678f]">{t.heroSubtitle}</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  {t.heroDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                  <a 
                    href="#contatti" 
                    className="group bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>{t.bookNow}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="tel:+393332109899" 
                    className="group bg-[#fd8607] hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{t.callNow}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="lappartamento" className="py-12 sm:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4d4d4d] mb-4">{t.aboutTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4d4d4d] mb-3 sm:mb-4 md:mb-6">{t.aboutSubtitle}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t.aboutParagraph1}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t.aboutParagraph2}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t.aboutParagraph3}
              </p>
              <div className="flex flex-nowrap gap-2 sm:gap-3 pt-4 overflow-x-auto">
                <div className="bg-[#3f486e] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#5a678f] transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">{t.centralLocation}</span>
                </div>
                <div className="bg-[#5a678f] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#3f486e] transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">{t.garageIncluded}</span>
                </div>
                <div className="bg-[#fd8607] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">{t.allInclusive}</span>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/casa_vitter_07.jpg"
                  alt="Casa Vitter - Appartamento a Merano"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#3f486e]">200m</div>
                  <div className="text-xs sm:text-sm text-gray-600">Dalle Terme</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#5a678f]">2-4</div>
                  <div className="text-xs sm:text-sm text-gray-600">Persone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="caratteristiche" className="py-12 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4 px-4">{t.featuresTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl group-hover:bg-[#3f486e] group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#4d4d4d] mb-2 sm:mb-3 group-hover:text-[#3f486e] transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Realizzazioni Section */}
      <section id="foto" className="py-12 sm:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4">{t.photosTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              {t.photosSubtitle}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Casa Vitter ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full">
                      <svg className="w-6 h-6 text-[#3f486e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="#contatti"
              className="group bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
            >
              <span>{t.requestAvailability}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Recensioni Section */}
      <section id="recensioni" className="py-12 sm:py-20 bg-[#3f486e] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">{t.reviewsTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#5a678f] to-[#fd8607] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              {t.reviewsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#3f486e] hover:border-2 hover:border-white">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-[#3f486e] group-hover:text-white mr-3 transition-colors duration-300" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#fd8607] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 group-hover:text-white leading-relaxed mb-4 italic transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3f486e] to-[#5a678f] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">{t.guestLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="py-12 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4">{t.contactTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              {t.contactSubtitle}
            </p>
          </div>

          {/* Informazioni di Contatto */}
          {/* Layout a tre colonne */}
          <div className="grid lg:grid-cols-7 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12">
            {/* Informazioni di Contatto - Sinistra (3/7 dello spazio) */}
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4d4d4d] mb-4 sm:mb-6">{t.contactInfoTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#3f486e] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#5a678f] transition-colors duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">{t.phoneLabel}</h4>
                    <a href="tel:+393332109899" className="text-gray-600 hover:text-[#3f486e] transition-colors duration-300 text-sm sm:text-base font-medium">
                      +39 333 210 9899
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#5a678f] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#3f486e] transition-colors duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">Email</h4>
                    <a href="mailto:casavittermerano@gmail.com" className="text-gray-600 hover:text-[#3f486e] transition-colors duration-300 text-sm sm:text-base font-medium break-all">
                      casavittermerano@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#fd8607] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">{t.locationLabel}</h4>
                    <address className="text-gray-600 not-italic text-sm sm:text-base font-medium">
                      Via Leopardi 7, 39012 Merano (BZ)
                    </address>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#3f486e] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#5a678f] transition-colors duration-300">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">{t.cinLabel}</h4>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      IT021051B4MKWBY5TU
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action - Centro (2/7 dello spazio) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-[#3f486e] to-[#5a678f] p-6 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  {t.bookYourStay}
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white opacity-90">
                  {t.bookYourStayDesc}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+393332109899"
                    className="group bg-[#fd8607] hover:bg-orange-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 text-white text-sm sm:text-base"
                  >
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>{t.callNow}</span>
                  </a>
                  <a
                    href="mailto:casavittermerano@gmail.com"
                    className="group bg-white/20 hover:bg-white/30 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 inline-flex items-center justify-center space-x-2 text-white text-sm sm:text-base"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{t.sendEmail}</span>
                  </a>
                  <a
                    href="#prenota"
                    className="group bg-white hover:bg-white/90 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 text-[#3f486e] text-sm sm:text-base"
                  >
                    <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{t.bookNowBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Info aggiuntive - Destra (2/7 dello spazio) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#3f486e] to-[#5a678f] p-6 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  {t.usefulInfo}
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <p className="text-white/90">
                    <strong>{t.touristTax}</strong> {t.touristTaxValue}
                  </p>
                  <p className="text-white/90">
                    <strong>{t.garage}</strong> {t.garageValue}
                  </p>
                  <p className="text-white/90">
                    <strong>{t.checkInOut}</strong> {t.checkInOutValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mappa Google */}
          <div className="mt-8 sm:mt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.it/maps/embed?pb=!1m18!1m12!1m3!1d2759.1!2d11.1543981!3d46.6686501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782bf9a191650f7%3A0xfe77c89627ff4a99!2sCasa%20Vitter!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa Vitter - Merano"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Prenota */}
      <section id="prenota" className="py-12 sm:py-20 bg-gradient-to-br from-[#3f486e] to-[#5a678f] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{t.bookingTitle}</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#fd8607] to-white mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              {bookingStep === 1 ? t.bookingSubtitle : t.bookingSubtitleStep2}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${bookingStep === 1 ? 'bg-white text-[#3f486e]' : 'bg-white/30 text-white'}`}>
              1
            </div>
            <div className={`h-1 w-16 transition-all duration-300 ${bookingStep === 2 ? 'bg-white' : 'bg-white/30'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${bookingStep === 2 ? 'bg-white text-[#3f486e]' : 'bg-white/30 text-white'}`}>
              2
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <form 
              name="prenotazione" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6" 
              onSubmit={async (e) => {
                e.preventDefault();
                
                if (bookingStep === 2 && checkIn && checkOut) {
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  
                  // Calcola prezzo totale
                  const totalGuests = adulti + bambini + neonati;
                  let totalPrice = 0;
                  const currentDate = new Date(checkIn);
                  while (currentDate < checkOut) {
                    totalPrice += getPriceForDate(currentDate);
                    currentDate.setDate(currentDate.getDate() + 1);
                  }
                  const extraGuests = Math.max(0, totalGuests - 2);
                  const nights = Math.ceil((checkOut.getTime() - checkOut.getTime()) / (1000 * 60 * 60 * 24));
                  const extraGuestsCost = extraGuests * 20 * nights;
                  const cleaningFee = 60;
                  totalPrice += extraGuestsCost + cleaningFee;
                  
                  // Salva in Supabase
                  const { error: supabaseError } = await supabase
                    .from('booking_requests')
                    .insert([{
                      check_in: checkIn.toISOString().split('T')[0],
                      check_out: checkOut.toISOString().split('T')[0],
                      adulti: adulti,
                      bambini: bambini,
                      neonati: neonati,
                      nome: formData.get('nome') as string,
                      email: formData.get('email') as string,
                      telefono: formData.get('telefono') as string,
                      messaggio: formData.get('messaggio') as string || null,
                      status: 'pending'
                    }]);

                  if (supabaseError) {
                    console.error('Errore salvataggio richiesta:', supabaseError);
                    setShowBookingError(true);
                    return;
                  }
                  
                  // Prepara i dati per Netlify (backup)
                  const submitData = new URLSearchParams();
                  submitData.append('form-name', 'prenotazione');
                  submitData.append('nome', formData.get('nome') as string);
                  submitData.append('email', formData.get('email') as string);
                  submitData.append('telefono', formData.get('telefono') as string);
                  submitData.append('checkin', checkIn.toLocaleDateString('it-IT'));
                  submitData.append('checkout', checkOut.toLocaleDateString('it-IT'));
                  submitData.append('adulti', adulti.toString());
                  submitData.append('bambini', bambini.toString());
                  submitData.append('neonati', neonati.toString());
                  submitData.append('prezzo-totale', `${totalPrice.toFixed(2)}€`);
                  submitData.append('messaggio', formData.get('messaggio') as string || '');
                  
                  // Invia a Netlify
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: submitData.toString()
                  })
                    .then((response) => {
                      if (response.ok) {
                        setShowBookingConfirmation(true);
                        // Reset form
                        setBookingStep(1);
                        setCheckIn(null);
                        setCheckOut(null);
                        setAdulti(2);
                        setBambini(0);
                        setNeonati(0);
                        form.reset();
                      } else {
                        throw new Error('Errore nell\'invio');
                      }
                    })
                    .catch((error) => {
                      console.error('Errore:', error);
                      setShowBookingError(true);
                    });
                }
              }}
            >
              <input type="hidden" name="form-name" value="prenotazione" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="checkin" value="" />
              <input type="hidden" name="checkout" value="" />
              <input type="hidden" name="adulti" value="" />
              <input type="hidden" name="bambini" value="" />
              <input type="hidden" name="neonati" value="" />
              <input type="hidden" name="prezzo-totale" value="" />
              
              {/* STEP 1: Date e Ospiti */}
              {bookingStep === 1 && (
                <>
                  {/* Date Check-in e Check-out */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="checkin" className="block text-sm font-semibold text-[#4d4d4d] mb-2 flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#3f486e]" />
                        <span>{t.checkInDate} *</span>
                      </label>
                      <DatePicker
                        selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                        selectsStart
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={new Date()}
                        excludeDates={blockedDates}
                        locale="it"
                        dateFormat="dd/MM/yyyy"
                        placeholderText={t.selectDate}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                        wrapperClassName="w-full"
                        calendarClassName="custom-datepicker"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block text-sm font-semibold text-[#4d4d4d] mb-2 flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#3f486e]" />
                        <span>{t.checkOutDate} *</span>
                      </label>
                      <DatePicker
                        selected={checkOut}
                        onChange={(date) => setCheckOut(date)}
                        selectsEnd
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={checkIn || new Date()}
                        excludeDates={blockedDates}
                        locale="it"
                        dateFormat="dd/MM/yyyy"
                        placeholderText={t.selectDate}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                        wrapperClassName="w-full"
                        calendarClassName="custom-datepicker"
                      />
                    </div>
                  </div>

                  {/* Numero Ospiti */}
                  <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-[#4d4d4d] flex items-center space-x-2">
                      <Users className="h-5 w-5 text-[#3f486e]" />
                      <span>{t.guests} (massimo 4)</span>
                    </h3>

                    {/* Adulti */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-[#4d4d4d]">{t.adults}</p>
                        <p className="text-sm text-gray-500">{t.adultsDesc}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setAdulti(Math.max(1, adulti - 1))}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={adulti <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-lg text-[#4d4d4d] w-8 text-center">{adulti}</span>
                        <button
                          type="button"
                          onClick={() => setAdulti(adulti + 1)}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={adulti + bambini + neonati >= 4}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Bambini */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-[#4d4d4d]">{t.children}</p>
                        <p className="text-sm text-gray-500">{t.childrenDesc}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setBambini(Math.max(0, bambini - 1))}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={bambini <= 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-lg text-[#4d4d4d] w-8 text-center">{bambini}</span>
                        <button
                          type="button"
                          onClick={() => setBambini(bambini + 1)}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={adulti + bambini + neonati >= 4}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Neonati */}
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-semibold text-[#4d4d4d]">{t.infants}</p>
                        <p className="text-sm text-gray-500">{t.infantsDesc}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setNeonati(Math.max(0, neonati - 1))}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={neonati <= 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-lg text-[#4d4d4d] w-8 text-center">{neonati}</span>
                        <button
                          type="button"
                          onClick={() => setNeonati(neonati + 1)}
                          className="w-10 h-10 rounded-full border-2 border-[#3f486e] text-[#3f486e] hover:bg-[#3f486e] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={adulti + bambini + neonati >= 4}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        if (!checkIn || !checkOut) {
                          alert(t.selectDatesAlert);
                          return;
                        }
                        const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
                        if (nights < 3) {
                          alert(t.minNightsAlert);
                          return;
                        }
                        setBookingStep(2);
                      }}
                      className="w-full bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>{t.continue}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </>
              )}

              {/* STEP 2: Dati Personali */}
              {bookingStep === 2 && (
                <>
                  {/* Dati Personali */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none"
                        placeholder={t.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-semibold text-[#4d4d4d] mb-2">
                      {t.message}
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3f486e] focus:ring-2 focus:ring-[#3f486e]/20 transition-all duration-300 outline-none resize-none"
                      placeholder={t.messagePlaceholder}
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#4d4d4d] font-bold py-4 px-8 rounded-xl transition-all duration-300"
                    >
                      {t.back}
                    </button>
                    <button
                      type="submit"
                      className="flex-2 bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>{t.sendRequest}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    {t.requiredFields}
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Logo e Descrizione */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img 
                src="/LogoVitter.png"
                alt="Casa Vitter Logo" 
                className="h-12 w-auto mb-3 sm:mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.footerDescription}
              </p>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">{t.footerContacts}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#5a678f]" />
                  <a href="tel:+393332109899" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    +39 333 210 9899
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#5a678f]" />
                  <a href="mailto:casavittermerano@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all">
                    casavittermerano@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Posizione */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">{t.footerLocation}</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#5a678f] mt-1" />
                <address className="text-gray-300 not-italic text-sm">
                  Via Leopardi 7<br />
                  39012 Merano (BZ)
                </address>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">{t.footerInfo}</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p>• {t.footerCapacity}</p>
                <p>• {t.footerGarage}</p>
                <p>• {t.footerLinens}</p>
                <p>CIN: IT021051B4MKWBY5TU</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4 md:mb-0 text-center md:text-left">
                {t.footerCopyright}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-xs text-gray-500 text-center md:text-right">
                  {t.footerSubtitle}
                </p>
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-xs text-gray-400 hover:text-[#5a678f] transition-colors duration-300 underline"
                >
                  {t.privacyPolicy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
          >
            <X className="h-8 w-8 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Casa Vitter"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-[#4d4d4d]">{t.privacyPolicyTitle}</h2>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="px-6 py-8 space-y-8 text-gray-700">
              <p className="text-gray-600">Ultimo aggiornamento: dicembre 2025</p>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">1. Titolare del trattamento</h3>
                <p className="mb-3">
                  Il titolare del trattamento dei dati personali è Ivan Longo.
                </p>
                <p className="font-semibold mb-2">Contatti:</p>
                <ul className="list-none space-y-1 ml-4">
                  <li>Telefono: +39 333 210 9899</li>
                  <li>Email: casavittermerano@gmail.com</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">2. Finalità e base giuridica del trattamento</h3>
                <p className="mb-3">
                  Il presente sito web ha esclusivamente finalità informative e non prevede alcuna raccolta diretta di dati personali tramite moduli di contatto, newsletter o registrazioni.
                </p>
                <p className="mb-3">
                  L'unico trattamento eventualmente effettuato riguarda i dati di navigazione raccolti in modo automatico dai sistemi informatici necessari al funzionamento del sito (es. indirizzi IP, log tecnici, data e ora della visita, tipo di browser).
                </p>
                <p className="mb-2">Tali dati:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>vengono trattati in forma aggregata e anonima,</li>
                  <li>sono utilizzati al solo scopo di garantire il corretto funzionamento e la sicurezza del sito,</li>
                  <li>non vengono comunicati né diffusi a terzi, salvo obblighi di legge.</li>
                </ul>
                <p>
                  La base giuridica del trattamento è l'art. 6, par. 1, lett. f) del GDPR, ossia il legittimo interesse del titolare a garantire la sicurezza e il corretto funzionamento del sito.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">3. Cookie e strumenti di tracciamento</h3>
                <p className="mb-3">
                  Il sito utilizza solo cookie tecnici strettamente necessari alla sua corretta visualizzazione e navigazione.
                </p>
                <p className="mb-3">
                  Non vengono utilizzati cookie di profilazione, marketing o analitici di terze parti.
                </p>
                <p>
                  L'uso di cookie tecnici non richiede consenso da parte dell'utente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">4. Dati forniti volontariamente</h3>
                <p className="mb-3">
                  Eventuali comunicazioni inviate spontaneamente all'indirizzo email o al numero di telefono indicati sul sito comportano l'acquisizione dei dati di contatto necessari per rispondere alle richieste.
                </p>
                <p>
                  Tali dati vengono trattati esclusivamente per la gestione della corrispondenza e non vengono conservati oltre il tempo necessario alla risposta.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">5. Diritti dell'interessato</h3>
                <p className="mb-3">
                  In conformità agli articoli 15-22 del GDPR, l'utente ha diritto di:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano;</li>
                  <li>chiedere la rettifica o la cancellazione dei dati;</li>
                  <li>richiedere la limitazione o l'opposizione al trattamento, quando applicabile;</li>
                  <li>proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#3f486e] hover:underline">www.garanteprivacy.it</a>).</li>
                </ul>
                <p>
                  Per esercitare tali diritti, è possibile inviare una richiesta a: <a href="mailto:casavittermerano@gmail.com" className="text-[#3f486e] hover:underline">casavittermerano@gmail.com</a>.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">6. Misure di sicurezza</h3>
                <p>
                  Casa Vitter adotta misure tecniche e organizzative adeguate per prevenire la perdita, l'uso improprio o l'accesso non autorizzato ai dati personali eventualmente trattati.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">7. Conservazione dei dati</h3>
                <p className="mb-3">
                  I dati tecnici di navigazione vengono conservati per il tempo strettamente necessario al funzionamento e alla sicurezza del sito.
                </p>
                <p>
                  I dati forniti spontaneamente via email o telefono vengono conservati solo per il periodo necessario alla gestione della richiesta.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">8. Collegamenti esterni</h3>
                <p className="mb-3">
                  Il sito potrebbe contenere collegamenti verso siti esterni o pagine di terzi.
                </p>
                <p className="mb-3">
                  Casa Vitter non è responsabile del contenuto o delle politiche di privacy di tali siti.
                </p>
                <p>
                  Si consiglia di consultare le rispettive informative prima di fornire dati personali.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">9. Termini di utilizzo del sito</h3>
                <p className="mb-3">
                  L'accesso e l'utilizzo del presente sito comportano l'accettazione delle seguenti condizioni:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>i contenuti pubblicati (testi, immagini, descrizioni, loghi) sono di proprietà di Casa Vitter e ne è vietata la riproduzione senza autorizzazione;</li>
                  <li>le informazioni fornite hanno finalità puramente informative e non costituiscono un'offerta contrattuale;</li>
                  <li>Casa Vitter non potrà essere ritenuto responsabile per eventuali errori, omissioni o per danni diretti o indiretti derivanti dall'uso delle informazioni contenute nel sito;</li>
                  <li>l'utente si impegna a non utilizzare il sito per scopi contrari alla legge o lesivi dei diritti di terzi.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#4d4d4d] mb-3">10. Modifiche alla presente informativa</h3>
                <p className="mb-3">
                  Casa Vitter si riserva il diritto di modificare o aggiornare la presente informativa in qualsiasi momento, in conformità alle evoluzioni normative o tecniche.
                </p>
                <p>
                  La versione aggiornata sarà sempre disponibile in questa pagina.
                </p>
              </section>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-2xl">
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="w-full bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showBookingConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#4d4d4d] mb-4">{t.bookingSuccess}</h3>
              <p className="text-gray-600 mb-6">
                {t.bookingSuccessMessage}
              </p>
              <div className="bg-[#3f486e]/10 rounded-xl p-4 mb-6">
                <p className="text-sm text-[#4d4d4d] font-medium">
                  {t.bookingSuccessDetails}
                </p>
              </div>
              <button
                onClick={() => setShowBookingConfirmation(false)}
                className="w-full bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Error Modal */}
      {showBookingError && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <X className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#4d4d4d] mb-4">{t.bookingError}</h3>
              <p className="text-gray-600 mb-6">
                {t.bookingErrorMessage}
              </p>
              <div className="bg-[#3f486e]/10 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex items-center justify-center space-x-2 text-[#4d4d4d]">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+393332109899" className="font-medium hover:text-[#3f486e]">+39 333 210 9899</a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#4d4d4d]">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:casavittermerano@gmail.com" className="font-medium hover:text-[#3f486e]">casavittermerano@gmail.com</a>
                </div>
              </div>
              <button
                onClick={() => setShowBookingError(false)}
                className="w-full bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
