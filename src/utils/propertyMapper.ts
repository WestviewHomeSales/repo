import { Property } from '../types/property'
import { SoldPropertyData } from '../lib/supabase'

export function mapSoldPropertyToProperty(soldProperty: SoldPropertyData): Property {
  // Generate a unique ID based on address and sold date
  const id = Math.abs(
    (soldProperty.address + soldProperty.sold_date).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
  )

  // Map model name to image URL
  const getImageUrl = (model: string): string => {
    const modelName = model.replace(/\s+/g, '')
    return `https://westviewhomesales.com/models/${modelName}.png`
  }

  // Calculate price per sq ft
  const pricePerSqFt = soldProperty.sqft > 0 ? Math.round(soldProperty.price / soldProperty.sqft) : 0

  return {
    id,
    status: 'SOLD',
    imageUrl: getImageUrl(soldProperty.model),
    price: soldProperty.price,
    address: soldProperty.address,
    city: soldProperty.city,
    state: soldProperty.state,
    zip: soldProperty.zip,
    beds: soldProperty.beds,
    baths: soldProperty.baths,
    sqFt: soldProperty.sqft,
    pricePerSqFt,
    yearBuilt: soldProperty.year || 2024, // Use the year from the table or default
    lotSize: 0.05, // Default lot size
    listedBy: soldProperty.builder,
    listedDate: soldProperty.sold_date, // Use sold date as listed date for sold properties
    soldDate: soldProperty.sold_date,
    propertyType: soldProperty.property_type === 'Townhouse' ? 'Townhouse' : 'Single Family'
  }
}