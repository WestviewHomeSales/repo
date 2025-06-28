import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface SoldPropertyData {
  ID: number
  "Date Sold": string
  "List Price": string
  "Sold Price": string
  Address: string
  "Square Feet": string
  Model: string
  Beds: number
  Baths: number
  Status: string
}

export interface ActivePropertyData {
  ID: number
  "Date Sold": string | null
  "List Price": string
  "Sold Price": string | null
  Address: string
  "Square Feet": string
  Model: string
  Beds: number
  Baths: number
  Status: string
}

export async function fetchSoldProperties(): Promise<SoldPropertyData[]> {
  try {
    console.log('Fetching sold properties from Supabase...')
    
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
      ...(data2024 || []),
      ...(data2025 || [])
    ]

    console.log(`Fetched ${combinedData.length} sold properties`)
    return combinedData
  } catch (error) {
    console.error('Error fetching sold properties:', error)
    return []
  }
}

export async function fetchActiveProperties(): Promise<ActivePropertyData[]> {
  try {
    console.log('Fetching active properties from Supabase...')
    
    const { data, error } = await supabase
      .from('westviewactive')
      .select('*')
    
    if (error) {
      console.error('Error fetching active properties:', error)
      return []
    }

    console.log(`Fetched ${data?.length || 0} active properties`)
    return data || []
  } catch (error) {
    console.error('Error fetching active properties:', error)
    return []
  }
}