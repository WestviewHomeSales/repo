import React, { useEffect, useState } from 'react';
import { Clock, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDateTime } from '../utils/formatters';
import { soldProperties } from '../data/soldProperties';
import { PropertyCard } from '../components/PropertyCard';
import { Property } from '../types/property';

export const SoldPage: React.FC = () => {
  const [sortedProperties, setSortedProperties] = useState<Property[]>(soldProperties);
  const [sortOption, setSortOption] = useState('date-new');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    document.title = 'Borchini Realty | Sold Properties';
    sortProperties(soldProperties, sortOption);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Get the most recent sold date from properties
  const latestUpdate = soldProperties.reduce((latest, property) => {
    const propertyDate = new Date(property.soldDate + 'T12:00:00'); // Add noon time to avoid timezone issues
    return propertyDate > latest ? propertyDate : latest;
  }, new Date(0));

  const formattedUpdateTime = latestUpdate.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).replace(',', ' at');

  const sortProperties = (props: Property[], option: string) => {
    const sorted = [...props];
    if (option === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'sqft-asc') {
      sorted.sort((a, b) => a.sqFt - b.sqFt);
    } else if (option === 'sqft-desc') {
      sorted.sort((a, b) => b.sqFt - a.sqFt);
    } else if (option === 'date-new') {
      sorted.sort((a, b) => new Date(b.soldDate + 'T12:00:00' || '').getTime() - new Date(a.soldDate + 'T12:00:00' || '').getTime());
    } else if (option === 'date-old') {
      sorted.sort((a, b) => new Date(a.soldDate + 'T12:00:00' || '').getTime() - new Date(b.soldDate + 'T12:00:00' || '').getTime());
    }
    setSortedProperties(sorted);
    setCurrentPage(1);
    setSortOption(option);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const totalPages = itemsPerPage === 0 ? 1 : Math.ceil(sortedProperties.length / itemsPerPage);
  const startIndex = itemsPerPage === 0 ? 0 : (currentPage - 1) * itemsPerPage;
  const endIndex = itemsPerPage === 0 ? sortedProperties.length : startIndex + itemsPerPage;
  const currentProperties = sortedProperties.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Recently <span className="text-blue-600">Sold Homes</span> in Westview
        </h1>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Browse recently sold homes in the Westview community of Poinciana, Florida to get an idea of market trends and property values in the area.
        </p>
      </div>

      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Sold Listings</h2>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
          <div className="flex items-center text-xs md:text-sm text-gray-600">
            <Clock size={18} className="mr-2" />
            <span>Data Updated: {formattedUpdateTime}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="itemsPerPage" className="text-sm text-gray-600">Show:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="px-2 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value={12}>12</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={0}>All</option>
              </select>
            </div>

            <button
              className={`text-xs md:text-sm flex items-center ${
                sortOption.startsWith('date') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } px-3 py-1 rounded-md transition-colors`}
              onClick={() => sortProperties(soldProperties, sortOption.startsWith('date') ? 'date-old' : 'date-new')}
              aria-label="Sort by date"
            >
              <span className="mr-2">Date</span>
              <ChevronDown size={14} />
            </button>
            <button
              className={`text-xs md:text-sm flex items-center ${
                sortOption.startsWith('price') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } px-3 py-1 rounded-md transition-colors`}
              onClick={() => sortProperties(soldProperties, sortOption.startsWith('price') ? 'price-desc' : 'price-asc')}
              aria-label="Sort by price"
            >
              <span className="mr-2">Price</span>
              <ChevronDown size={14} />
            </button>
            <button
              className={`text-xs md:text-sm flex items-center ${
                sortOption.startsWith('sqft') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } px-3 py-1 rounded-md transition-colors`}
              onClick={() => sortProperties(soldProperties, sortOption.startsWith('sqft') ? 'sqft-desc' : 'sqft-asc')}
              aria-label="Sort by square footage"
            >
              <span className="mr-2">Sq Ft</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} isSoldPage={true} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-between items-center mb-12">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, sortedProperties.length)} of {sortedProperties.length} listings
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        <div className="bg-[#f8f9fa] rounded-lg p-6 mt-10">
          <h2 className="text-xl font-bold mb-4">Historical Sales Data</h2>
          <p className="text-gray-600 mb-4">
            Access comprehensive sales data for Westview from our historical records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://docs.google.com/spreadsheets/d/1r9PBmBPrT0EG1sn7QPYeCFYsjiVQfzvF_6Qnop0nI0U/edit?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-medium">2024 Sales Data</h3>
              </div>
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/13CPEH9XaWlt9eJtfhblCwAr8XS9kW_nlLl9vvU-_EEk/edit?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-medium">2025 Sales Data</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
