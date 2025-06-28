import { Property } from '../types/property'
import { SoldPropertyData, ActivePropertyData } from '../lib/supabase'

export function mapSoldPropertyToProperty(soldProperty: SoldPropertyData): Property {
  // Generate a unique ID based on address and sold date
  const id = Math.abs(
    (soldProperty.Address + soldProperty["Date Sold"]).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
  )

  // Parse price from string (remove $ and commas)
  const parsePrice = (priceStr: string): number => {
    if (!priceStr) return 0
    return parseInt(priceStr.replace(/[$,]/g, '')) || 0
  }

  // Parse square feet from string
  const parseSqFt = (sqFtStr: string): number => {
    if (!sqFtStr) return 0
    return parseInt(sqFtStr.replace(/[,]/g, '')) || 0
  }

  // Map model name to image URL
  const getImageUrl = (model: string): string => {
    if (!model) return 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    const modelName = model.replace(/\s+/g, '')
    return `https://westviewhomesales.com/models/${modelName}.png`
  }

  const price = parsePrice(soldProperty["Sold Price"])
  const sqFt = parseSqFt(soldProperty["Square Feet"])
  const pricePerSqFt = sqFt > 0 ? Math.round(price / sqFt) : 0

  return {
    id,
    status: 'SOLD',
    imageUrl: getImageUrl(soldProperty.Model),
    price,
    address: soldProperty.Address || '',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: soldProperty.Beds || 0,
    baths: soldProperty.Baths || 0,
    sqFt,
    pricePerSqFt,
    yearBuilt: 2024, // Default year
    lotSize: 0.05, // Default lot size
    listedBy: 'Westview',
    listedDate: soldProperty["Date Sold"] || '',
    soldDate: soldProperty["Date Sold"] || '',
    propertyType: 'Single Family'
  }
}

export function mapActivePropertyToProperty(activeProperty: ActivePropertyData): Property {
  console.log('Mapping active property:', activeProperty)
  
  // Use the ID from the database
  const id = activeProperty.ID

  // Parse price from string (remove $ and commas)
  const parsePrice = (priceStr: string): number => {
    if (!priceStr) {
      console.log('No price string provided:', priceStr)
      return 0
    }
    const cleaned = priceStr.replace(/[$,]/g, '')
    const parsed = parseInt(cleaned) || 0
    console.log(`Parsing price: "${priceStr}" -> "${cleaned}" -> ${parsed}`)
    return parsed
  }

  // Parse square feet from string
  const parseSqFt = (sqFtStr: string): number => {
    if (!sqFtStr) {
      console.log('No sqft string provided:', sqFtStr)
      return 0
    }
    const cleaned = sqFtStr.replace(/[,]/g, '')
    const parsed = parseInt(cleaned) || 0
    console.log(`Parsing sqft: "${sqFtStr}" -> "${cleaned}" -> ${parsed}`)
    return parsed
  }

  // Map model name to image URL
  const getImageUrl = (model: string): string => {
    if (!model) return 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    const modelName = model.replace(/\s+/g, '')
    return `https://westviewhomesales.com/models/${modelName}.png`
  }

  // Determine builder based on model name or other criteria
  const getBuilder = (model: string): string => {
    if (!model) return 'Westview Builder'
    
    // Map specific models to builders
    const lennarModels = ['Sanibel', 'Siesta', 'Venice', 'Ventura', 'Amalfi', 'Minori', 'Sienna', 'Atlanta', 'Columbia', 'Concord', 'Annapolis', 'Boston', 'Belmont', 'Columbus', 'Edison', 'Georgia', 'Jefferson', 'Bloom', 'Celeste', 'Dawn', 'Eclipse', 'Aspen', 'Discovery', 'Dover', 'Hartford', 'Miramar', 'Sutton']
    const taylorMorrisonModels = ['Anastasia', 'Aruba', 'Barbados', 'Bermuda', 'BocaGrande', 'Captiva', 'Grenada', 'SaintThomas', 'SaintVincent', 'SantaRosa', 'Ambrosia', 'Azalea', 'Cypress', 'Elm', 'Holly', 'Magnolia', 'Maple', 'Redbud', 'Sherwood', 'Spruce', 'Ambra', 'Azzurro', 'Farnese', 'Lazio', 'Letizia', 'Pallazio', 'Hazel', 'Ivy', 'Jasmine', 'Marigold']
    
    const cleanModel = model.replace(/\s+/g, '')
    
    if (lennarModels.includes(cleanModel)) {
      return 'Lennar'
    } else if (taylorMorrisonModels.includes(cleanModel)) {
      return 'Taylor Morrison'
    }
    
    return 'Westview Builder'
  }

  const price = parsePrice(activeProperty["List Price"])
  const sqFt = parseSqFt(activeProperty["Square Feet"])
  const pricePerSqFt = sqFt > 0 ? Math.round(price / sqFt) : 0

  // Parse the date listed or use current date
  let listedDate = new Date().toISOString().split('T')[0] // Default to today
  
  if (activeProperty["Date Listed"]) {
    try {
      // Try to parse the date from the database
      const parsedDate = new Date(activeProperty["Date Listed"])
      if (!isNaN(parsedDate.getTime())) {
        listedDate = parsedDate.toISOString().split('T')[0]
      }
    } catch (error) {
      console.log('Error parsing date listed:', error)
    }
  }

  const mappedProperty: Property = {
    id,
    status: 'ACTIVE',
    imageUrl: getImageUrl(activeProperty.Model),
    price,
    address: activeProperty.Address || '',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: activeProperty.Beds || 0,
    baths: activeProperty.Baths || 0,
    sqFt,
    pricePerSqFt,
    yearBuilt: 2025, // Default year for active properties
    lotSize: 0.05, // Default lot size
    listedBy: getBuilder(activeProperty.Model),
    listedDate,
    propertyType: 'Single Family',
    // Store the URLs from Supabase for use in PropertyCard
    moreDetailsUrl: activeProperty["More Details URL"] || '',
    photoGalleryUrl: activeProperty["Photo Gallery URL"] || ''
  }

  console.log('Mapped property result:', mappedProperty)
  return mappedProperty
}