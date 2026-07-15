import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FiShoppingCart,
    FiUser,
    FiSearch,
    FiHeart
} from "react-icons/fi";
import Store from "../pages/Store";
import { store } from "../context/StoreContext";

export default function Header() {
    const { cart } = useContext(store);
    const { pathname } = useLocation()

    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Store",
            path: "/store"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "About",
            path: "/about"
        }
    ]
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                    Shop<span className="text-gray-900">Zone</span>
                </Link>


                {/* Search */}
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[400px]">

                    <FiSearch className="text-gray-500" />

                    <input
                        placeholder="Search products..."
                        className="bg-transparent outline-none px-3 w-full text-sm"
                    />

                </div>


                {/* Menu */}
                <nav className="hidden lg:flex gap-8 text-gray-700 font-medium">
                    {
                        items.map((item) => {
                            return (
                                <Link className={`${pathname == item.path ? "bg-indigo-500 text-white font-bold rounded-2xl" : ""} px-4 py-1`} to={item.path}>{item.name}</Link>
                            )
                        })
                    }

                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5 text-xl">

                    <div className="relative cursor-pointer">
                        <FiHeart />
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </div>
                    <Link to="/cart">

                        <div className="relative cursor-pointer">
                            <FiShoppingCart />
                            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1">
                                {cart.length || 0}
                            </span>
                        </div>
                    </Link>


                    <FiUser className="cursor-pointer" />

                </div>


            </div>

        </header>
    );
}