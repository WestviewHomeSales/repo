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
  console.log('=== MAPPING ACTIVE PROPERTY ===')
  console.log('Raw property data:', activeProperty)
  console.log('Available keys:', Object.keys(activeProperty))
  
  // Use the ID from the database
  const id = activeProperty.ID

  // Enhanced price parsing function
  const parsePrice = (priceStr: string | number | undefined): number => {
    console.log('Parsing price input:', priceStr, 'Type:', typeof priceStr)
    
    if (!priceStr && priceStr !== 0) {
      console.log('No price provided')
      return 0
    }
    
    // If it's already a number, return it
    if (typeof priceStr === 'number') {
      console.log('Price is already a number:', priceStr)
      return Math.round(priceStr)
    }
    
    // Convert to string and clean it
    const str = String(priceStr).trim()
    console.log('Price as string:', str)
    
    if (str === '' || str === 'null' || str === 'undefined') {
      console.log('Empty or null price string')
      return 0
    }
    
    // Remove all non-numeric characters except decimal points
    const cleaned = str.replace(/[^0-9.]/g, '')
    console.log('Cleaned price string:', cleaned)
    
    if (cleaned === '') {
      console.log('No numeric characters found')
      return 0
    }
    
    // Parse as float first, then round to integer
    const parsed = parseFloat(cleaned)
    const result = isNaN(parsed) ? 0 : Math.round(parsed)
    
    console.log(`Final price parsing: "${priceStr}" -> "${cleaned}" -> ${parsed} -> ${result}`)
    return result
  }

  // Enhanced square feet parsing function
  const parseSqFt = (sqFtStr: string | number | undefined): number => {
    console.log('Parsing sqft input:', sqFtStr, 'Type:', typeof sqFtStr)
    
    if (!sqFtStr && sqFtStr !== 0) {
      console.log('No sqft provided')
      return 0
    }
    
    // If it's already a number, return it
    if (typeof sqFtStr === 'number') {
      console.log('SqFt is already a number:', sqFtStr)
      return Math.round(sqFtStr)
    }
    
    // Convert to string and clean it
    const str = String(sqFtStr).trim()
    console.log('SqFt as string:', str)
    
    if (str === '' || str === 'null' || str === 'undefined') {
      console.log('Empty or null sqft string')
      return 0
    }
    
    // Remove all non-numeric characters
    const cleaned = str.replace(/[^0-9]/g, '')
    console.log('Cleaned sqft string:', cleaned)
    
    if (cleaned === '') {
      console.log('No numeric characters found in sqft')
      return 0
    }
    
    const parsed = parseInt(cleaned)
    const result = isNaN(parsed) ? 0 : parsed
    
    console.log(`Final sqft parsing: "${sqFtStr}" -> "${cleaned}" -> ${parsed} -> ${result}`)
    return result
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

  // Try to get price from either "List Price" or "Sold Price" columns
  const listPrice = activeProperty["List Price"]
  const soldPrice = activeProperty["Sold Price"]
  const priceToUse = listPrice || soldPrice
  
  console.log('Price fields available:')
  console.log('- List Price:', listPrice)
  console.log('- Sold Price:', soldPrice)
  console.log('- Using:', priceToUse)
  
  const price = parsePrice(priceToUse)
  const sqFt = parseSqFt(activeProperty["Square Feet"])
  const pricePerSqFt = sqFt > 0 && price > 0 ? Math.round(price / sqFt) : 0

  // Parse the address to avoid duplication
  const parseAddress = (addressStr: string): { address: string, city: string, state: string, zip: string } => {
    if (!addressStr) {
      return { address: '', city: 'Kissimmee', state: 'FL', zip: '34758' }
    }
    
    // Check if address already contains city, state, zip
    const fullAddressPattern = /^(.+?),\s*([^,]+),\s*([A-Z]{2})\s*(\d{5})$/
    const match = addressStr.match(fullAddressPattern)
    
    if (match) {
      return {
        address: match[1].trim(),
        city: match[2].trim(),
        state: match[3].trim(),
        zip: match[4].trim()
      }
    }
    
    // If no match, assume it's just the street address
    return {
      address: addressStr.trim(),
      city: 'Kissimmee',
      state: 'FL',
      zip: '34758'
    }
  }

  const addressInfo = parseAddress(activeProperty.Address || '')
  console.log('Parsed address:', addressInfo)

  // Use current date for listing date since there's no "Date Listed" column
  const listedDate = new Date().toISOString().split('T')[0]

  // Generate URLs based on property ID and address
  const addressSlug = addressInfo.address.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  const baseUrl = 'http://borchinirealty.idxbroker.com/idx'
  const listingId = `O${activeProperty.ID.toString().padStart(7, '0')}`
  const detailsUrl = `${baseUrl}/details/listing/d003/${listingId}/${addressSlug}-kissimmee-fl`
  const galleryUrl = `${baseUrl}/photogallery/d003/${listingId}`

  const mappedProperty: Property = {
    id,
    status: 'ACTIVE',
    imageUrl: getImageUrl(activeProperty.Model),
    price,
    address: addressInfo.address,
    city: addressInfo.city,
    state: addressInfo.state,
    zip: addressInfo.zip,
    beds: activeProperty.Beds || 0,
    baths: activeProperty.Baths || 0,
    sqFt,
    pricePerSqFt,
    yearBuilt: 2025, // Default year for active properties
    lotSize: 0.05, // Default lot size
    listedBy: getBuilder(activeProperty.Model),
    listedDate,
    propertyType: 'Single Family',
    // Use generated URLs since the schema doesn't show URL columns
    moreDetailsUrl: detailsUrl,
    photoGalleryUrl: galleryUrl
  }

  console.log('=== MAPPED PROPERTY RESULT ===')
  console.log('Final mapped property:', mappedProperty)
  console.log('Price check - Original:', priceToUse, 'Parsed:', price)
  console.log('SqFt check - Original:', activeProperty["Square Feet"], 'Parsed:', sqFt)
  console.log('================================')
  
  return mappedProperty
}