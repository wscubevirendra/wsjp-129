'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Recipes",
            path: "/recipes"
        },
        {
            name: "Categories",
            path: "/categories"

        },
        {
            name: "About",
            path: "/about"

        },
        {
            name: "Contact",
            path: "/contact"

        }
    ]
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-orange-500">
                    RecipeBook
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {
                        navItems.map((item,index) => {
                            const active = item.path === pathname;
                            return (
                                <Link key={index} href={item.path} className={`text-gray-700 hover:text-orange-500 ${active ? "bg-orange-500 font-bold px-4 rounded-2xl py-2 text-white" : ""} transition`}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }

                </nav>

                {/* Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
                    Login
                </button>
            </div>
        </header>
    );
}