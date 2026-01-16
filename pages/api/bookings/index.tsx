import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const {
                    firstName, lastName, email, phoneNumber,
                    propertyId, checkIn, checkOut, guests, totalPrice
                } = req.body;

                const booking = await Booking.create({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    propertyId,
                    checkIn: new Date(checkIn),
                    checkOut: new Date(checkOut),
                    guests: Number(guests),
                    totalPrice,
                    status: 'confirmed'
                });

                res.status(201).json({ success: true, data: booking });
            } catch (error: unknown) {

                if (error instanceof Error) {
                    res.status(400).json({ success: false, message: error.message });
                } else {
                    res.status(400).json({ success: false, message: 'An unknown error occurred' });
                }
            }
            break;

        default:
            res.status(405).json({ success: false, message: 'Method Not Allowed' });
            break;
    }
}