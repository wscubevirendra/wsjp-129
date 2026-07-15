import React, { useContext } from "react";
import {
    FiHeart,
    FiShoppingCart,
    FiStar
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { store } from "../context/StoreContext";


export default function ProductCard({ product }) {
    const { addToCart } = useContext(store)
    return (

        <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100">
            {/* Image */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Link to={`/product/overview/${product.id}`}>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                </Link>


                {/* Wishlist */}

                <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">

                    <FiHeart className="text-gray-700" />

                </button>


                {/* Discount */}

                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">

                    -{product.discountPercentage}%

                </span>


            </div>





            {/* Content */}

            <div className="p-5">


                <h3 className="font-semibold text-lg text-slate-900 truncate">

                    {product.title}

                </h3>



                <p className="text-sm text-gray-500 mt-1">

                    {product.category}

                </p>


                <div className="flex items-center justify-between mt-5">


                    <div>

                        <p className="text-xl font-bold text-indigo-600">

                            ${product.price}

                        </p>



                    </div>





                    <button
                        onClick={() => {
                            addToCart({
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                thumbnail: product.thumbnail,
                                qty: 1
                            })
                        }}
                        className="
bg-indigo-600 
text-white 
p-3 
rounded-full
hover:bg-indigo-700
transition
"
                    >


                        <FiShoppingCart />

                    </button>


                </div>


            </div>



        </div>


    )

}