export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md animate-pulse">
        <div className="flex flex-col items-center mb-6">
          <div className="h-24 w-24 rounded-full bg-gray-700 mb-4" />
          <div className="h-6 w-40 bg-gray-700 rounded mb-2" />
          <div className="h-4 w-24 bg-gray-700 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-3 h-16" />
          ))}
        </div>
        <div className="h-12 bg-gray-700 rounded-lg" />
      </div>
    </div>
  );
}
