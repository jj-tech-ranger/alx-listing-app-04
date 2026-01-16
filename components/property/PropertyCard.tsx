import { PropertyProps } from "@/interfaces";
import React from "react";
import Link from "next/link";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col md:flex-row h-auto md:h-60 group">
      <div className="relative w-full md:w-80 flex-shrink-0 h-56 md:h-full overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="font-bold text-xs text-gray-800">
            {property.rating}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {property.name}
            </h3>
            <div className="text-right flex-shrink-0 ml-4">
              <span className="text-xl font-bold text-gray-900 block">
                ${property.price}
              </span>
              <span className="text-gray-500 text-xs">/ night</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm flex items-center mb-3">
            <svg
              className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            {property.address.city}, {property.address.country}
          </p>

          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {property.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {property.category.slice(0, 3).map((cat, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Link href={`/property/${property.id}`} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
