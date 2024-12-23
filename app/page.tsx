import { getSession } from "@auth0/nextjs-auth0";
import { LoginButton } from "@/src/components/buttons/login-button"

export default async function Home() {
  const session = await getSession();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Auth App</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        {session?.user ? (
          <div>
            <p className="text-xl mb-4">
              Welcome back, {session.user.name}!
            </p>
            <a
              href="/profile"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Profile
            </a>
          </div>
        ) : (
          <div>
            <p className="text-xl mb-4">
              Please log in to access your profile.
            </p>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}