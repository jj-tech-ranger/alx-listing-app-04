import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces";

export default function BookingPage() {
  const router = useRouter();
  const { propertyId, checkIn, checkOut, guests } = router.query;
  
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loadingProperty, setLoadingProperty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  useEffect(() => {
    if (!propertyId) return;
    
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingProperty(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn as string);
    const end = new Date(checkOut as string);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  };

  const nights = calculateDays();
  const subtotal = property ? property.price * nights : 0;
  const serviceFee = 35;
  const cleaningFee = 50;
  const total = subtotal + serviceFee + cleaningFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await axios.post(`/api/bookings`, {
        ...formData,
        propertyId,
        checkIn,
        checkOut,
        guests,
        totalPrice: total
      });
      setSuccess(true);
      setTimeout(() => router.push('/'), 2500);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loadingProperty || (!property && propertyId)) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!propertyId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">No booking in progress</h1>
        <button 
          onClick={() => router.push('/')} 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Request to book</h1>
        
        {success ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center shadow-sm">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <p className="font-bold text-lg">Booking Confirmed!</p>
              <p>You will be redirected to the homepage shortly.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">Your Details</h2>
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">Payment Details</h2>
                <div className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      required
                      type="text"
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Expiration</label>
                      <input
                        required
                        type="text"
                        name="expirationDate"
                        placeholder="MM/YY"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">CVV</label>
                      <input
                        required
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Billing Address</label>
                    <input
                      required
                      type="text"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  form="booking-form"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing Payment..." : `Confirm and Pay $${total}`}
                </button>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-10">
                <div className="flex gap-4 mb-6 border-b border-gray-100 pb-6">
                  <img 
                    src={property?.image} 
                    alt={property?.name} 
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 line-clamp-2">{property?.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{property?.address.city}, {property?.address.country}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{property?.rating}</span>
                      <span className="mx-1">·</span>
                      <span>{property?.reviews.length} reviews</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-4">Price details</h3>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>${property?.price} x {nights} nights</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>${cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>${serviceFee}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-xl text-gray-900 border-t border-gray-200 pt-4">
                  <span>Total (USD)</span>
                  <span>${total}</span>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Trip details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Dates</p>
                      <p className="font-medium text-gray-900">{checkIn} - {checkOut}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Guests</p>
                      <p className="font-medium text-gray-900">{guests} guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
