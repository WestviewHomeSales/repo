import { Property } from '../types/property'
import { SoldPropertyData } from '../lib/supabase'

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