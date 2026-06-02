import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tfvpotgivteybnmgrnoo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmdnBvdGdpdnRleWJubWdybm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzODE1NDcsImV4cCI6MjA5NTk1NzU0N30.quFKPagN0CtfQ4_-aiWn-eMASia4PMYR_ZkC8kwrmHc';

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
