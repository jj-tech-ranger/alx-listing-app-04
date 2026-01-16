import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTY_LIST } from '../../../constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(PROPERTY_LIST);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}