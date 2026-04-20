export default function ShopLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-200" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="aspect-square animate-pulse rounded-xl bg-gray-200" />
            <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
