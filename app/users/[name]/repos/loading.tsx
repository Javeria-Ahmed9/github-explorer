export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-2xl mx-auto animate-pulse">
        <div className="h-8 w-64 bg-gray-800 rounded mb-6" />
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 h-20" />
          ))}
        </div>
      </div>
    </div>
  );
}
