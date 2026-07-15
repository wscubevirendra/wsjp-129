import React, { useContext } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { storeContext } from "../context/ThemeContext";

export default function Header() {
    const { toggle, toggleHandler } = useContext(storeContext)


    return (
        <header
            className="
        w-full px-6 py-4 shadow-md
        bg-white dark:bg-gray-900
        border-b border-gray-200 dark:border-gray-700
      "
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <h1
                    className="
            text-xl font-bold
            text-gray-900 dark:text-white
          "
                >
                    My Website
                </h1>

                <button
                    onClick={toggleHandler}
                    className="
            w-12 h-12 rounded-full
            flex items-center justify-center

            bg-gray-100 dark:bg-gray-800
            text-gray-900 dark:text-yellow-400

            hover:scale-110
            transition-all duration-300

            border border-gray-300
            dark:border-gray-600
          "
                >
                    {toggle === "light" ? (
                        <FaMoon size={20} />
                    ) : (
                        <FaSun size={20} />
                    )}
                </button>

            </div>
        </header>
    );
}