export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface Host {
  name: string;
  avatar: string;
  description: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: Address;
  image: string;
  images?: string[];
  description: string;
  category: string[];
  reviews: Review[];
  price: number;
  host?: Host;
}

export interface BookingProps {
  id?: string;
  propertyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}
