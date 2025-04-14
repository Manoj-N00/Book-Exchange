'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookMarked } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Animated book icons */}
      <div className="absolute inset-0 pointer-events-none">
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={48}
          style={{ 
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={42}
          style={{ 
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
            top: '20%',
            right: '15%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={45}
          style={{ 
            transform: `translate(${mousePosition.x * 1.8}px, ${mousePosition.y * 1.8}px)`,
            bottom: '15%',
            left: '20%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={40}
          style={{ 
            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
            bottom: '25%',
            right: '25%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={44}
          style={{ 
            transform: `translate(${mousePosition.x * 1.6}px, ${mousePosition.y * 1.6}px)`,
            top: '40%',
            left: '30%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={46}
          style={{ 
            transform: `translate(${mousePosition.x * -1.7}px, ${mousePosition.y * -1.7}px)`,
            top: '35%',
            right: '35%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={43}
          style={{ 
            transform: `translate(${mousePosition.x * 1.9}px, ${mousePosition.y * 1.9}px)`,
            bottom: '40%',
            left: '15%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={41}
          style={{ 
            transform: `translate(${mousePosition.x * -1.4}px, ${mousePosition.y * -1.4}px)`,
            bottom: '30%',
            right: '10%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={47}
          style={{ 
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
            top: '15%',
            left: '40%'
          }}
        />
        <BookMarked 
          className="absolute text-gray-400 opacity-60 transition-transform duration-300 ease-out"
          size={45}
          style={{ 
            transform: `translate(${mousePosition.x * -1.8}px, ${mousePosition.y * -1.8}px)`,
            bottom: '20%',
            right: '40%'
          }}
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-3xl px-4 relative z-10">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Welcome to Book Exchange Portal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with book lovers in your community. Share your books or find your next read.
        </p>
        <Link href="/login">
          <Button 
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}