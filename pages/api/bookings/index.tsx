import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Here you can process the booking data
    const bookingData = req.body;
    // For now, just return success
    res.status(200).json({ message: 'Booking submitted successfully', data: bookingData });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}