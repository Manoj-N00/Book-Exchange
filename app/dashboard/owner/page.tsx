'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Book, User } from '@/lib/types';
import { addBook, books, deleteBook, updateBook } from '@/lib/store';
import { LogOut, BookOpen, Library, MapPin, Mail, Image, Loader2 } from 'lucide-react';

export default function OwnerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    city: '',
    contactInfo: '',
    coverImage: '',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.role !== 'Owner') {
        router.push('/login');
      }
      setUser(parsedUser);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setLoading(true);
      try {
        const book = {
          ...newBook,
          status: 'Available',
          ownerEmail: user.email,
        } as Book;
        addBook(book);
        setNewBook({
          title: '',
          author: '',
          genre: '',
          city: '',
          contactInfo: '',
          coverImage: '',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleToggleStatus = async (bookId: string, currentStatus: string) => {
    setLoading(true);
    try {
      const newStatus = currentStatus === 'Available' ? 'Rented' : 'Available';
      const updatedBook = updateBook(bookId, { status: newStatus });
      if (!updatedBook) {
        console.error('Failed to update book status');
      }
      // Force re-render
      setUser({ ...user! });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (bookId: string) => {
    setLoading(true);
    try {
      const success = deleteBook(bookId);
      if (!success) {
        console.error('Failed to delete book');
      }
      // Force re-render
      setUser({ ...user! });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const myBooks = books.filter((book) => book.ownerEmail === user?.email);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Owner Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Manage your book collection</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
        
        <Card className="p-8 mb-8 bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Add New Book</h2>
          <form onSubmit={handleAddBook} className="space-y-4">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                className="flex-1"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <Library className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                className="flex-1"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Genre (optional)"
                value={newBook.genre}
                onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                className="flex-1"
              />
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="City"
                value={newBook.city}
                onChange={(e) => setNewBook({ ...newBook, city: e.target.value })}
                className="flex-1"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Contact Information"
                value={newBook.contactInfo}
                onChange={(e) => setNewBook({ ...newBook, contactInfo: e.target.value })}
                className="flex-1"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <Image className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Cover Image URL (optional)"
                value={newBook.coverImage}
                onChange={(e) => setNewBook({ ...newBook, coverImage: e.target.value })}
                className="flex-1"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full mt-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding Book...
                </>
              ) : (
                'Add Book'
              )}
            </Button>
          </form>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {book.coverImage && (
                <div className="relative h-48">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">Author: {book.author}</p>
                {book.genre && <p className="text-gray-600 dark:text-gray-300 mb-1">Genre: {book.genre}</p>}
                <p className="text-gray-600 dark:text-gray-300 mb-1">City: {book.city}</p>
                <p className={`text-sm font-semibold mb-4 ${
                  book.status === 'Available' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'
                }`}>
                  Status: {book.status}
                </p>
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleToggleStatus(book.id, book.status)}
                    variant="outline"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Toggle Status'}
                  </Button>
                  <Button
                    onClick={() => handleDeleteBook(book.id)}
                    variant="destructive"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Delete'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}