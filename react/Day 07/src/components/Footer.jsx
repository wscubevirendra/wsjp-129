import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        w-full px-6 py-6
        bg-white dark:bg-gray-900
        border-t border-gray-200 dark:border-gray-700
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <p
          className="
            text-sm
            text-gray-600 dark:text-gray-300
          "
        >
          © 2026 My Website. All rights reserved.
        </p>


        <div className="flex gap-4">

          <a
            href="#"
            className="
              text-gray-600 dark:text-gray-300
              hover:text-black dark:hover:text-white
              transition
            "
          >
            Privacy
          </a>

          <a
            href="#"
            className="
              text-gray-600 dark:text-gray-300
              hover:text-black dark:hover:text-white
              transition
            "
          >
            Terms
          </a>

        </div>

      </div>
    </footer>
  );
}