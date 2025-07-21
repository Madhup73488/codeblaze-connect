'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '../ui/Button';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <h1>Connect LMS</h1>
        <p className="header-subtitle">Courses</p>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/courses" className="text-gray-600 hover:text-gray-800">
              Courses
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/profile" className="text-gray-600 hover:text-gray-800">
                  Profile
                </Link>
              </li>
              <li>
                <Button onClick={logout} variant="secondary">
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
