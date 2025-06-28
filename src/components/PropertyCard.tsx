import React from 'react';
import { Bed, Bath, Square } from 'lucide-react';
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

  // Extract model name from the image URL or use a property field
  const getModelName = (): string => {
    // Try to extract model from the image URL
    if (property.imageUrl && property.imageUrl.includes('/models/')) {
      const modelFromUrl = property.imageUrl.split('/models/')[1]?.split('.')[0];
      if (modelFromUrl) return modelFromUrl;
    }
    
    // If no model can be determined, return empty string
    return '';
  };

  const modelName = getModelName();
  const showFloorPlanButton = modelName && hasFloorPlan(modelName);

  // Use the URLs from the property object (generated in the mapper)
  const detailsUrl = property.moreDetailsUrl || '#';
  const galleryUrl = property.photoGalleryUrl || '#';

  // Format the listed date for display - now using real dates from the database
  const formatListedDate = (dateString: string): string => {
    if (!dateString) return 'Listed';
    
    try {
      const date = new Date(dateString + 'T12:00:00');
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return 'Listed';
      }
      
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting listed date:', error, 'Date string:', dateString);
      return 'Listed';
    }
  };

  // Format the sold date for display - handle MM/DD/YYYY format from Supabase
  const formatSoldDate = (dateString: string): string => {
    if (!dateString) return 'Invalid Date';
    
    try {
      let date: Date;
      
      // Check if the date is in MM/DD/YYYY format (from Supabase)
      if (dateString.includes('/')) {
        const [month, day, year] = dateString.split('/');
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      } else {
        // Handle other formats or ISO dates
        date = new Date(dateString + 'T12:00:00');
      }
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }
      
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting sold date:', error, 'Date string:', dateString);
      return 'Invalid Date';
    }
  };

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
        {/* Show actual listing date on Current Listings page */}
        {!isSoldPage && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            Listed: {formatListedDate(property.listedDate)}
          </div>
        )}
        {/* Show sold date in green tag on Sold page */}
        {isSoldPage && property.soldDate && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
            Sold: {formatSoldDate(property.soldDate)}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {formatPrice(property.price)}
          </h3>
          <div className="flex flex-col text-base text-gray-600">
            <span>{property.address}</span>
            <span>{property.city}, {property.state} {property.zip}</span>
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

        {/* Current Listings page layout */}
        {!isSoldPage && (
          <>
            {/* Listed by and Floor Plan on same line with same font size */}
            <div className="mb-4">
              <span className="text-sm text-gray-600">
                Listed by: <span className="font-medium">{property.listedBy}</span>
                {showFloorPlanButton && (
                  <>
                    <br />
                    Floor Plan: <a 
                      href={getFloorPlanUrl(modelName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {modelName}
                    </a>
                  </>
                )}
              </span>
            </div>

            {/* Action buttons */}
            <div className="space-y-2">
              <a
                href={detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors block text-center"
              >
                More Details
              </a>
              <a
                href={galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded font-medium hover:bg-blue-50 transition-colors block text-center"
              >
                Photo Gallery
              </a>
            </div>
          </>
        )}

        {/* Sold page layout - show only floor plan button if available */}
        {isSoldPage && showFloorPlanButton && (
          <div className="flex justify-center mt-4">
            <a
              href={getFloorPlanUrl(modelName)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition-colors w-full text-center"
            >
              Floor Plan
            </a>
          </div>
        )}
      </div>
    </div>
  );
};