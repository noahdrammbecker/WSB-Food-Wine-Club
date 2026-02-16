export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  cuisine: string;
  priceRange: 1 | 2 | 3 | 4;
  address: string;
  neighborhood: string;
  phone?: string;
  website?: string;
  hours?: string;
  overview: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  body: string;
  photos?: string[];
  visitDate: string;
  createdAt: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  restaurantId?: string;
  imageUrl?: string;
  rsvpLink?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isOfficer: boolean;
}
