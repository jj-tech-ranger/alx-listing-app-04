import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces";

export default function BookingPage() {
    const router = useRouter();
    const { propertyId, checkIn, checkOut, guests } = router.query;

    const [property, setProperty] = useState<PropertyProps | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
            } catch (err: unknown) {
                console.error("Error fetching property:", err);
            }
        };

        fetchProperty();
    }, [propertyId]);

    const calculateTotal = () => {
        if (!property || !checkIn || !checkOut) return 0;
        const start = new Date(checkIn as string);
        const end = new Date(checkOut as string);
        const nights = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        return (property.price * nights) + 85;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post(`/api/bookings`, {
                ...formData,
                propertyId,
                checkIn,
                checkOut,
                guests,
                totalPrice: calculateTotal()
            });
            setSuccess(true);
            setTimeout(() => router.push('/'), 3000);
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data.message || "Booking failed. Please try again.");
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!propertyId && !success) {
        return <div className="p-10 text-center">Please select a property from the home page first.</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Confirm and Pay</h1>

            {success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p className="font-bold">Success!</p>
                    <p>Your booking has been confirmed. Redirecting...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-semibold">Your Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input required name="firstName" placeholder="First Name" onChange={handleChange} className="border p-3 rounded w-full" />
                            <input required name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-3 rounded w-full" />
                        </div>
                        <input required name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-3 rounded w-full" />
                        <input required name="phoneNumber" placeholder="Phone" onChange={handleChange} className="border p-3 rounded w-full" />

                        <h2 className="text-xl font-semibold mt-6">Payment</h2>
                        <input required name="cardNumber" placeholder="Card Number" onChange={handleChange} className="border p-3 rounded w-full" />
                        <div className="grid grid-cols-2 gap-4">
                            <input required name="expirationDate" placeholder="MM/YY" onChange={handleChange} className="border p-3 rounded w-full" />
                            <input required name="cvv" placeholder="CVV" onChange={handleChange} className="border p-3 rounded w-full" />
                        </div>
                        <input required name="billingAddress" placeholder="Billing Address" onChange={handleChange} className="border p-3 rounded w-full" />

                        {error && <p className="text-red-500">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? "Processing..." : `Pay $${calculateTotal()}`}
                        </button>
                    </form>

                    <div className="bg-white p-6 rounded shadow border h-fit">
                        <div className="flex gap-4 mb-4">
                            {/* Optional chaining handles cases where property might be null initially */}
                            <img src={property?.image} alt={property?.name} className="w-20 h-20 object-cover rounded" />
                            <div>
                                <h3 className="font-bold">{property?.name}</h3>
                                <p className="text-sm text-gray-500">{property?.address.city}, {property?.address.country}</p>
                            </div>
                        </div>
                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Dates</span>
                                <span>{checkIn} - {checkOut}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Guests</span>
                                <span>{guests}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                                <span>Total</span>
                                <span>${calculateTotal()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}