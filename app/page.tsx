"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");
  const router = useRouter();

  const handleClick = () => {
    if (text.trim()) router.push(`/users/${text.trim()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">GitHub Explorer</h1>
        <p className="text-gray-400">Search any GitHub profile</p>
      </div>

      <div className="w-full max-w-md flex gap-2">
        <input
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Enter username..."
          className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors"
        />
        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
