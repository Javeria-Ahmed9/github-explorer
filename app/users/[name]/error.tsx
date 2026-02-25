"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md text-center">
        <p className="text-6xl mb-4">😕</p>
        <h1 className="text-2xl font-bold text-white mb-2">User Not Found</h1>
        <p className="text-gray-400 text-sm mb-6">{error.message}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
