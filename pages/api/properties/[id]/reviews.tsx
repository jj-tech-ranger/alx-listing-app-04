import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTY_LIST } from '../../../../constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const property = PROPERTY_LIST.find((p) => p.id === id);
    if (property) {
      res.status(200).json(property.reviews);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}