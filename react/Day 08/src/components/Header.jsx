import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div 
            className="
                w-full 
                p-4 
                shadow 
                bg-amber-300 
                dark:bg-gray-900 
                flex 
                justify-between
            "
        >

            <div 
                className="
                    text-2xl 
                    dark:text-white
                "
            >
                Routing
            </div>


            <ol 
                className="
                    flex 
                    text-black 
                    dark:text-white
                    font-bold 
                    gap-20
                "
            >

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>

            </ol>


            <button
                onClick={toggleTheme}
                className="
                    px-4
                    py-2
                    rounded
                    bg-blue-500
                    text-white
                "
            >

                {
                    theme === "light"
                    ? "Dark"
                    : "Light"
                }

            </button>


        </div>
    )
}