import Link from "next/link";

interface UserDataType {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  public_repos: number;
  repos_url: string;
  bio: string | null;
  location: string | null;
}

export default async function page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const res = await fetch(`https://api.github.com/users/${name}`);
  if (!res.ok) throw new Error("User not found");
  const data: UserDataType = await res.json();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">

        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={data.avatar_url}
            className="h-24 w-24 rounded-full border-2 border-gray-700 mb-4"
          />
          <h1 className="text-2xl font-bold text-white">{data.name}</h1>
          <p className="text-blue-400">@{data.login}</p>
          {data.bio && <p className="text-gray-400 mt-2 text-sm">{data.bio}</p>}
          {data.location && (
            <p className="text-gray-500 text-sm mt-1">📍 {data.location}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">{data.followers}</p>
            <p className="text-gray-400 text-xs">Followers</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">{data.following}</p>
            <p className="text-gray-400 text-xs">Following</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">{data.public_repos}</p>
            <p className="text-gray-400 text-xs">Repos</p>
          </div>
        </div>

        <Link
          href={`/users/${data.login.toLowerCase()}/repos`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
        >
          View Repositories
        </Link>

      </div>
    </div>
  );
}
