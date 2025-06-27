import React from 'react';
import { Bed, Bath, Square, Calendar, MapPin } from 'lucide-react';
import { Property } from '../types/property';
import { formatPrice } from '../utils/formatters';

interface PropertyCardProps {
  property: Property;
  isSoldPage?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, isSoldPage = false }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-500';
      case 'PENDING':
        return 'bg-yellow-500';
      case 'SOLD':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getFloorPlanUrl = (model: string): string => {
    if (!model) return '';
    // Remove spaces and special characters from model name to match PDF filename
    const cleanModelName = model.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
    return `https://westviewhomesales.com/floorplans/${cleanModelName}.pdf`;
  };

  const hasFloorPlan = (model: string): boolean => {
    // List of known floor plan models that have PDFs available
    const availableFloorPlans = [
      'Amalfi', 'Ambra', 'Ambrosia', 'Anastasia', 'Annapolis', 'Aruba', 'Aspen', 'Atlanta', 'Azalea', 'Azzurro',
      'Barbados', 'Belmont', 'Bermuda', 'Bloom', 'BocaGrande', 'Boston', 'Captiva', 'Celeste', 'Columbia', 
      'Columbus', 'Concord', 'Cypress', 'Dawn', 'Discovery', 'Dover', 'Eclipse', 'Edison', 'Elm', 'Farnese',
      'Georgia', 'Grenada', 'Hartford', 'Hazel', 'Holly', 'Ivy', 'Jasmine', 'Jefferson', 'Lazio', 'Letizia',
      'Magnolia', 'Maple', 'Marigold', 'Minori', 'Miramar', 'Pallazio', 'Redbud', 'SaintThomas', 'SaintVincent',
      'Sanibel', 'SantaRosa', 'Sherwood', 'Sienna', 'Siesta', 'Spruce', 'Sutton', 'Venice', 'Ventura'
    ];
    
    const cleanModelName = model.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
    return availableFloorPlans.includes(cleanModelName);
  };

  // Extract model name from listedBy or use a default
  const getModelName = (): string => {
    // For sold properties, try to extract model from the image URL or other sources
    if (property.imageUrl && property.imageUrl.includes('/models/')) {
      const modelFromUrl = property.imageUrl.split('/models/')[1]?.split('.')[0];
      if (modelFromUrl) return modelFromUrl;
    }
    
    // If no model can be determined, return empty string
    return '';
  };

  const modelName = getModelName();
  const showFloorPlanButton = modelName && hasFloorPlan(modelName);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={`${property.address} - ${property.city}, ${property.state}`}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg';
          }}
        />
        {/* Only show status tag on Current Listings page, not on Sold page */}
        {!isSoldPage && (
          <div className={`absolute top-4 left-4 px-2 py-1 rounded text-white text-xs font-medium ${getStatusColor(property.status)}`}>
            {property.status}
          </div>
        )}
        {isSoldPage && property.soldDate && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
            Sold: {new Date(property.soldDate).toLocaleDateString()}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {formatPrice(property.price)}
          </h3>
          <div className="flex items-start text-gray-600 text-sm">
            <MapPin size={14} className="mr-1 mt-0.5 flex-shrink-0" />
            {isSoldPage ? (
              <div className="flex flex-col">
                <span>{property.address}</span>
                <span>{property.city}, {property.state} {property.zip}</span>
              </div>
            ) : (
              <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <Bed size={16} className="text-gray-500" />
            </div>
            <span className="text-lg font-semibold">{property.beds}</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <Bath size={16} className="text-gray-500" />
            </div>
            <span className="text-lg font-semibold">{property.baths}</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <Square size={16} className="text-gray-500" />
            </div>
            <span className="text-lg font-semibold">{property.sqFt.toLocaleString()}</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">Sq Ft</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>
              {isSoldPage ? 'Sold' : 'Listed'}: {new Date(isSoldPage ? property.soldDate || property.listedDate : property.listedDate).toLocaleDateString()}
            </span>
          </div>
          <span className="font-medium">${property.pricePerSqFt}/sq ft</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Listed by: <span className="font-medium">{property.listedBy}</span>
          </span>
          {showFloorPlanButton && (
            <a
              href={getFloorPlanUrl(modelName)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Floor Plan
            </a>
          )}
        </div>
      </div>
    </div>
  );
};