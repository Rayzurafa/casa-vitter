import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxcgzfmnapbebjhkqhmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4Y2d6Zm1uYXBiZWJqaGtxaG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3MjY3MTIsImV4cCI6MjA4NDMwMjcxMn0.Pj4kASlHkux-t3qezW7ro4QW0SGmFdLarGKet-CelVE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipo per le date bloccate
export interface BlockedDate {
  id: string;
  check_in: string;
  check_out: string;
  note?: string;
  created_at: string;
}

// Tipo per le richieste di prenotazione
export interface BookingRequest {
  id: string;
  check_in: string;
  check_out: string;
  adulti: number;
  bambini: number;
  neonati: number;
  nome: string;
  email: string;
  telefono: string;
  messaggio?: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
}
