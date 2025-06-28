import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase credentials
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SoldPropertyData {
  ID: number;
  "Date Sold": string;
  "List Price": string;
  "Sold Price": string;
  Address: string;
  "Square Feet": string;
  Model: string;
  Beds: number;
  Baths: number;
  Status: string;
}

export interface ActivePropertyData {
  [key: string]: any;
}

export async function fetchSoldProperties(): Promise<SoldPropertyData[]> {
  try {
    console.log('Fetching sold properties from Supabase...');
    
    const [{ data: data2024, error: error2024 }, { data: data2025, error: error2025 }] = await Promise.all([
      supabase.from('whs2024').select('*'),
      supabase.from('whs2025').select('*')
    ]);

    if (error2024 || error2025) {
      console.error('Error fetching sold properties:', error2024 || error2025);
      return [];
    }

    return [...(data2024 || []), ...(data2025 || [])];
  } catch (error) {
    console.error('Error fetching sold properties:', error);
    return [];
  }
}

export async function fetchActiveProperties(): Promise<ActivePropertyData[]> {
  try {
    console.log('Fetching active properties from Supabase...');
    
    const { data, error } = await supabase
      .from('westviewactive')
      .select('*');
    
    if (error) {
      console.error('Error fetching active properties:', error);
      return [];
    }

    console.log(`Successfully fetched ${data?.length || 0} active properties`);
    return data || [];
  } catch (error) {
    console.error('Error fetching active properties:', error);
    return [];
  }
}