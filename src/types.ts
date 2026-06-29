export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'wraps' | 'sides' | 'drinks' | 'combos';
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
