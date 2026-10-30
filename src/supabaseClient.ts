import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey } from './supabaseConfig';

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
