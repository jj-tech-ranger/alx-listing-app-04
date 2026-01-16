import { PropertyProps } from "@/interfaces";
import React from "react";
import Link from "next/link";

interface PropertyCardProps {
    property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <Link href={`/property/${property.id}`} className="group cursor-pointer">
            <div className="flex flex-col gap-2 w-full">
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
                    <img
                        src={property.image}
                        alt={property.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Rating Badge (Floating) */}
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 shadow-sm backdrop-blur-sm">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3 w-3 text-black"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xs font-semibold text-black">
              {property.rating}
            </span>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900 truncate pr-2">
                            {property.address.city}, {property.address.country}
                        </h3>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-1">
                        {property.name}
                    </p>
                    <div className="mt-1 flex items-baseline gap-1">
            <span className="font-semibold text-gray-900">
              ${property.price}
            </span>
                        <span className="text-gray-500 text-sm">night</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;