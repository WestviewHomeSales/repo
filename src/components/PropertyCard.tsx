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

  // Generate IDX URLs based on property address and known listing IDs
  const generateIdxUrls = () => {
    // Create a URL-friendly version of the address
    const addressSlug = property.address
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // Map specific addresses to their actual IDX listing IDs
    const addressToListingId: { [key: string]: string } = {
      '4560 ochos rios place': 'O6318335',
      '4333 curacao place': 'O6318336',
      '4335 curacao place': 'O6318337',
      '4596 ochos rios place': 'O6318338',
      '4541 ochos rios place': 'O6318339',
      '5709 gingham drive': 'O6318340',
      '5687 portico place': 'O6318341',
      '5663 portico place': 'O6318342',
      '4548 ochos rios place': 'O6318343',
      '5626 portico place': 'O6318344',
      '5637 gingham drive': 'O6318345',
      '4725 yellow elder way': 'O6318346',
      '5733 gingham drive': 'O6318347',
      '4724 cloister street': 'O6318348',
      '4742 yellow elder way': 'O6318349',
      '5658 nevis terrace': 'O6318350',
      '5652 nevis terrace': 'O6318351',
      '5653 nevis terrace': 'O6318352',
      '4204 barbuda lane': 'O6318353',
      '4210 barbuda lane': 'O6318354',
      '4215 barbuda lane': 'O6318355',
      '4209 barbuda lane': 'O6318356',
      '4197 barbuda lane': 'O6318357',
      '4740 cloister street': 'O6318358',
      '5642 gingham drive': 'O6318359',
      '3184 skyline loop': 'O6318360',
      '2081 viewfinder street': 'O6318361',
      '5629 gingham drive': 'O6318362',
      '4572 ochos rios place': 'O6318363',
      '4147 coral harbour road': 'O6318364',
      '2414 skyline loop': 'O6318365',
      '4578 ochos rios place': 'O6318366',
      '4192 barbuda lane': 'O6318367',
      '4198 barbuda lane': 'O6318368',
      '5646 nevis terrace': 'O6318369',
      '5640 nevis terrace': 'O6318370',
      '5641 nevis terrace': 'O6318371',
      '4672 ackee road': 'O6318372',
      '2671 skyline loop': 'O6318373',
      '3056 skyline loop': 'O6318374',
      '2208 portrait street': 'O6318375',
      '3064 skyline loop': 'O6318376',
      '3060 skyline loop': 'O6318377',
      '4654 ackee road': 'O6318378',
      '2633 skyline loop': 'O6318379'
    };
    
    // Get the listing ID for this property
    const listingId = addressToListingId[addressSlug] || `O${property.id.toString().padStart(7, '0')}`;
    
    const baseUrl = 'http://borchinirealty.idxbroker.com/idx';
    const detailsUrl = `${baseUrl}/details/listing/d003/${listingId}/${addressSlug}-${property.city.toLowerCase()}-${property.state.toLowerCase()}`;
    const galleryUrl = `${baseUrl}/photogallery/d003/${listingId}`;
    
    return { detailsUrl, galleryUrl };
  };

  const modelName = getModelName();
  const showFloorPlanButton = modelName && hasFloorPlan(modelName);
  const { detailsUrl, galleryUrl } = generateIdxUrls();

  // Format the listed date for display - fix timezone issue
  const formatListedDate = (dateString: string): string => {
    // Parse as local date to avoid timezone conversion issues
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
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
        {/* Show date listed in green tag on Current Listings page */}
        {!isSoldPage && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            {formatListedDate(property.listedDate)}
          </div>
        )}
        {/* Show sold date in green tag on Sold page */}
        {isSoldPage && property.soldDate && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
            Sold: {new Date(property.soldDate + 'T12:00:00').toLocaleDateString()}
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
            {/* Listed by and Floor Plan row */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                Listed by: <span className="font-medium">{property.listedBy}</span>
              </span>
              {showFloorPlanButton && (
                <span className="text-sm text-gray-600">
                  Floor Plan: <a 
                    href={getFloorPlanUrl(modelName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {modelName}
                  </a>
                </span>
              )}
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