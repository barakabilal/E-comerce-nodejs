// TypeScript interfaces
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  value: string;
  label: string;
  icon: string;
}

export interface StarRatingProps {
  rating: number;
}
