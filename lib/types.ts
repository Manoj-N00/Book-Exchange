export interface User {
  name: string;
  email: string;
  password: string;
  mobile: string;
  role: 'Seeker' | 'Owner';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre?: string;
  city: string;
  contactInfo: string;
  status: 'Available' | 'Rented';
  ownerEmail: string;
  coverImage?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}