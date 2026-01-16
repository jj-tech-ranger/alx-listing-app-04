import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Review } from '../../interfaces/index';

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 py-4">{error}</p>;
  }

  if (reviews.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p>No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6 flex items-center">
        <span className="text-yellow-500 mr-2">★</span>
        {reviews.length} Reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200" 
              />
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-yellow-500 mr-1">
                    {'★'.repeat(Math.floor(review.rating))}
                  </span>
                  <span>{review.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed line-clamp-4">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
