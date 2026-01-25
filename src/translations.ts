export type Language = 'it' | 'de' | 'en';

export const translations = {
  it: {
    // Header
    home: 'Home',
    about: 'L\'Appartamento',
    reviews: 'Recensioni',
    contact: 'Contatti',
    book: 'Prenota',
    
    // Hero
    heroTitle: 'Casa Vitter',
    heroSubtitle: 'Il tuo rifugio a Merano',
    heroDescription: 'Scopri il comfort e l\'eleganza di Casa Vitter, il luogo perfetto per le tue vacanze a Merano. Ampi spazi, design moderno e una posizione strategica ti aspettano.',
    bookNow: 'Prenota ora',
    discoverMore: 'Scopri di più',
    
    // About
    aboutTitle: 'L\'Appartamento',
    aboutSubtitle: 'Casa Vitter',
    aboutDescription: 'Casa Vitter è un elegante appartamento situato nel cuore di Merano, perfetto per chi desidera vivere la città in tutto il suo splendore. Con spazi ampi e luminosi, design moderno e una posizione strategica, offre il comfort ideale per le tue vacanze.',
    aboutParagraph1: 'Casa Vitter è un silenzioso bilocale situato nel cuore di Merano, a soli 200 metri dalle rinomate Terme di Merano e a pochi passi dal centro storico. Una posizione privilegiata che unisce la tranquillità di una zona residenziale alla comodità dei servizi.',
    aboutParagraph2: 'L\'appartamento, posizionato al primo piano con ascensore, si compone di un accogliente soggiorno con divano letto a una piazza e mezzo (140x200), angolo cucina completamente attrezzato, camera matrimoniale con ampi armadi, bagno finestrato con doccia e bidet, e un ampio balcone.',
    aboutParagraph3: 'Ideale per 2 persone, può ospitare comodamente fino a 3 adulti e 1 bambino. Nel prezzo sono inclusi garage privato (a 60m), biancheria da letto, da bagno e per la cucina. Lo spazio è completamente indipendente e a vostra disposizione.',
    centralLocation: 'Posizione centrale',
    garageIncluded: 'Garage incluso',
    allInclusive: 'Tutto incluso',
    apartmentFeatures: 'Caratteristiche dell\'Appartamento',
    feature1Title: 'Posizione Centrale',
    feature1Description: 'Casa Vitter si trova nel cuore di Merano, a soli 200 metri dalle rinomate Terme di Merano e a pochi passi dal centro storico. Una posizione strategica che ti permette di raggiungere comodamente a piedi tutte le principali attrazioni, fermate dei mezzi pubblici, negozi e ristoranti della città.',
    feature1Desc: 'A pochi passi dal centro di Merano, vicino a negozi, ristoranti e attrazioni principali.',
    feature2Title: 'Perfetto per Famiglie',
    feature2Description: 'Concepito idealmente per 2 persone, l\'appartamento si adatta perfettamente anche a famiglie o gruppi fino a un massimo di 4 persone (3 adulti e un bambino), grazie al comodo divano letto del soggiorno e alla possibilità di aggiungere un lettino con sponde per bambini su richiesta.',
    feature2Desc: 'Oltre 90 mq di comfort con camere spaziose, cucina completamente attrezzata e balcone panoramico.',
    feature3Title: 'Cucina Attrezzata',
    feature3Description: 'L\'angolo cucina è completamente attrezzato con tutto il necessario per preparare i vostri pasti: frigorifero, piano cottura, forno, microonde, caffettiera e stoviglie. Perfetto per chi desidera sentirsi a casa anche in vacanza e gustare i prodotti locali dell\'Alto Adige.',
    feature3Desc: 'Arredamento contemporaneo e finiture di alta qualità per un soggiorno indimenticabile.',
    feature4Title: 'Tutto Incluso',
    feature4Description: 'La biancheria da letto, da bagno e per la cucina sono incluse nel prezzo. L\'appartamento è completamente indipendente e a vostra completa disposizione, garantendo privacy e comfort durante tutto il vostro soggiorno a Merano in un condominio tranquillo e silenzioso.',
    feature4Desc: 'Parcheggio coperto incluso per la tua comodità e sicurezza.',
    feature5Title: 'Servizi Nelle Vicinanze',
    feature5Description: 'Nelle immediate vicinanze di Casa Vitter troverete supermercati e negozi alimentari, bar, ristoranti, pizzerie, un centro commerciale e tutto ciò di cui avete bisogno per un soggiorno spensierato e rilassante. La tranquillità della zona residenziale unita alla comodità dei servizi.',
    feature6Title: 'Spazi Confortevoli',
    feature6Description: 'L\'appartamento al primo piano con ascensore si compone di un accogliente soggiorno con divano letto a una piazza e mezzo (140x200), camera matrimoniale con ampi armadi, bagno finestrato con doccia e bidet, e un ampio balcone per godere del clima mite meranese. Spazi funzionali pensati per il massimo comfort.',
    
    // Stats boxes
    fromSpa: 'Dalle Terme',
    people: 'Persone',
    
    // Features
    featuresTitle: 'Caratteristiche',
    featuresSubtitle: 'Tutto ciò che serve per un soggiorno confortevole nel cuore di Merano',
    
    // Photos
    photosTitle: 'Foto',
    photosSubtitle: 'Scopri gli spazi di Casa Vitter nel cuore di Merano',
    
    // Reviews
    reviewsTitle: 'Recensioni',
    reviewsSubtitle: 'La soddisfazione dei nostri ospiti è la nostra migliore referenza',
    requestAvailability: 'Richiedi disponibilità',
    guestLabel: 'Ospite Casa Vitter',
    testimonials: [
      {
        name: "Enrico",
        text: "Casa pulitissima, ubicata in posizione strategica per muoversi tranquillamente a piedi. Le indicazioni fornite da Lara sono state precisissime. La comunicazione è stata puntuale e piacevole, il check-in gestito al meglio anche se la prenotazione è stata fatta a meno di 24 ore dall'arrivo. L'alloggio è confortevole e completo di tutto, un'ottima base per visitare Merano e dintorni."
      },
      {
        name: "Beatrice",
        text: "Ci siamo trovati benissimo, dal check-in di persona alla partenza. Posizione ottima, è tutto raggiungibile a piedi, inoltre la fermata dei bus è a 5 minuti. L'appartamento è come da descrizione, fornito di tutto il necessario. Ivan è rimasto sempre a disposizione, comunicazione gentile, efficace e veloce. Grazie mille ancora di tutto!"
      },
      {
        name: "Tiziana",
        text: "Ivan è stato un host fantastico! Super accomodante e molto disponibile sotto ogni aspetto. Il suo appartamento era perfetto, ben attrezzato e molto confortevole. La posizione è ideale perché è molto vicino al centro della città, ma in un quartiere molto tranquillo. Consiglierei l'alloggio di Ivan a qualsiasi coppia o giovane famiglia in visita a Merano."
      },
      {
        name: "Maria Lucia",
        text: "Abbiamo prenotato all'ultimo minuto e i proprietari hanno accettato mostrandosi subito disponibili. L'appartamento è ancora più bello e accogliente dal vivo che in foto! La posizione è fantastica a due passi dal centro. La cucina è completa di tutto e i consigli degli host sono stati preziosissimi: ristoranti ottimi e passeggiate perfette per la famiglia."
      },
      {
        name: "Miriam",
        text: "Abbiamo trascorso una settimana meravigliosa a Merano. L'appartamento si trova in una posizione eccellente, è ben attrezzato e tutto era super preparato. Lara ci ha accolto personalmente e ha risposto a tutte le domande in modo rapido. Da lì si possono fare splendide escursioni a piedi, tutto è raggiungibile senza auto. Grazie per il bel momento, torneremo volentieri!"
      },
      {
        name: "Andrea",
        text: "Appartamento super bello situato in una tranquilla zona residenziale in posizione centrale a Merano, a 5 minuti dal centro. Nelle vicinanze panetterie, supermercati e ristoranti. La camera da letto separata è stata utile per noi come famiglia con bambino piccolo. Lara e Ivan gentilissimi e cortesi, sempre facilmente raggiungibili. Ci torneremo molto volentieri!"
      },
      {
        name: "David",
        text: "Abbiamo trascorso un soggiorno incantevole a Merano. Lara e Ivan sono host fantastici! La comunicazione è stata molto semplice e utile, ci hanno aiutato subito con il garage quando serviva. L'appartamento era ancora più bello che nelle foto e la posizione è semplicemente perfetta! Consiglio vivamente di soggiornare da Lara e Ivan."
      },
      {
        name: "Claudia",
        text: "Ottimo soggiorno, pulito e confortevole. L'appartamento ha tutto ciò di cui si potrebbe aver bisogno, è soleggiato e a pochi passi dalla Passeggiata e dal centro storico. Il balcone con vista sulle Dolomiti è meraviglioso. Lara ci ha accolto molto cordialmente, rendendo il check-in facile e veloce. Ha risposto rapidamente durante tutto il soggiorno."
      },
      {
        name: "Luca",
        text: "Bellissima esperienza. La casa è spaziosa e dotata di un bellissimo balcone dove abbiamo fatto colazione e pranzato. Tutto molto curato e pulito. Ci hanno fornito seggiolone, bavaglino, accappatoio e giochi per i bambini. Garage comodo e utile. Ivan e Lara gentili, solari e sempre disponibili. Consigliatissimo. Per un ritorno a Merano sappiamo dove andare!"
      }
    ],
    
    // Contact
    contactTitle: 'Contatti',
    contactSubtitle: 'Per informazioni su disponibilità e prenotazioni, contattaci',
    contactDescription: 'Hai domande o vuoi maggiori informazioni? Contattaci e saremo felici di risponderti.',
    contactInfoTitle: 'Come contattarci',
    phone: 'Telefono',
    email: 'Email',
    address: 'Indirizzo',
    addressValue: 'Via Verdi 99, 39012 Merano (BZ)',
    bookYourStay: 'Prenota il tuo soggiorno',
    bookYourStayDesc: 'Verifica la disponibilità e prenota Casa Vitter per il tuo prossimo viaggio a Merano.',
    callNow: 'Chiama ora',
    sendEmail: 'Invia email',
    bookNowBtn: 'Prenota ora',
    usefulInfo: 'Informazioni Utili',
    touristTax: 'Tassa di soggiorno:',
    touristTaxValue: '€ 2,20 a notte per persona (sopra i 14 anni), da corrispondere al check-in.',
    garage: 'Garage:',
    garageValue: 'Dimensioni max auto 215 x 500 cm',
    checkInOut: 'Check-in/out:',
    checkInOutValue: 'Da concordare al momento della prenotazione',
    
    // Booking
    bookingTitle: 'Prenota il Tuo Soggiorno',
    bookingSubtitle: 'Seleziona le date e il numero di ospiti per ricevere un\'offerta personalizzata',
    bookingSubtitleStep2: 'Completa i tuoi dati per la prenotazione',
    checkInDate: 'Data Check-in',
    checkOutDate: 'Data Check-out',
    selectDate: 'Seleziona data',
    guests: 'Ospiti',
    adults: 'Adulti',
    adultsDesc: '13 anni e oltre',
    children: 'Bambini',
    childrenDesc: '2-12 anni',
    infants: 'Neonati',
    infantsDesc: 'Fino a 2 anni',
    continue: 'Continua',
    back: 'Indietro',
    personalData: 'Dati Personali',
    fullName: 'Nome e Cognome',
    fullNamePlaceholder: 'Mario Rossi',
    emailPlaceholder: 'mario.rossi@email.com',
    phoneLabel: 'Telefono',
    phonePlaceholder: '+39 333 123 4567',
    message: 'Messaggio (opzionale)',
    messagePlaceholder: 'Hai richieste particolari? Faccelo sapere...',
    sendRequest: 'Invia Richiesta',
    requiredFields: '* Campi obbligatori. Ti risponderemo entro 24 ore.',
    selectDatesAlert: 'Per favore, seleziona le date di check-in e check-out',
    minNightsAlert: 'La prenotazione deve essere di almeno 3 notti',
    
    // Success/Error
    bookingSuccess: 'Richiesta inviata!',
    bookingSuccessMessage: 'Grazie per la tua richiesta di prenotazione. Confermeremo la disponibilità e ti contatteremo entro 24 ore.',
    bookingSuccessDetails: 'Riceverai una conferma via email o telefono con tutti i dettagli della prenotazione.',
    bookingError: 'Errore nell\'invio',
    bookingErrorMessage: 'Si è verificato un errore durante l\'invio della richiesta. Per favore riprova o contattaci direttamente.',
    close: 'Chiudi',
    
    // Footer
    footerDescription: 'Bilocale nel cuore di Merano, a 200m dalle Terme. Ideale per soggiorni rilassanti in Alto Adige.',
    footerContacts: 'Contatti',
    footerLocation: 'Posizione',
    footerInfo: 'Informazioni',
    footerCapacity: '2-4 persone',
    footerGarage: 'Garage incluso',
    footerLinens: 'Biancheria inclusa',
    footerCopyright: '© 2025 Casa Vitter. Tutti i diritti riservati.',
    footerSubtitle: 'Bilocale a Merano - CIN: IT021051B4MKWBY5TU',
    footerRights: 'Tutti i diritti riservati.',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyTitle: 'Privacy Policy e Termini di Utilizzo',
    locationLabel: 'Ubicazione',
    cinLabel: 'Codice Identificativo',
  },
  
  de: {
    // Header
    home: 'Startseite',
    about: 'Die Wohnung',
    reviews: 'Bewertungen',
    contact: 'Kontakt',
    book: 'Buchen',
    
    // Hero
    heroTitle: 'Casa Vitter',
    heroSubtitle: 'Ihr Rückzugsort in Meran',
    heroDescription: 'Entdecken Sie den Komfort und die Eleganz von Casa Vitter, dem perfekten Ort für Ihren Urlaub in Meran. Geräumige Räume, modernes Design und eine strategische Lage erwarten Sie.',
    bookNow: 'Jetzt buchen',
    discoverMore: 'Mehr erfahren',
    
    // About
    aboutTitle: 'Die Wohnung',
    aboutSubtitle: 'Casa Vitter',
    aboutDescription: 'Casa Vitter ist eine elegante Wohnung im Herzen von Meran, perfekt für alle, die die Stadt in ihrer ganzen Pracht erleben möchten. Mit großen und hellen Räumen, modernem Design und einer strategischen Lage bietet sie idealen Komfort für Ihren Urlaub.',
    aboutParagraph1: 'Casa Vitter ist eine ruhige Zwei-Zimmer-Wohnung im Herzen von Meran, nur 200 Meter von den berühmten Therme Meran entfernt und nur wenige Schritte vom historischen Zentrum. Eine privilegierte Lage, die die Ruhe eines Wohngebiets mit der Bequemlichkeit der Dienstleistungen verbindet.',
    aboutParagraph2: 'Die Wohnung im ersten Stock mit Aufzug besteht aus einem gemütlichen Wohnzimmer mit Schlafsofa (140x200), voll ausgestatteter Küchenzeile, Doppelschlafzimmer mit großen Schränken, Badezimmer mit Fenster, Dusche und Bidet und einem großen Balkon.',
    aboutParagraph3: 'Ideal für 2 Personen, kann bequem bis zu 3 Erwachsene und 1 Kind beherbergen. Im Preis inbegriffen sind private Garage (60m entfernt), Bettwäsche, Handtücher und Küchenwäsche. Der Raum ist komplett unabhängig und steht Ihnen zur Verfügung.',
    centralLocation: 'Zentrale Lage',
    garageIncluded: 'Garage inklusive',
    allInclusive: 'Alles inklusive',
    apartmentFeatures: 'Wohnungsmerkmale',
    feature1Title: 'Zentrale Lage',
    feature1Description: 'Casa Vitter befindet sich im Herzen von Meran, nur 200 Meter von den berühmten Therme Meran entfernt und nur wenige Schritte vom historischen Zentrum. Eine strategische Lage, die es Ihnen ermöglicht, bequem zu Fuß alle Hauptattraktionen, öffentlichen Verkehrsmittel, Geschäfte und Restaurants der Stadt zu erreichen.',
    feature1Desc: 'Nur wenige Schritte vom Zentrum Merans entfernt, in der Nähe von Geschäften, Restaurants und Hauptattraktionen.',
    feature2Title: 'Perfekt für Familien',
    feature2Description: 'Ideal für 2 Personen konzipiert, eignet sich die Wohnung perfekt auch für Familien oder Gruppen bis zu maximal 4 Personen (3 Erwachsene und ein Kind), dank des bequemen Schlafsofas im Wohnzimmer und der Möglichkeit, auf Anfrage ein Kinderbett mit Seitenschutz hinzuzufügen.',
    feature2Desc: 'Über 90 m² Komfort mit großzügigen Zimmern, voll ausgestatteter Küche und Panoramabalkon.',
    feature3Title: 'Ausgestattete Küche',
    feature3Description: 'Die Küchenzeile ist komplett ausgestattet mit allem Notwendigen für die Zubereitung Ihrer Mahlzeiten: Kühlschrank, Kochfeld, Backofen, Mikrowelle, Kaffeemaschine und Geschirr. Perfekt für diejenigen, die sich auch im Urlaub zu Hause fühlen und die lokalen Produkte Südtirols genießen möchten.',
    feature3Desc: 'Zeitgenössische Einrichtung und hochwertige Ausstattung für einen unvergesslichen Aufenthalt.',
    feature4Title: 'Alles Inklusive',
    feature4Description: 'Bettwäsche, Handtücher und Küchenwäsche sind im Preis inbegriffen. Die Wohnung ist komplett unabhängig und steht Ihnen vollständig zur Verfügung und garantiert Privatsphäre und Komfort während Ihres gesamten Aufenthalts in Meran in einem ruhigen Wohnhaus.',
    feature4Desc: 'Überdachter Parkplatz für Ihre Bequemlichkeit und Sicherheit inklusive.',
    feature5Title: 'Dienstleistungen in der Nähe',
    feature5Description: 'In unmittelbarer Nähe von Casa Vitter finden Sie Supermärkte und Lebensmittelgeschäfte, Bars, Restaurants, Pizzerien, ein Einkaufszentrum und alles, was Sie für einen unbeschwerten und entspannenden Aufenthalt benötigen. Die Ruhe des Wohngebiets verbunden mit der Bequemlichkeit der Dienstleistungen.',
    feature6Title: 'Komfortable Räume',
    feature6Description: 'Die Wohnung im ersten Stock mit Aufzug besteht aus einem gemütlichen Wohnzimmer mit Schlafsofa (140x200), Doppelschlafzimmer mit großen Schränken, Badezimmer mit Fenster, Dusche und Bidet und einem großen Balkon, um das milde Klima von Meran zu genießen. Funktionale Räume für maximalen Komfort.',
    
    // Stats boxes
    fromSpa: 'Von den Thermen',
    people: 'Personen',
    
    // Features
    featuresTitle: 'Merkmale',
    featuresSubtitle: 'Alles was Sie für einen komfortablen Aufenthalt im Herzen von Meran benötigen',
    
    // Photos
    photosTitle: 'Fotos',
    photosSubtitle: 'Entdecken Sie die Räume von Casa Vitter im Herzen von Meran',
    
    // Reviews
    reviewsTitle: 'Bewertungen',
    reviewsSubtitle: 'Die Zufriedenheit unserer Gäste ist unsere beste Referenz',
    requestAvailability: 'Verfügbarkeit anfragen',
    guestLabel: 'Gast Casa Vitter',
    testimonials: [
      {
        name: "Enrico",
        text: "Sehr sauberes Haus, strategisch günstig gelegen, um sich bequem zu Fuß fortzubewegen. Die von Lara bereitgestellten Anweisungen waren sehr genau. Die Kommunikation war pünktlich und angenehm, der Check-in wurde perfekt abgewickelt, obwohl die Buchung weniger als 24 Stunden vor der Ankunft erfolgte. Die Unterkunft ist komfortabel und komplett ausgestattet, eine ausgezeichnete Basis für einen Besuch in Meran und Umgebung."
      },
      {
        name: "Beatrice",
        text: "Wir haben uns sehr wohl gefühlt, vom persönlichen Check-in bis zur Abreise. Optimale Lage, alles ist zu Fuß erreichbar, außerdem ist die Bushaltestelle 5 Minuten entfernt. Die Wohnung entspricht der Beschreibung und ist mit allem Notwendigen ausgestattet. Ivan war immer verfügbar, freundliche, effektive und schnelle Kommunikation. Vielen Dank für alles!"
      },
      {
        name: "Tiziana",
        text: "Ivan war ein fantastischer Gastgeber! Super entgegenkommend und in jeder Hinsicht sehr hilfsbereit. Seine Wohnung war perfekt, gut ausgestattet und sehr komfortabel. Die Lage ist ideal, da sie sehr nah am Stadtzentrum liegt, aber in einem sehr ruhigen Viertel. Ich würde Ivans Unterkunft jedem Paar oder jungen Familien empfehlen, die Meran besuchen."
      },
      {
        name: "Maria Lucia",
        text: "Wir haben in letzter Minute gebucht und die Eigentümer haben sofort zugestimmt und sich als sehr hilfsbereit erwiesen. Die Wohnung ist live noch schöner und einladender als auf den Fotos! Die Lage ist fantastisch, nur wenige Schritte vom Zentrum entfernt. Die Küche ist komplett ausgestattet und die Tipps der Gastgeber waren sehr wertvoll: ausgezeichnete Restaurants und perfekte Spaziergänge für die Familie."
      },
      {
        name: "Miriam",
        text: "Wir haben eine wunderbare Woche in Meran verbracht. Die Wohnung befindet sich in ausgezeichneter Lage, ist gut ausgestattet und alles war super vorbereitet. Lara hat uns persönlich begrüßt und alle Fragen schnell beantwortet. Von dort aus können Sie wunderschöne Wanderungen unternehmen, alles ist ohne Auto erreichbar. Danke für die schöne Zeit, wir kommen gerne wieder!"
      },
      {
        name: "Andrea",
        text: "Super schöne Wohnung in einer ruhigen Wohngegend in zentraler Lage in Meran, 5 Minuten vom Zentrum entfernt. In der Nähe Bäckereien, Supermärkte und Restaurants. Das separate Schlafzimmer war für uns als Familie mit kleinem Kind sehr nützlich. Lara und Ivan sehr freundlich und höflich, immer leicht erreichbar. Wir kommen sehr gerne wieder!"
      },
      {
        name: "David",
        text: "Wir hatten einen bezaubernden Aufenthalt in Meran. Lara und Ivan sind fantastische Gastgeber! Die Kommunikation war sehr einfach und hilfreich, sie haben uns sofort mit der Garage geholfen, wenn nötig. Die Wohnung war noch schöner als auf den Fotos und die Lage ist einfach perfekt! Ich empfehle dringend, bei Lara und Ivan zu übernachten."
      },
      {
        name: "Claudia",
        text: "Ausgezeichneter Aufenthalt, sauber und komfortabel. Die Wohnung hat alles, was man brauchen könnte, ist sonnig und nur wenige Schritte von der Promenade und der Altstadt entfernt. Der Balkon mit Blick auf die Dolomiten ist wunderbar. Lara hat uns sehr herzlich empfangen und den Check-in einfach und schnell gemacht. Sie hat während des gesamten Aufenthalts schnell geantwortet."
      },
      {
        name: "Luca",
        text: "Wunderbare Erfahrung. Das Haus ist geräumig und verfügt über einen schönen Balkon, auf dem wir gefrühstückt und zu Mittag gegessen haben. Alles sehr gepflegt und sauber. Sie haben uns Hochstuhl, Lätzchen, Bademantel und Spielzeug für die Kinder zur Verfügung gestellt. Bequeme und nützliche Garage. Ivan und Lara freundlich, fröhlich und immer verfügbar. Sehr empfehlenswert. Für eine Rückkehr nach Meran wissen wir, wohin wir gehen müssen!"
      }
    ],
    
    // Contact
    contactTitle: 'Kontakt',
    contactSubtitle: 'Für Informationen zu Verfügbarkeit und Buchungen kontaktieren Sie uns',
    contactDescription: 'Haben Sie Fragen oder möchten Sie weitere Informationen? Kontaktieren Sie uns und wir helfen Ihnen gerne weiter.',
    contactInfoTitle: 'Wie Sie uns kontaktieren',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    addressValue: 'Verdistraße 99, 39012 Meran (BZ)',
    bookYourStay: 'Buchen Sie Ihren Aufenthalt',
    bookYourStayDesc: 'Prüfen Sie die Verfügbarkeit und buchen Sie Casa Vitter für Ihre nächste Reise nach Meran.',
    callNow: 'Jetzt anrufen',
    sendEmail: 'E-Mail senden',
    bookNowBtn: 'Jetzt buchen',
    usefulInfo: 'Nützliche Informationen',
    touristTax: 'Kurtaxe:',
    touristTaxValue: '€ 2,20 pro Nacht und Person (über 14 Jahre), beim Check-in zu zahlen.',
    garage: 'Garage:',
    garageValue: 'Max. Autogröße 215 x 500 cm',
    checkInOut: 'Check-in/out:',
    checkInOutValue: 'Bei der Buchung zu vereinbaren',
    
    // Booking
    bookingTitle: 'Buchen Sie Ihren Aufenthalt',
    bookingSubtitle: 'Wählen Sie Termine und Gästeanzahl für ein personalisiertes Angebot',
    bookingSubtitleStep2: 'Vervollständigen Sie Ihre Daten für die Buchung',
    checkInDate: 'Check-in Datum',
    checkOutDate: 'Check-out Datum',
    selectDate: 'Datum wählen',
    guests: 'Gäste',
    adults: 'Erwachsene',
    adultsDesc: '13 Jahre und älter',
    children: 'Kinder',
    childrenDesc: '2-12 Jahre',
    infants: 'Kleinkinder',
    infantsDesc: 'Bis 2 Jahre',
    continue: 'Weiter',
    back: 'Zurück',
    personalData: 'Persönliche Daten',
    fullName: 'Vor- und Nachname',
    fullNamePlaceholder: 'Max Mustermann',
    emailPlaceholder: 'max.mustermann@email.com',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+49 123 456 7890',
    message: 'Nachricht (optional)',
    messagePlaceholder: 'Haben Sie besondere Wünsche? Lassen Sie es uns wissen...',
    sendRequest: 'Anfrage senden',
    requiredFields: '* Pflichtfelder. Wir antworten innerhalb von 24 Stunden.',
    selectDatesAlert: 'Bitte wählen Sie Check-in und Check-out Daten',
    minNightsAlert: 'Die Buchung muss mindestens 3 Nächte betragen',
    
    // Success/Error
    bookingSuccess: 'Anfrage gesendet!',
    bookingSuccessMessage: 'Vielen Dank für Ihre Buchungsanfrage. Wir werden die Verfügbarkeit bestätigen und uns innerhalb von 24 Stunden bei Ihnen melden.',
    bookingSuccessDetails: 'Sie erhalten eine Bestätigung per E-Mail oder Telefon mit allen Details der Buchung.',
    bookingError: 'Fehler beim Senden',
    bookingErrorMessage: 'Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    close: 'Schließen',
    
    // Footer
    footerDescription: 'Zwei-Zimmer-Wohnung im Herzen von Meran, 200m von den Thermen entfernt. Ideal für entspannende Aufenthalte in Südtirol.',
    footerContacts: 'Kontakt',
    footerLocation: 'Standort',
    footerInfo: 'Informationen',
    footerCapacity: '2-4 Personen',
    footerGarage: 'Garage inklusive',
    footerLinens: 'Bettwäsche inklusive',
    footerCopyright: '© 2025 Casa Vitter. Alle Rechte vorbehalten.',
    footerSubtitle: 'Zwei-Zimmer-Wohnung in Meran - CIN: IT021051B4MKWBY5TU',
    footerRights: 'Alle Rechte vorbehalten.',
    privacyPolicy: 'Datenschutz',
    privacyPolicyTitle: 'Datenschutzerklärung und Nutzungsbedingungen',
    locationLabel: 'Standort',
    cinLabel: 'Identifikationscode',
  },
  
  en: {
    // Header
    home: 'Home',
    about: 'The Apartment',
    reviews: 'Reviews',
    contact: 'Contact',
    book: 'Book',
    
    // Hero
    heroTitle: 'Casa Vitter',
    heroSubtitle: 'Your retreat in Merano',
    heroDescription: 'Discover the comfort and elegance of Casa Vitter, the perfect place for your vacation in Merano. Spacious rooms, modern design, and a strategic location await you.',
    bookNow: 'Book now',
    discoverMore: 'Discover more',
    
    // About
    aboutTitle: 'The Apartment',
    aboutSubtitle: 'Casa Vitter',
    aboutDescription: 'Casa Vitter is an elegant apartment located in the heart of Merano, perfect for those who want to experience the city in all its splendor. With large and bright spaces, modern design, and a strategic location, it offers ideal comfort for your vacation.',
    aboutParagraph1: 'Casa Vitter is a quiet two-room apartment located in the heart of Merano, just 200 meters from the renowned Therme Meran and a few steps from the historic center. A privileged position that combines the tranquility of a residential area with the convenience of services.',
    aboutParagraph2: 'The apartment, located on the first floor with elevator, consists of a cozy living room with a sofa bed (140x200), fully equipped kitchenette, double bedroom with large wardrobes, bathroom with window, shower and bidet, and a large balcony.',
    aboutParagraph3: 'Ideal for 2 people, it can comfortably accommodate up to 3 adults and 1 child. The price includes private garage (60m away), bed linen, bath and kitchen linens. The space is completely independent and at your disposal.',
    centralLocation: 'Central location',
    garageIncluded: 'Garage included',
    allInclusive: 'All inclusive',
    apartmentFeatures: 'Apartment Features',
    feature1Title: 'Central Location',
    feature1Description: 'Casa Vitter is located in the heart of Merano, just 200 meters from the renowned Therme Meran and a few steps from the historic center. A strategic location that allows you to comfortably reach on foot all the main attractions, public transport stops, shops and restaurants of the city.',
    feature1Desc: 'A few steps from the center of Merano, close to shops, restaurants, and main attractions.',
    feature2Title: 'Perfect for Families',
    feature2Description: 'Ideally designed for 2 people, the apartment also adapts perfectly to families or groups up to a maximum of 4 people (3 adults and one child), thanks to the comfortable sofa bed in the living room and the possibility of adding a crib with side rails on request.',
    feature2Desc: 'Over 90 sqm of comfort with spacious rooms, fully equipped kitchen, and panoramic balcony.',
    feature3Title: 'Equipped Kitchen',
    feature3Description: 'The kitchenette is fully equipped with everything you need to prepare your meals: refrigerator, stove, oven, microwave, coffee maker and dishes. Perfect for those who want to feel at home even on vacation and enjoy the local products of South Tyrol.',
    feature3Desc: 'Contemporary furnishings and high-quality finishes for an unforgettable stay.',
    feature4Title: 'All Inclusive',
    feature4Description: 'Bed, bath and kitchen linens are included in the price. The apartment is completely independent and at your complete disposal, ensuring privacy and comfort throughout your stay in Merano in a quiet residential building.',
    feature4Desc: 'Covered parking included for your convenience and security.',
    feature5Title: 'Services Nearby',
    feature5Description: 'In the immediate vicinity of Casa Vitter you will find supermarkets and grocery stores, bars, restaurants, pizzerias, a shopping center and everything you need for a carefree and relaxing stay. The tranquility of the residential area combined with the convenience of services.',
    feature6Title: 'Comfortable Spaces',
    feature6Description: 'The apartment on the first floor with elevator consists of a cozy living room with sofa bed (140x200), double bedroom with large wardrobes, bathroom with window, shower and bidet, and a large balcony to enjoy the mild climate of Merano. Functional spaces designed for maximum comfort.',
    
    // Stats boxes
    fromSpa: 'From the Spa',
    people: 'People',
    
    // Features
    featuresTitle: 'Features',
    featuresSubtitle: 'Everything you need for a comfortable stay in the heart of Merano',
    
    // Photos
    photosTitle: 'Photos',
    photosSubtitle: 'Discover the spaces of Casa Vitter in the heart of Merano',
    
    // Reviews
    reviewsTitle: 'Reviews',
    reviewsSubtitle: 'Our guests\' satisfaction is our best reference',
    requestAvailability: 'Request availability',
    guestLabel: 'Guest Casa Vitter',
    testimonials: [
      {
        name: "Enrico",
        text: "Very clean house, strategically located to move around comfortably on foot. The instructions provided by Lara were very precise. The communication was punctual and pleasant, check-in handled perfectly even though the booking was made less than 24 hours before arrival. The accommodation is comfortable and complete with everything, an excellent base for visiting Merano and surroundings."
      },
      {
        name: "Beatrice",
        text: "We had a great time, from the in-person check-in to departure. Optimal location, everything is within walking distance, plus the bus stop is 5 minutes away. The apartment is as described, equipped with everything necessary. Ivan was always available, kind, effective and fast communication. Thanks so much for everything!"
      },
      {
        name: "Tiziana",
        text: "Ivan was a fantastic host! Super accommodating and very helpful in every aspect. His apartment was perfect, well equipped and very comfortable. The location is ideal because it is very close to the city center, but in a very quiet neighborhood. I would recommend Ivan's accommodation to any couple or young family visiting Merano."
      },
      {
        name: "Maria Lucia",
        text: "We booked at the last minute and the owners accepted, immediately showing themselves available. The apartment is even more beautiful and welcoming in person than in photos! The location is fantastic, just steps from the center. The kitchen is fully equipped and the hosts' advice was invaluable: excellent restaurants and perfect walks for the family."
      },
      {
        name: "Miriam",
        text: "We spent a wonderful week in Merano. The apartment is in an excellent location, well equipped and everything was super prepared. Lara welcomed us personally and answered all questions quickly. From there you can take beautiful hikes, everything is accessible without a car. Thanks for the beautiful moment, we will gladly return!"
      },
      {
        name: "Andrea",
        text: "Super beautiful apartment located in a quiet residential area in a central location in Merano, 5 minutes from the center. Nearby bakeries, supermarkets and restaurants. The separate bedroom was useful for us as a family with a small child. Lara and Ivan very kind and courteous, always easily reachable. We will very gladly return!"
      },
      {
        name: "David",
        text: "We spent a lovely stay in Merano. Lara and Ivan are fantastic hosts! The communication was very simple and useful, they helped us immediately with the garage when needed. The apartment was even more beautiful than in the photos and the location is simply perfect! I highly recommend staying with Lara and Ivan."
      },
      {
        name: "Claudia",
        text: "Excellent stay, clean and comfortable. The apartment has everything you could need, is sunny and just steps from the Promenade and the historic center. The balcony with views of the Dolomites is wonderful. Lara welcomed us very warmly, making check-in easy and fast. She responded quickly throughout the stay."
      },
      {
        name: "Luca",
        text: "Beautiful experience. The house is spacious and has a beautiful balcony where we had breakfast and lunch. Everything very well maintained and clean. They provided us with high chair, bib, bathrobe and toys for the children. Convenient and useful garage. Ivan and Lara kind, cheerful and always available. Highly recommended. For a return to Merano we know where to go!"
      }
    ],
    
    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'For information on availability and bookings, contact us',
    contactDescription: 'Have questions or want more information? Contact us and we\'ll be happy to answer.',
    contactInfoTitle: 'How to contact us',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: 'Via Verdi 99, 39012 Merano (BZ)',
    bookYourStay: 'Book your stay',
    bookYourStayDesc: 'Check availability and book Casa Vitter for your next trip to Merano.',
    callNow: 'Call now',
    sendEmail: 'Send email',
    bookNowBtn: 'Book now',
    usefulInfo: 'Useful Information',
    touristTax: 'Tourist tax:',
    touristTaxValue: '€ 2.20 per night per person (over 14 years), to be paid at check-in.',
    garage: 'Garage:',
    garageValue: 'Max car size 215 x 500 cm',
    checkInOut: 'Check-in/out:',
    checkInOutValue: 'To be arranged at the time of booking',
    
    // Booking
    bookingTitle: 'Book Your Stay',
    bookingSubtitle: 'Select dates and number of guests to receive a personalized offer',
    bookingSubtitleStep2: 'Complete your details for the booking',
    checkInDate: 'Check-in Date',
    checkOutDate: 'Check-out Date',
    selectDate: 'Select date',
    guests: 'Guests',
    adults: 'Adults',
    adultsDesc: '13 years and over',
    children: 'Children',
    childrenDesc: '2-12 years',
    infants: 'Infants',
    infantsDesc: 'Up to 2 years',
    continue: 'Continue',
    back: 'Back',
    personalData: 'Personal Data',
    fullName: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    emailPlaceholder: 'john.doe@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+1 234 567 8900',
    message: 'Message (optional)',
    messagePlaceholder: 'Do you have any special requests? Let us know...',
    sendRequest: 'Send Request',
    requiredFields: '* Required fields. We will respond within 24 hours.',
    selectDatesAlert: 'Please select check-in and check-out dates',
    minNightsAlert: 'The booking must be for at least 3 nights',
    
    // Success/Error
    bookingSuccess: 'Request sent!',
    bookingSuccessMessage: 'Thank you for your booking request. We will confirm availability and contact you within 24 hours.',
    bookingSuccessDetails: 'You will receive a confirmation via email or phone with all the details of the booking.',
    bookingError: 'Sending error',
    bookingErrorMessage: 'An error occurred while sending the request. Please try again or contact us directly.',
    close: 'Close',
    
    // Footer
    footerDescription: 'Two-room apartment in the heart of Merano, 200m from the Spa. Ideal for relaxing stays in South Tyrol.',
    footerContacts: 'Contacts',
    footerLocation: 'Location',
    footerInfo: 'Information',
    footerCapacity: '2-4 people',
    footerGarage: 'Garage included',
    footerLinens: 'Linens included',
    footerCopyright: '© 2025 Casa Vitter. All rights reserved.',
    footerSubtitle: 'Two-room apartment in Merano - CIN: IT021051B4MKWBY5TU',
    footerRights: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyTitle: 'Privacy Policy and Terms of Use',
    locationLabel: 'Location',
    cinLabel: 'Identification Code',
  },
};
