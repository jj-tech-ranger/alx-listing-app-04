import React from 'react';
import { useRouter } from 'next/router';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/booking');
  };

  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-lg bg-white">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500"> / night</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="font-semibold">4.8</span>
          <span className="text-gray-400 mx-1">·</span>
          <span className="text-gray-500 underline">Reviews</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-bold text-gray-700 uppercase">Check-in</label>
            <input type="date" className="w-full text-sm outline-none text-gray-600 cursor-pointer" />
          </div>
          <div className="p-3">
            <label className="block text-xs font-bold text-gray-700 uppercase">Checkout</label>
            <input type="date" className="w-full text-sm outline-none text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="p-3">
          <label className="block text-xs font-bold text-gray-700 uppercase">Guests</label>
          <select className="w-full text-sm outline-none text-gray-600 bg-white cursor-pointer">
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4+ guests</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleBookNow}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg w-full transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.98]"
      >
        Reserve
      </button>
      
      <p className="text-center text-gray-500 text-sm mt-3">You won't be charged yet</p>
      
      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-gray-600">
          <span className="underline">${price} x 5 nights</span>
          <span>${price * 5}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span className="underline">Cleaning fee</span>
          <span>$50</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span className="underline">Service fee</span>
          <span>$35</span>
        </div>
        <div className="border-t pt-4 flex justify-between font-bold text-lg text-gray-900">
          <span>Total before taxes</span>
          <span>${price * 5 + 85}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
