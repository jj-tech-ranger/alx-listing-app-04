import React, { useState } from 'react';
import { PropertyProps } from '../../interfaces/index';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'amenities', label: 'What we offer' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'host', label: 'About host' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
        {property.images && property.images.slice(1).map((img, index) => (
          <img key={index} src={img} alt={`${property.name} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === 'description' && <p>{property.description}</p>}
          {activeTab === 'amenities' && (
            <ul className="flex flex-wrap space-x-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          )}
          {activeTab === 'reviews' && <ReviewSection reviews={property.reviews} />}
          {activeTab === 'host' && property.host && (
            <div>
              <h3 className="text-xl font-semibold">{property.host.name}</h3>
              <p>{property.host.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Section */}
      <div className="mt-8 flex justify-between">
        <div className="flex-1"></div>
        <div className="w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;