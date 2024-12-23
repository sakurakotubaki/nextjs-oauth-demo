import { getSession } from "@auth0/nextjs-auth0";

const Profile = async () => {
  const session = await getSession();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          {session?.user?.picture && (
            <img
              src={session.user.picture}
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
            <p className="text-gray-600">{session?.user?.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="/api/auth/logout"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
