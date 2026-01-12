import { NextApiRequest, NextApiResponse } from 'next';
import { PropertyProps } from '../../../interfaces/index';

// Mock data
const mockProperties: PropertyProps[] = [
  {
    id: '1',
    name: 'Cozy Apartment',
    rating: 4.5,
    address: {
      city: 'New York',
      country: 'USA',
    },
    image: '/assets/property1.jpg',
    images: ['/assets/property1.jpg', '/assets/property1-2.jpg'],
    description: 'A beautiful cozy apartment in the heart of the city.',
    category: ['Apartment', 'Cozy'],
    reviews: [
      {
        avatar: '/assets/avatar1.jpg',
        name: 'John Doe',
        rating: 5,
        comment: 'Great place!',
      },
    ],
    price: 100,
    host: {
      name: 'Host Name',
      avatar: '/assets/host.jpg',
      description: 'Friendly host.',
    },
  },
  // Add more mock properties as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const property = mockProperties.find((p) => p.id === id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}