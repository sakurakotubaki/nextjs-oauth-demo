'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Auth App
        </Link>
        <div>
          {isLoading ? (
            <div className="text-white">Loading...</div>
          ) : user ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/profile"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Profile
              </Link>
              <a
                href="/api/auth/logout"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Logout
              </a>
            </div>
          ) : (
            <a
              href="/api/auth/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
