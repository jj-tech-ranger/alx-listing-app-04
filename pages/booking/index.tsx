import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber ||
        !formData.cardNumber || !formData.expirationDate || !formData.cvv || !formData.billingAddress) {
      return "All fields are required.";
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Invalid email address.";
    }
    // Basic card number validation (16 digits)
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      return "Card number must be 16 digits.";
    }
    // Basic expiration date validation (MM/YY)
    if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      return "Expiration date must be in MM/YY format.";
    }
    // Basic CVV validation (3 digits)
    if (!/^\d{3}$/.test(formData.cvv)) {
      return "CVV must be 3 digits.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Book Your Stay</h1>
      {success && <p className="text-green-500 mb-4">Booking confirmed!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date (MM/YY)"
            value={formData.expirationDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="billingAddress"
            placeholder="Billing Address"
            value={formData.billingAddress}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}