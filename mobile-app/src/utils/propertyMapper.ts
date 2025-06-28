import { Property } from '../types/Property';
import { SoldPropertyData, ActivePropertyData } from '../services/supabase';

export function mapSoldPropertyToProperty(soldProperty: SoldPropertyData): Property {
  const id = Math.abs(
    (soldProperty.Address + soldProperty["Date Sold"]).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0)
  );

  const parsePrice = (priceStr: string): number => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[$,]/g, '')) || 0;
  };

  const parseSqFt = (sqFtStr: string): number => {
    if (!sqFtStr) return 0;
    return parseInt(sqFtStr.replace(/[,]/g, '')) || 0;
  };

  const getImageUrl = (model: string): string => {
    if (!model) return 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg';
    const modelName = model.replace(/\s+/g, '');
    return `https://westviewhomesales.com/models/${modelName}.png`;
  };

  const price = parsePrice(soldProperty["Sold Price"]);
  const sqFt = parseSqFt(soldProperty["Square Feet"]);
  const pricePerSqFt = sqFt > 0 ? Math.round(price / sqFt) : 0;

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
    yearBuilt: 2024,
    lotSize: 0.05,
    listedBy: 'Westview',
    listedDate: soldProperty["Date Sold"] || '',
    soldDate: soldProperty["Date Sold"] || '',
    propertyType: 'Single Family'
  };
}

export function mapActivePropertyToProperty(activeProperty: ActivePropertyData): Property {
  const id = activeProperty.ID || activeProperty.id || Math.random() * 1000000;

  const parsePrice = (priceStr: any): number => {
    if (!priceStr && priceStr !== 0) return 0;
    if (typeof priceStr === 'number') return Math.round(priceStr);
    
    const str = String(priceStr).trim();
    if (str === '' || str === 'null' || str === 'undefined') return 0;
    
    const cleaned = str.replace(/[^0-9.]/g, '');
    if (cleaned === '') return 0;
    
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : Math.round(parsed);
  };

  const parseSqFt = (sqFtStr: any): number => {
    if (!sqFtStr && sqFtStr !== 0) return 0;
    if (typeof sqFtStr === 'number') return Math.round(sqFtStr);
    
    const str = String(sqFtStr).trim();
    if (str === '' || str === 'null' || str === 'undefined') return 0;
    
    const cleaned = str.replace(/[^0-9]/g, '');
    if (cleaned === '') return 0;
    
    const parsed = parseInt(cleaned, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  const getImageUrl = (model: string): string => {
    if (!model) return 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg';
    const modelName = model.replace(/\s+/g, '');
    return `https://westviewhomesales.com/models/${modelName}.png`;
  };

  const price = parsePrice(activeProperty['List Price'] || activeProperty.price || activeProperty.Price);
  const sqFt = parseSqFt(activeProperty['Square Feet'] || activeProperty.sqft || activeProperty.SqFt);
  const pricePerSqFt = sqFt > 0 && price > 0 ? Math.round(price / sqFt) : 0;

  return {
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
    yearBuilt: 2025,
    lotSize: 0.05,
    listedBy: 'Westview Builder',
    listedDate: activeProperty['Listed Date'] || new Date().toISOString().split('T')[0],
    propertyType: 'Single Family',
    moreDetailsUrl: activeProperty['More Details URL'],
    photoGalleryUrl: activeProperty['Photo Gallery URL']
  };
}