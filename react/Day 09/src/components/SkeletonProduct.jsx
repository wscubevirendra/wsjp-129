import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export default function SkeletonProduct() {
    return (
        <div className="group bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">

            {/* Image Skeleton */}
            <div className="relative h-64 bg-gray-200 overflow-hidden">

                <div className="w-full h-full bg-gray-300"></div>


                {/* Wishlist Skeleton */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">
                    <FiHeart className="text-gray-300" size={20} />
                </div>


                {/* Discount Skeleton */}
                <div className="absolute top-4 left-4 bg-gray-300 w-14 h-6 rounded-full">
                </div>

            </div>




            {/* Content */}

            <div className="p-5">


                {/* Title */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3">
                </div>



                {/* Description */}

                <div className="space-y-2">

                    <div className="h-3 bg-gray-200 rounded w-full">
                    </div>

                    <div className="h-3 bg-gray-200 rounded w-5/6">
                    </div>

                </div>



                <div className="flex items-center justify-between mt-5">


                    {/* Price */}

                    <div>

                        <div className="h-7 bg-gray-200 rounded w-20">
                        </div>

                    </div>




                    {/* Cart Button */}

                    <div
                        className="
                        bg-gray-200
                        p-3
                        rounded-full
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        "
                    >

                        <FiShoppingCart 
                            className="text-gray-300"
                            size={20}
                        />

                    </div>


                </div>


            </div>


        </div>
    );
}