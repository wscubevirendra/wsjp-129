export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <h2 className="text-xl font-semibold text-gray-700">
          Loading...
        </h2>

        <p className="text-sm text-gray-500">
          Please wait while we load your content.
        </p>
      </div>
    </div>
  );
}