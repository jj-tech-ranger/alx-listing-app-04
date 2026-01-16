import { PropertyProps } from "@/interfaces";

export const PROPERTY_LIST: PropertyProps[] = [
  {
    id: '1',
    name: 'Villa Ocean Breeze',
    rating: 4.8,
    address: {
      city: 'Seminyak',
      country: 'Indonesia',
    },
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Experience luxury living in this stunning oceanfront villa. Featuring a private infinity pool, open-air living spaces, and breathtaking sunset views, Villa Ocean Breeze is the perfect getaway for relaxation and indulgence.',
    category: ['Villa', 'Luxury', 'Pool', 'Ocean View'],
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Sarah Jenkins',
        rating: 5,
        comment: 'Absolutely breathtaking views and the service was impeccable. Highly recommended!',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Michael Chen',
        rating: 4.5,
        comment: 'Great location and amenities. The pool is amazing.',
      }
    ],
    price: 350,
    host: {
      name: 'Elena Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      description: 'Passionate about hospitality and interior design. I love sharing the beauty of Bali with guests from around the world.',
    },
  },
  {
    id: '2',
    name: 'Mountain Retreat Cabin',
    rating: 4.7,
    address: {
      city: 'Aspen',
      country: 'USA',
    },
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A cozy, modern cabin nestled in the mountains. Perfect for ski trips or summer hiking adventures. Features a hot tub, fireplace, and panoramic mountain views.',
    category: ['Cabin', 'Mountain', 'Skiing', 'Nature'],
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'David Wilson',
        rating: 5,
        comment: 'The perfect winter escape. The fireplace made it so cozy.',
      }
    ],
    price: 250,
    host: {
      name: 'Thomas Mueller',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      description: 'Outdoor enthusiast and local guide. Happy to recommend the best trails and ski runs.',
    },
  },
  {
    id: '3',
    name: 'Urban Loft in Downtown',
    rating: 4.6,
    address: {
      city: 'New York',
      country: 'USA',
    },
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Stylish and spacious loft in the heart of the city. Walking distance to major attractions, restaurants, and nightlife. High ceilings and modern decor.',
    category: ['Apartment', 'City', 'Modern', 'Loft'],
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        name: 'Emily Clarke',
        rating: 4,
        comment: 'Great location, but a bit noisy at night due to the city traffic.',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        name: 'James O\'Connor',
        rating: 5,
        comment: 'Loved the industrial style of the apartment.',
      }
    ],
    price: 200,
    host: {
      name: 'Jessica Lee',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      description: 'City lover and foodie. I know all the best hidden gems in NYC.',
    },
  },
  {
    id: '4',
    name: 'Seaside Cottage',
    rating: 4.9,
    address: {
      city: 'Cornwall',
      country: 'UK',
    },
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Charming cottage right on the beach. Fall asleep to the sound of waves. Perfect for a romantic getaway or a peaceful retreat.',
    category: ['Cottage', 'Beach', 'Romantic', 'Historic'],
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
        name: 'Sophie Turner',
        rating: 5,
        comment: 'Magical place. We didn\'t want to leave.',
      }
    ],
    price: 180,
    host: {
      name: 'Arthur Pendragon',
      avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
      description: 'Retired fisherman who loves sharing stories about the sea.',
    },
  },
  {
    id: '5',
    name: 'Modern Desert Home',
    rating: 4.8,
    address: {
      city: 'Joshua Tree',
      country: 'USA',
    },
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Architectural masterpiece in the desert. Stargaze from the hot tub or explore the nearby national park. Minimalist design with maximum comfort.',
    category: ['House', 'Desert', 'Modern', 'Nature'],
    reviews: [],
    price: 400,
    host: {
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      description: 'Architect and nature lover.',
    },
  },
  {
    id: '6',
    name: 'Historic Canal House',
    rating: 4.7,
    address: {
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Stay in a piece of history. This 17th-century canal house has been beautifully renovated while preserving its original charm.',
    category: ['House', 'City', 'Historic', 'Canal'],
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        name: 'Marie Dubois',
        rating: 4.5,
        comment: 'Steep stairs, but that\'s part of the charm! Beautiful view.',
      }
    ],
    price: 280,
    host: {
      name: 'Willem van der Meer',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      description: 'History buff and art collector.',
    },
  },
  {
    id: '7',
    name: 'Forest Treehouse',
    rating: 4.9,
    address: {
      city: 'Portland',
      country: 'USA',
    },
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Escape to the trees in this magical treehouse. Surrounded by lush forest, it is the perfect place to disconnect and reconnect with nature.',
    category: ['Treehouse', 'Nature', 'Unique', 'Forest'],
    reviews: [],
    price: 150,
    host: {
      name: 'Oliver Green',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
      description: 'Nature photographer and treehouse builder.',
    },
  },
  {
    id: '8',
    name: 'Luxury Penthouse',
    rating: 4.9,
    address: {
      city: 'Dubai',
      country: 'UAE',
    },
    image: 'https://images.unsplash.com/photo-1512918760532-3ed64bc8066e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1512918760532-3ed64bc8066e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Experience the height of luxury in this stunning penthouse. Private elevator, rooftop pool, and 360-degree views of the city skyline.',
    category: ['Penthouse', 'Luxury', 'City', 'Pool'],
    reviews: [],
    price: 850,
    host: {
      name: 'Amir Al-Fayed',
      avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
      description: 'Real estate developer and luxury lifestyle expert.',
    },
  },
  {
    id: '9',
    name: 'Rustic Farmhouse',
    rating: 4.6,
    address: {
      city: 'Tuscany',
      country: 'Italy',
    },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Authentic Tuscan farmhouse surrounded by vineyards and olive groves. Enjoy homemade pasta classes and wine tasting tours.',
    category: ['Farmhouse', 'Countryside', 'Vineyard', 'Historic'],
    reviews: [],
    price: 220,
    host: {
      name: 'Giulia Rossi',
      avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
      description: 'Chef and sommelier. I love sharing the flavors of Italy.',
    },
  },
  {
    id: '10',
    name: 'Beachfront Bungalow',
    rating: 4.7,
    address: {
      city: 'Maui',
      country: 'USA',
    },
    image: 'https://images.unsplash.com/photo-1544582564-39fd4fe60914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1544582564-39fd4fe60914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572331165267-854da2b00cc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Step out of your door and onto the sand. This cozy bungalow is perfect for surfers and beach lovers.',
    category: ['Bungalow', 'Beach', 'Surfing', 'Nature'],
    reviews: [],
    price: 300,
    host: {
      name: 'Kai Koa',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
      description: 'Surfing instructor and ocean conservationist.',
    },
  },
  {
    id: '11',
    name: 'Scandinavian Apartment',
    rating: 4.5,
    address: {
      city: 'Stockholm',
      country: 'Sweden',
    },
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Bright and airy apartment with minimalist Scandinavian design. Close to museums, parks, and cafes.',
    category: ['Apartment', 'City', 'Design', 'Modern'],
    reviews: [],
    price: 160,
    host: {
      name: 'Astrid Lindberg',
      avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
      description: 'Interior designer and coffee lover.',
    },
  },
  {
    id: '12',
    name: 'Safari Lodge',
    rating: 4.9,
    address: {
      city: 'Serengeti',
      country: 'Tanzania',
    },
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Luxury tented camp in the heart of the Serengeti. Watch elephants and lions from your private deck.',
    category: ['Lodge', 'Safari', 'Nature', 'Adventure'],
    reviews: [],
    price: 600,
    host: {
      name: 'Simba Mufasa',
      avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
      description: 'Safari guide with 20 years of experience.',
    },
  }
];
