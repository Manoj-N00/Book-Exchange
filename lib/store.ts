import { User, Book } from './types';

// In-memory storage
export const users: User[] = [
  {
    name: 'Book Seeker',
    email: 'seeker@gmail.com',
    password: 'seeker@gmail.com',
    mobile: '1234567890',
    role: 'Seeker',
  },
  {
    name: 'Book Owner',
    email: 'owner@gmail.com',
    password: 'owner@gmail.com',
    mobile: '0987654321',
    role: 'Owner',
  },
];

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    city: 'New York',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    city: 'Chicago',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    genre: 'Science Fiction',
    city: 'London',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    city: 'Boston',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    city: 'Seattle',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
  },
  {
    id: '6',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    city: 'San Francisco',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
  },
  {
    id: '7',
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: 'Fiction',
    city: 'Miami',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
  },
  {
    id: '8',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    city: 'Austin',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6',
  },
  {
    id: '9',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Science Fiction',
    city: 'Denver',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
  },
  {
    id: '10',
    title: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Post-Apocalyptic',
    city: 'Portland',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61',
  },
  {
    id: '11',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    genre: 'Drama',
    city: 'Los Angeles',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe',
  },
  {
    id: '12',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Historical Fiction',
    city: 'Philadelphia',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090',
  },
  {
    id: '13',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    genre: 'Dystopian',
    city: 'Toronto',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
  },
  {
    id: '14',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Young Adult',
    city: 'Atlanta',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1515098506762-79e1eb4d4016',
  },
  {
    id: '15',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Mystery',
    city: 'Washington DC',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
  },
  {
    id: '16',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Thriller',
    city: 'Las Vegas',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1526243741027-444d633d7365',
  },
  {
    id: '17',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Literary Fiction',
    city: 'New Orleans',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
  },
  {
    id: '18',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Contemporary Fiction',
    city: 'Phoenix',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
  },
  {
    id: '19',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    city: 'Houston',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
  },
  {
    id: '20',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: 'Historical Fiction',
    city: 'San Diego',
    contactInfo: 'owner@gmail.com',
    status: 'Available',
    ownerEmail: 'owner@gmail.com',
    coverImage: 'https://images.unsplash.com/photo-1512045482940-f37f5216f639',
  },
];

export const findUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};

export const addBook = (book: Omit<Book, 'id'>): Book => {
  const newBook = { ...book, id: Math.random().toString(36).substr(2, 9) };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, book: Partial<Book>): Book | null => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...book };
  return books[index];
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};

export const getBooks = (search?: string, city?: string, sortBy: 'newest' | 'all' = 'all'): Book[] => {
  let filteredBooks = [...books];
  
  if (search) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (city) {
    filteredBooks = filteredBooks.filter((book) =>
      book.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (sortBy === 'newest') {
    filteredBooks = filteredBooks.slice().reverse();
  }
  
  return filteredBooks;
};