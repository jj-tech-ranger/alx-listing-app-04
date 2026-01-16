import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps } from "@/interfaces";

const CATEGORIES = [
    "Trending", "Beachfront", "Cabins", "Urban", "Countryside", "Pools", "Luxe", "Lake"
];

export default function Home() {
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("Trending");

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

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 pb-20 pt-16 text-white shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
                        Find your next adventure
                    </h1>
                    <p className="mb-8 text-lg text-blue-100">
                        Discover homes, cabins, and unique stays around the world.
                    </p>

                    <div className="mx-auto flex max-w-2xl transform items-center rounded-full bg-white p-2 shadow-2xl transition-transform hover:scale-[1.01]">
                        <div className="flex-1 px-6 text-left border-r border-gray-200">
                            <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Where</label>
                            <input type="text" placeholder="Search destinations" className="w-full text-gray-900 placeholder-gray-400 focus:outline-none" />
                        </div>
                        <div className="hidden md:block flex-1 px-6 text-left border-r border-gray-200">
                            <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Check in</label>
                            <input type="text" placeholder="Add dates" className="w-full text-gray-900 placeholder-gray-400 focus:outline-none" />
                        </div>
                        <div className="hidden md:block flex-1 px-6 text-left">
                            <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider">Who</label>
                            <input type="text" placeholder="Add guests" className="w-full text-gray-900 placeholder-gray-400 focus:outline-none" />
                        </div>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-10 border-b border-gray-100 bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex space-x-8 overflow-x-auto pb-2 scrollbar-hide">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors border-b-2 ${
                                    activeCategory === category
                                        ? "border-black text-black"
                                        : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 py-12">
                {loading ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="animate-pulse">
                                <div className="aspect-square w-full rounded-xl bg-gray-200 mb-2"></div>
                                <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}