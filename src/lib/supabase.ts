import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface SoldPropertyData {
  id: number
  address: string
  city: string
  state: string
  zip: string
  model: string
  beds: number
  baths: number
  sqft: number
  price: number
  sold_date: string
  property_type: string
  builder: string
  year?: number
}

export async function fetchSoldProperties(): Promise<SoldPropertyData[]> {
  try {
    // Fetch from both tables
    const [{ data: data2024, error: error2024 }, { data: data2025, error: error2025 }] = await Promise.all([
      supabase.from('whs2024').select('*'),
      supabase.from('whs2025').select('*')
    ])

    if (error2024) {
      console.error('Error fetching 2024 data:', error2024)
    }
    
    if (error2025) {
      console.error('Error fetching 2025 data:', error2025)
    }

    // Combine and return the data
    const combinedData = [
      ...(data2024 || []).map(item => ({ ...item, year: 2024 })),
      ...(data2025 || []).map(item => ({ ...item, year: 2025 }))
    ]

    return combinedData
  } catch (error) {
    console.error('Error fetching sold properties:', error)
    return []
  }
}