import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            RecipeBook
          </h2>
          <p className="text-sm">
            Discover delicious recipes from around the world. Cook, share and
            enjoy with your family.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Recipes</a></li>
            <li><a href="#" className="hover:text-orange-500">Categories</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>

          <ul className="space-y-2">
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Subscribe
          </h3>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm">
        © 2026 RecipeBook. All Rights Reserved.
      </div>
    </footer>
  );
}