import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NavBar } from '@/src/components/navigation/nav-bar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auth0 Demo App',
  description: 'Next.js app with Auth0 authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <div className="min-h-screen bg-gray-100">
            <NavBar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </body>
      </UserProvider>
    </html>
  )
}