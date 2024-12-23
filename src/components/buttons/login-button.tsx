'use client';

export const LoginButton = () => {
  return (
    <a
      href="/api/auth/login"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      Log In
    </a>
  );
};