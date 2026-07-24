"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg border border-gray-200 bg-white p-8 text-center">

        <h2 className="mt-6 text-3xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          An unexpected error occurred while processing your request.
          Please try again or return to the homepage.
        </p>

        
          <div className="mt-6 overflow-auto border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700">
            {error.message}
          </div>
    

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <button
            onClick={reset}
            className="border border-gray-900 bg-gray-900 px-5 py-3 text-white transition hover:bg-white hover:text-gray-900"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="border border-gray-900 px-5 py-3 text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}