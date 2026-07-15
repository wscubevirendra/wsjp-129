import React from "react";
import Link from "next/link";

export default function RecipeCard({recipe}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <Link href={`/recipe/${recipe.id}`}>
      <img
        src={recipe.image}
        alt="Recipe"
        className="w-full h-56 object-cover"
      />
      
      </Link>
      

      {/* Content */}
      <div className="p-5">
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
          {recipe.cuisine}
        </span>

        <h2 className="text-xl font-bold mt-4">
         {recipe.name}
        </h2>



        {/* Button */}
        <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
          View Recipe
        </button>
      </div>
    </div>
  );
}