import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
}

export default async function page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const res = await fetch(`https://api.github.com/users/${name}/repos`);
  if (!res.ok) throw new Error("Could not fetch repositories");
  const data: Repo[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">
            {name}&apos;s Repositories
          </h1>
          <Link
            href={`/users/${name}`}
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            ← Back to profile
          </Link>
        </div>

        {data.length === 0 ? (
          <p className="text-gray-400">No repositories found.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {data.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-blue-400 font-medium">{repo.name}</h2>
                  <span className="text-gray-400 text-sm">⭐ {repo.stargazers_count}</span>
                </div>
                {repo.description && (
                  <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
                )}
                {repo.language && (
                  <span className="inline-block mt-2 text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {repo.language}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
