import React from "react";

export default function Hero() {
  return (
    <section
      className="
        w-full min-h-[80vh]
        flex items-center
        bg-gray-50 dark:bg-gray-950
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl">

          <h1
            className="
              text-5xl font-bold leading-tight
              text-gray-900 dark:text-white
            "
          >
            Build Modern Web Apps
            <span className="text-blue-600 dark:text-blue-400">
              {" "}with React
            </span>
          </h1>


          <p
            className="
              mt-6 text-lg
              text-gray-600 dark:text-gray-300
            "
          >
            Create scalable and beautiful applications using
            modern frontend technologies with clean architecture.
          </p>


          <div className="mt-8 flex gap-4">

            <button
              className="
                px-6 py-3 rounded-lg

                bg-blue-600
                text-white

                hover:bg-blue-700
                transition
              "
            >
              Get Started
            </button>


            <button
              className="
                px-6 py-3 rounded-lg

                border border-gray-300
                dark:border-gray-700

                text-gray-800 dark:text-white

                hover:bg-gray-100
                dark:hover:bg-gray-800

                transition
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}