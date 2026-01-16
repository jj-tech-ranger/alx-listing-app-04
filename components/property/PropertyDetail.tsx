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
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{property.name}</h1>
        <div className="flex items-center text-gray-600 text-sm md:text-base">
          <span className="flex items-center mr-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-semibold text-gray-900">{property.rating}</span>
            <span className="mx-1">·</span>
            <span className="underline cursor-pointer">{property.reviews.length} reviews</span>
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden h-[400px] md:h-[500px] mb-10 shadow-lg">
        <div className="md:col-span-2 h-full">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
          />
        </div>
        <div className="hidden md:grid grid-rows-2 gap-2 h-full">
          {property.images && property.images.slice(1, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 1}`}
              className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
            />
          ))}
        </div>
        <div className="hidden md:grid grid-rows-2 gap-2 h-full">
          {property.images && property.images.slice(3, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 3}`}
              className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Host Info */}
          {property.host && (
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Hosted by {property.host.name}</h2>
                <p className="text-gray-500 text-sm mt-1">Superhost · 5 years hosting</p>
              </div>
              <img
                src={property.host.avatar}
                alt={property.host.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
              />
            </div>
          )}

          {/* Tabs */}
          <div className="mt-8">
            <div className="flex space-x-8 border-b border-gray-200 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 px-1 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id 
                      ? 'border-b-2 border-black text-black' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-8 min-h-[300px]">
              {activeTab === 'description' && (
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p>{property.description}</p>
                  <p className="mt-4">
                    Relax in this unique space where every detail has been carefully considered for your comfort.
                    Whether you're here for a weekend getaway or a longer stay, you'll find everything you need
                    to feel right at home.
                  </p>
                </div>
              )}

              {activeTab === 'amenities' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.category.map((amenity, index) => (
                      <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{amenity}</span>
                      </li>
                    ))}
                    {/* Adding some generic amenities for better visual */}
                    <li className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Wifi</span>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Free parking</span>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Kitchen</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && <ReviewSection propertyId={property.id} />}

              {activeTab === 'host' && property.host && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <img
                      src={property.host.avatar}
                      alt={property.host.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{property.host.name}</h3>
                      <p className="text-gray-500 text-sm">Joined in 2018</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{property.host.description}"</p>

                  <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Response rate</p>
                      <p>100%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Response time</p>
                      <p>within an hour</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingSection price={property.price} propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
