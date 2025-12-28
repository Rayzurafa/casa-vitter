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
  Quote
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: MapPin,
      title: "Posizione Centrale",
      description: "Casa Vitter si trova nel cuore di Merano, a soli 200 metri dalle rinomate Terme di Merano e a pochi passi dal centro storico. Una posizione strategica che ti permette di raggiungere comodamente a piedi tutte le principali attrazioni, fermate dei mezzi pubblici, negozi e ristoranti della città.",
      image: "/casa_vitter_02.jpg"
    },
    {
      icon: Building2,
      title: "Spazi Confortevoli",
      description: "L'appartamento al primo piano con ascensore si compone di un accogliente soggiorno con divano letto a una piazza e mezzo (140x200), camera matrimoniale con ampi armadi, bagno finestrato con doccia e bidet, e un ampio balcone per godere del clima mite meranese. Spazi funzionali pensati per il massimo comfort.",
      image: "/casa_vitter_19.jpg"
    },
    {
      icon: Users,
      title: "Perfetto per Famiglie",
      description: "Concepito idealmente per 2 persone, l'appartamento si adatta perfettamente anche a famiglie o gruppi fino a un massimo di 4 persone (3 adulti e un bambino), grazie al comodo divano letto del soggiorno e alla possibilità di aggiungere un lettino con sponde per bambini su richiesta.",
      image: "/casa_vitter_18.jpg"
    },
    {
      icon: Award,
      title: "Cucina Attrezzata",
      description: "L'angolo cucina è completamente attrezzato con tutto il necessario per preparare i vostri pasti: frigorifero, piano cottura, forno, microonde, caffettiera e stoviglie. Perfetto per chi desidera sentirsi a casa anche in vacanza e gustare i prodotti locali dell'Alto Adige.",
      image: "/casa_vitter_23.jpg"
    },
    {
      icon: Shield,
      title: "Tutto Incluso",
      description: "La biancheria da letto, da bagno e per la cucina sono incluse nel prezzo. L'appartamento è completamente indipendente e a vostra completa disposizione, garantendo privacy e comfort durante tutto il vostro soggiorno a Merano in un condominio tranquillo e silenzioso.",
      image: "/casa_vitter_05.jpg"
    },
    {
      icon: Target,
      title: "Servizi Nelle Vicinanze",
      description: "Nelle immediate vicinanze di Casa Vitter troverete supermercati e negozi alimentari, bar, ristoranti, pizzerie, un centro commerciale e tutto ciò di cui avete bisogno per un soggiorno spensierato e rilassante. La tranquillità della zona residenziale unita alla comodità dei servizi.",
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

  const testimonials = [
    {
      name: "Enrico",
      text: "Casa pulitissima, ubicata in posizione strategica per muoversi tranquillamente a piedi. Le indicazioni fornite da Lara sono state precisissime. La comunicazione è stata puntuale e piacevole, il check-in gestito al meglio anche se la prenotazione è stata fatta a meno di 24 ore dall'arrivo. L'alloggio è confortevole e completo di tutto, un'ottima base per visitare Merano e dintorni.",
      rating: 5
    },
    {
      name: "Beatrice",
      text: "Ci siamo trovati benissimo, dal check-in di persona alla partenza. Posizione ottima, è tutto raggiungibile a piedi, inoltre la fermata dei bus è a 5 minuti. L'appartamento è come da descrizione, fornito di tutto il necessario. Ivan è rimasto sempre a disposizione, comunicazione gentile, efficace e veloce. Grazie mille ancora di tutto!",
      rating: 5
    },
    {
      name: "Tiziana",
      text: "Ivan è stato un host fantastico! Super accomodante e molto disponibile sotto ogni aspetto. Il suo appartamento era perfetto, ben attrezzato e molto confortevole. La posizione è ideale perché è molto vicino al centro della città, ma in un quartiere molto tranquillo. Consiglierei l'alloggio di Ivan a qualsiasi coppia o giovane famiglia in visita a Merano.",
      rating: 5
    },
    {
      name: "Maria Lucia",
      text: "Abbiamo prenotato all'ultimo minuto e i proprietari hanno accettato mostrandosi subito disponibili. L'appartamento è ancora più bello e accogliente dal vivo che in foto! La posizione è fantastica a due passi dal centro. La cucina è completa di tutto e i consigli degli host sono stati preziosissimi: ristoranti ottimi e passeggiate perfette per la famiglia.",
      rating: 5
    },
    {
      name: "Miriam",
      text: "Abbiamo trascorso una settimana meravigliosa a Merano. L'appartamento si trova in una posizione eccellente, è ben attrezzato e tutto era super preparato. Lara ci ha accolto personalmente e ha risposto a tutte le domande in modo rapido. Da lì si possono fare splendide escursioni a piedi, tutto è raggiungibile senza auto. Grazie per il bel momento, torneremo volentieri!",
      rating: 5
    },
    {
      name: "Andrea",
      text: "Appartamento super bello situato in una tranquilla zona residenziale in posizione centrale a Merano, a 5 minuti dal centro. Nelle vicinanze panetterie, supermercati e ristoranti. La camera da letto separata è stata utile per noi come famiglia con bambino piccolo. Lara e Ivan gentilissimi e cortesi, sempre facilmente raggiungibili. Ci torneremo molto volentieri!",
      rating: 5
    },
    {
      name: "David",
      text: "Abbiamo trascorso un soggiorno incantevole a Merano. Lara e Ivan sono host fantastici! La comunicazione è stata molto semplice e utile, ci hanno aiutato subito con il garage quando serviva. L'appartamento era ancora più bello che nelle foto e la posizione è semplicemente perfetta! Consiglio vivamente di soggiornare da Lara e Ivan.",
      rating: 5
    },
    {
      name: "Claudia",
      text: "Ottimo soggiorno, pulito e confortevole. L'appartamento ha tutto ciò di cui si potrebbe aver bisogno, è soleggiato e a pochi passi dalla Passeggiata e dal centro storico. Il balcone con vista sulle Dolomiti è meraviglioso. Lara ci ha accolto molto cordialmente, rendendo il check-in facile e veloce. Ha risposto rapidamente durante tutto il soggiorno.",
      rating: 5
    },
    {
      name: "Luca",
      text: "Bellissima esperienza. La casa è spaziosa e dotata di un bellissimo balcone dove abbiamo fatto colazione e pranzato. Tutto molto curato e pulito. Ci hanno fornito seggiolone, bavaglino, accappatoio e giochi per i bambini. Garage comodo e utile. Ivan e Lara gentili, solari e sempre disponibili. Consigliatissimo. Per un ritorno a Merano sappiamo dove andare!",
      rating: 5
    }
  ];

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
              {['Home', 'L\'Appartamento', 'Caratteristiche', 'Foto', 'Recensioni', 'Contatti'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/'/g, '').replace(' ', '-')}`} 
                  className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 font-medium relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3f486e] to-[#5a678f] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a 
                href="tel:+393332109899" 
                className="group bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Prenota</span>
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
              <nav className="flex flex-col space-y-2 pt-4">
                {['Home', 'L\'Appartamento', 'Caratteristiche', 'Foto', 'Recensioni', 'Contatti'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().replace(/'/g, '').replace(' ', '-')}`} 
                    className="text-[#4d4d4d] hover:text-[#3f486e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
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
                  Il tuo appartamento ideale<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-[#5a678f]">nel cuore di Merano</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Appartamento elegante e confortevole a soli 200 metri dalle Terme di Merano. Perfetto per una fuga rilassante in Alto Adige.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                  <a 
                    href="#contatti" 
                    className="group bg-[#3f486e] hover:bg-[#5a678f] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Richiedi Disponibilità</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="tel:+393332109899" 
                    className="group bg-[#fd8607] hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Chiamaci</span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4d4d4d] mb-4">L'Appartamento</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4d4d4d] mb-3 sm:mb-4 md:mb-6">Casa Vitter</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Casa Vitter è un silenzioso bilocale situato nel cuore di Merano, a soli 200 metri dalle 
                rinomate Terme di Merano e a pochi passi dal centro storico. Una posizione privilegiata che 
                unisce la tranquillità di una zona residenziale alla comodità dei servizi.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                L'appartamento, posizionato al primo piano con ascensore, si compone di un accogliente soggiorno 
                con divano letto a una piazza e mezzo (140x200), angolo cucina completamente attrezzato, camera 
                matrimoniale con ampi armadi, bagno finestrato con doccia e bidet, e un ampio balcone.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Ideale per 2 persone, può ospitare comodamente fino a 3 adulti e 1 bambino. Nel prezzo sono 
                inclusi garage privato (a 60m), biancheria da letto, da bagno e per la cucina. Lo spazio è 
                completamente indipendente e a vostra disposizione.
              </p>
              <div className="flex flex-nowrap gap-2 sm:gap-3 pt-4 overflow-x-auto">
                <div className="bg-[#3f486e] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#5a678f] transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">Posizione centrale</span>
                </div>
                <div className="bg-[#5a678f] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#3f486e] transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">Garage incluso</span>
                </div>
                <div className="bg-[#fd8607] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
                  <span className="font-semibold text-sm sm:text-base">Tutto incluso</span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4 px-4">Caratteristiche</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Tutto ciò che serve per un soggiorno confortevole nel cuore di Merano
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4">Foto</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Scopri gli spazi di Casa Vitter nel cuore di Merano
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
              <span>Richiedi disponibilità</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Recensioni Section */}
      <section id="recensioni" className="py-12 sm:py-20 bg-[#3f486e] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Recensioni</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#5a678f] to-[#fd8607] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              La soddisfazione dei nostri ospiti è la nostra migliore referenza
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
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">Ospite Casa Vitter</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d4d4d] mb-4">Contattaci</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3f486e] to-[#5a678f] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Per informazioni su disponibilità e prenotazioni, contattaci
            </p>
          </div>

          {/* Informazioni di Contatto */}
          {/* Layout a tre colonne */}
          <div className="grid lg:grid-cols-7 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12">
            {/* Informazioni di Contatto - Sinistra (3/7 dello spazio) */}
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4d4d4d] mb-4 sm:mb-6">Come contattarci</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#3f486e] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#5a678f] transition-colors duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">Telefono</h4>
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
                    <a href="mailto:info@casavitter.com" className="text-gray-600 hover:text-[#3f486e] transition-colors duration-300 text-sm sm:text-base font-medium break-all">
                      info@casavitter.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group">
                  <div className="bg-[#fd8607] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">Ubicazione</h4>
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
                    <h4 className="text-sm sm:text-base font-semibold text-[#4d4d4d] mb-1">Codice Identificativo</h4>
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
                  Prenota il tuo soggiorno
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white opacity-90">
                  Verifica la disponibilità e prenota Casa Vitter per il tuo prossimo viaggio a Merano.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+393332109899"
                    className="group bg-[#fd8607] hover:bg-orange-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 text-white text-sm sm:text-base"
                  >
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Chiama ora</span>
                  </a>
                  <a
                    href="mailto:info@casavitter.com"
                    className="group bg-white/20 hover:bg-white/30 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 inline-flex items-center justify-center space-x-2 text-white text-sm sm:text-base"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Invia email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Info aggiuntive - Destra (2/7 dello spazio) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#3f486e] to-[#5a678f] p-6 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Informazioni Utili
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <p className="text-white/90">
                    <strong>Tassa di soggiorno:</strong> € 2,20 a notte per persona (sopra i 14 anni), da corrispondere al check-in.
                  </p>
                  <p className="text-white/90">
                    <strong>Garage:</strong> Dimensioni max auto 215 x 500 cm
                  </p>
                  <p className="text-white/90">
                    <strong>Check-in/out:</strong> Da concordare al momento della prenotazione
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
                Bilocale nel cuore di Merano, a 200m dalle Terme. Ideale per soggiorni rilassanti in Alto Adige.
              </p>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">Contatti</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#5a678f]" />
                  <a href="tel:+393332109899" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    +39 333 210 9899
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#5a678f]" />
                  <a href="mailto:info@casavitter.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all">
                    info@casavitter.com
                  </a>
                </div>
              </div>
            </div>

            {/* Posizione */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">Posizione</h4>
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
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#5a678f]">Informazioni</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p>• 2-4 persone</p>
                <p>• Garage incluso</p>
                <p>• Biancheria inclusa</p>
                <p>CIN: IT021051B4MKWBY5TU</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4 md:mb-0 text-center md:text-left">
                © 2025 Casa Vitter. Tutti i diritti riservati.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-xs text-gray-500 text-center md:text-right">
                  Bilocale a Merano - CIN: IT021051B4MKWBY5TU
                </p>
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-xs text-gray-400 hover:text-[#5a678f] transition-colors duration-300 underline"
                >
                  Privacy Policy
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
              <h2 className="text-2xl font-bold text-[#4d4d4d]">Privacy Policy e Termini di Utilizzo</h2>
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
                  <li>Email: info@casavitter.com</li>
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
                  Per esercitare tali diritti, è possibile inviare una richiesta a: <a href="mailto:info@casavitter.com" className="text-[#3f486e] hover:underline">info@casavitter.com</a>.
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
    </div>
  );
}

export default App;
