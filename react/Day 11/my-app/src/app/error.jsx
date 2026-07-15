"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold">
            Application Error
          </h1>

          <p className="mb-5 text-gray-600">
            Something went wrong in the application.
          </p>

          <button
            onClick={reset}
            className="rounded bg-red-600 px-5 py-2 text-white"
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}