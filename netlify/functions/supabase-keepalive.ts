import { supabaseUrl, supabaseAnonKey } from '../../src/supabaseConfig';

// Supabase mette in pausa i progetti gratuiti dopo 7 giorni senza attività:
// una piccola query giornaliera tiene il database attivo.
export default async () => {
  const res = await fetch(`${supabaseUrl}/rest/v1/blocked_dates?select=id&limit=1`, {
    headers: { apikey: supabaseAnonKey },
  });

  if (!res.ok) {
    console.error(`Supabase keep-alive fallito: ${res.status} ${await res.text()}`);
    return;
  }

  console.log('Supabase keep-alive ok');
};

export const config = { schedule: '@daily' };
