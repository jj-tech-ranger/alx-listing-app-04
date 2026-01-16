import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`/api/properties`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-medium text-gray-600">Finding the best stays for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 mb-10 shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Your Perfect Getaway</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Discover top-rated vacation rentals, cabins, beach houses, and more.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 max-w-5xl">
        <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Available Properties</h2>
            <p className="text-gray-500 text-sm mt-1">{properties.length} properties found</p>
          </div>
          <div className="hidden md:block">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm">
              Filters
            </button>
          </div>
        </div>
        
        {/* 
          List Layout:
          - grid-cols-1: Single column layout for list view
          - gap-6: Spacing between cards
        */}
        <div className="grid grid-cols-1 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
