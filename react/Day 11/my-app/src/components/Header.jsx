'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    FurniShop
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Home
                    </Link>

                    <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Products
                    </Link>

                    <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Categories
                    </Link>

                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                        About
                    </Link>

                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="hidden rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 sm:block"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                        Sign Up
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="rounded-lg p-2 hover:bg-gray-100 md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}