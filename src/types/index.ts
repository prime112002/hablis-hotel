
// Define common types

export interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  amenities: string[];
  images: string[];
  price: number;
  capacity: {
    adults: number;
    children: number;
  };
  size: string;
}

export interface Banquet {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  area: string;
  dimensions: {
    length: string;
    breadth: string;
    height: string;
  };
  layouts: {
    type: string;
    capacity: number;
  }[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  images: string[];
  openingHours: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  validUntil: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
}

export interface NearbyLocation {
  name: string;
  distance: string;
  time: string;
}

export interface BookingFormData {
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  promoCode?: string;
}

export type RoomType = "normal" | "standard" | "suite";

