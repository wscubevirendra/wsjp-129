'use client'

import React from "react";
import Link from "next/link";
import { addtoCart } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

export default function RecipeCard({recipe}) {
  const dispatcher=useDispatch()
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
        <button onClick={()=>dispatcher(addtoCart({data:recipe}))} className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
}