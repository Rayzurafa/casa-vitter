import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group cursor-pointer">
              <img
                src="/Progetto senza titolo - 2025-09-25T172614.709.png"
                alt="SMART Studio Logo"
                className="h-16 w-auto transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <a
              href="/"
              className="group flex items-center space-x-2 text-[#4d4d4d] hover:text-[#6e940a] transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Torna al sito</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4d4d4d] mb-6">
          Privacy Policy e Termini di Utilizzo
        </h1>

        <p className="text-gray-600 mb-8">Ultimo aggiornamento: ottobre 2025</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">1. Titolare del trattamento</h2>
            <p className="mb-3">
              Il titolare del trattamento dei dati personali è Valerio Frattaroli, con sede in Via Col Di Lana 10, 38122 Trento (TN).
            </p>
            <p className="font-semibold mb-2">Contatti:</p>
            <ul className="list-none space-y-1 ml-4">
              <li>Telefono: 338 4160536</li>
              <li>Email: smartstudiotrento@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">2. Finalità e base giuridica del trattamento</h2>
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
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">3. Cookie e strumenti di tracciamento</h2>
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
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">4. Dati forniti volontariamente</h2>
            <p className="mb-3">
              Eventuali comunicazioni inviate spontaneamente all'indirizzo email o al numero di telefono indicati sul sito comportano l'acquisizione dei dati di contatto necessari per rispondere alle richieste.
            </p>
            <p>
              Tali dati vengono trattati esclusivamente per la gestione della corrispondenza e non vengono conservati oltre il tempo necessario alla risposta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">5. Diritti dell'interessato</h2>
            <p className="mb-3">
              In conformità agli articoli 15-22 del GDPR, l'utente ha diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano;</li>
              <li>chiedere la rettifica o la cancellazione dei dati;</li>
              <li>richiedere la limitazione o l'opposizione al trattamento, quando applicabile;</li>
              <li>proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#6e940a] hover:underline">www.garanteprivacy.it</a>).</li>
            </ul>
            <p>
              Per esercitare tali diritti, è possibile inviare una richiesta a: <a href="mailto:smartstudiotrento@gmail.com" className="text-[#6e940a] hover:underline">smartstudiotrento@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">6. Misure di sicurezza</h2>
            <p>
              SMART Studio adotta misure tecniche e organizzative adeguate per prevenire la perdita, l'uso improprio o l'accesso non autorizzato ai dati personali eventualmente trattati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">7. Conservazione dei dati</h2>
            <p className="mb-3">
              I dati tecnici di navigazione vengono conservati per il tempo strettamente necessario al funzionamento e alla sicurezza del sito.
            </p>
            <p>
              I dati forniti spontaneamente via email o telefono vengono conservati solo per il periodo necessario alla gestione della richiesta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">8. Collegamenti esterni</h2>
            <p className="mb-3">
              Il sito potrebbe contenere collegamenti verso siti esterni o pagine di terzi.
            </p>
            <p className="mb-3">
              SMART Studio non è responsabile del contenuto o delle politiche di privacy di tali siti.
            </p>
            <p>
              Si consiglia di consultare le rispettive informative prima di fornire dati personali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">9. Termini di utilizzo del sito</h2>
            <p className="mb-3">
              L'accesso e l'utilizzo del presente sito comportano l'accettazione delle seguenti condizioni:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>i contenuti pubblicati (testi, immagini, descrizioni, loghi) sono di proprietà di SMART Studio e ne è vietata la riproduzione senza autorizzazione;</li>
              <li>le informazioni fornite hanno finalità puramente informative e non costituiscono un'offerta contrattuale;</li>
              <li>SMART Studio non potrà essere ritenuto responsabile per eventuali errori, omissioni o per danni diretti o indiretti derivanti dall'uso delle informazioni contenute nel sito;</li>
              <li>l'utente si impegna a non utilizzare il sito per scopi contrari alla legge o lesivi dei diritti di terzi.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">10. Modifiche alla presente informativa</h2>
            <p className="mb-3">
              SMART Studio si riserva il diritto di modificare o aggiornare la presente informativa in qualsiasi momento, in conformità alle evoluzioni normative o tecniche.
            </p>
            <p>
              La versione aggiornata sarà sempre disponibile in questa pagina.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="group inline-flex items-center space-x-2 bg-[#6e940a] hover:bg-[#85b602] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Torna alla home</span>
          </a>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 SMART Studio. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
