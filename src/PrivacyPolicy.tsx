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

        <p className="text-gray-600 mb-8">Ultimo aggiornamento: gennaio 2026</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">1. Titolare del trattamento</h2>
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
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">2. Finalità e base giuridica del trattamento</h2>
            <p className="mb-3">
              Il presente sito web raccoglie e tratta dati personali per le seguenti finalità:
            </p>
            
            <h3 className="text-lg font-semibold text-[#4d4d4d] mb-2 mt-4">a) Gestione richieste di prenotazione</h3>
            <p className="mb-2">Attraverso il modulo di prenotazione vengono raccolti i seguenti dati:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Nome e cognome</li>
              <li>Email</li>
              <li>Numero di telefono</li>
              <li>Date di check-in e check-out</li>
              <li>Numero di ospiti (adulti, bambini, neonati)</li>
              <li>Eventuali messaggi o richieste particolari</li>
            </ul>
            <p className="mb-3">
              Base giuridica: art. 6, par. 1, lett. b) del GDPR - esecuzione di misure precontrattuali adottate su richiesta dell'interessato.
            </p>
            <p className="mb-3">
              I dati vengono utilizzati esclusivamente per gestire le richieste di prenotazione, confermare la disponibilità e comunicare con il cliente.
            </p>

            <h3 className="text-lg font-semibold text-[#4d4d4d] mb-2 mt-4">b) Dati di navigazione</h3>
            <p className="mb-3">
              I sistemi informatici acquisiscono automaticamente dati di navigazione (es. indirizzi IP, log tecnici, data e ora della visita, tipo di browser).
            </p>
            <p className="mb-2">Tali dati:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>vengono trattati in forma aggregata e anonima,</li>
              <li>sono utilizzati al solo scopo di garantire il corretto funzionamento e la sicurezza del sito,</li>
              <li>non vengono comunicati né diffusi a terzi, salvo obblighi di legge.</li>
            </ul>
            <p>
              Base giuridica: art. 6, par. 1, lett. f) del GDPR - legittimo interesse del titolare a garantire la sicurezza e il corretto funzionamento del sito.
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
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">4. Conservazione e comunicazione dei dati</h2>
            <p className="mb-3">
              I dati raccolti tramite il modulo di prenotazione vengono:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>Archiviati in un database sicuro (Supabase) ospitato su server conformi al GDPR nell'Unione Europea</li>
              <li>Inviati tramite il servizio Netlify Forms per garantire la ricezione delle richieste</li>
              <li>Conservati per il tempo necessario alla gestione della prenotazione e per eventuali obblighi contabili e fiscali</li>
              <li>Cancellati su richiesta dell'interessato dopo l'evasione della richiesta, salvo obblighi di legge</li>
            </ul>
            <p className="mb-3">
              I dati personali non vengono ceduti, venduti o comunicati a terzi, salvo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornitori di servizi tecnici necessari al funzionamento del sito (hosting, database)</li>
              <li>Obblighi di legge o richieste delle autorità competenti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">5. Diritti dell'interessato</h2>
            <p className="mb-3">
              In conformità agli articoli 15-22 del GDPR, l'utente ha diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano e l'accesso agli stessi;</li>
              <li>chiedere la rettifica o la cancellazione dei dati;</li>
              <li>richiedere la limitazione o l'opposizione al trattamento, quando applicabile;</li>
              <li>richiedere la portabilità dei dati forniti;</li>
              <li>proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#3f486e] hover:underline">www.garanteprivacy.it</a>).</li>
            </ul>
            <p>
              Per esercitare tali diritti o per richiedere la cancellazione di una richiesta di prenotazione, è possibile inviare una richiesta a: <a href="mailto:casavittermerano@gmail.com" className="text-[#3f486e] hover:underline">casavittermerano@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">6. Misure di sicurezza</h2>
            <p className="mb-3">
              Casa Vitter adotta misure tecniche e organizzative adeguate per proteggere i dati personali, tra cui:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Connessione sicura HTTPS per tutte le comunicazioni</li>
              <li>Database protetto con sistemi di autenticazione e controllo accessi</li>
              <li>Crittografia dei dati sensibili</li>
              <li>Backup regolari per prevenire perdite di dati</li>
              <li>Accesso ai dati limitato esclusivamente al titolare tramite pannello amministrativo protetto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">7. Conservazione dei dati</h2>
            <p className="mb-3">
              I tempi di conservazione dei dati variano in base alla tipologia:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dati di navigazione:</strong> conservati per il tempo strettamente necessario al funzionamento e alla sicurezza del sito</li>
              <li><strong>Richieste di prenotazione:</strong> conservati per tutta la durata della gestione della richiesta e del soggiorno, più eventuali periodi previsti da obblighi di legge (fiscali, contabili)</li>
              <li><strong>Dati di contatto:</strong> possono essere conservati per comunicazioni future relative a nuove disponibilità, solo previo consenso esplicito dell'interessato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">8. Collegamenti esterni e servizi terzi</h2>
            <p className="mb-3">
              Il sito potrebbe contenere collegamenti verso siti esterni (es. Google Maps per la localizzazione) o utilizzare servizi di terze parti.
            </p>
            <p className="mb-3">
              Casa Vitter non è responsabile del contenuto o delle politiche di privacy di tali servizi.
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
              <li>i contenuti pubblicati (testi, immagini, descrizioni, loghi) sono di proprietà di Casa Vitter e ne è vietata la riproduzione senza autorizzazione;</li>
              <li>l'invio di una richiesta di prenotazione non costituisce conferma automatica della disponibilità; la prenotazione si intende confermata solo dopo comunicazione esplicita da parte del titolare;</li>
              <li>le informazioni fornite hanno finalità puramente informative e non costituiscono un'offerta contrattuale vincolante;</li>
              <li>Casa Vitter non potrà essere ritenuta responsabile per eventuali errori, omissioni o per danni diretti o indiretti derivanti dall'uso delle informazioni contenute nel sito;</li>
              <li>l'utente si impegna a fornire dati veritieri e accurati e a non utilizzare il sito per scopi contrari alla legge o lesivi dei diritti di terzi.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4d4d4d] mb-4">10. Modifiche alla presente informativa</h2>
            <p className="mb-3">
              Casa Vitter si riserva il diritto di modificare o aggiornare la presente informativa in qualsiasi momento, in conformità alle evoluzioni normative o tecniche.
            </p>
            <p>
              La versione aggiornata sarà sempre disponibile in questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#3f486e] to-[#5a678f] hover:from-[#5a678f] hover:to-[#3f486e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
              © 2026 Casa Vitter. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
