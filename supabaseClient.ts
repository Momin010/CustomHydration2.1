// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gmemnrvmdrspsugkughf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZW1ucnZtZHJzcHN1Z2t1Z2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDkzOTEsImV4cCI6MjA2MzMyNTM5MX0.yvCTuWqB97oDzOjrAvOImi5lGQezR_nq8i-ZDBnctw4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
