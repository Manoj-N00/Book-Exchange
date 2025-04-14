'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { findUserByEmail } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = findUserByEmail(email);

    if (user && user.password === password) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push(`/dashboard/${user.role.toLowerCase()}`);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Book Exchange Portal</h1>
        <div className="mb-6 p-4 bg-gray-100 rounded-lg text-sm">
          <p className="font-semibold mb-2">Demo Accounts:</p>
          <div className="space-y-2">
            <div>
              <p className="font-medium">Owner Account:</p>
              <p>Email: owner@gmail.com</p>
              <p>Password: owner@gmail.com</p>
            </div>
            <div>
              <p className="font-medium">Seeker Account:</p>
              <p>Email: seeker@gmail.com</p>
              <p>Password: seeker@gmail.com</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}