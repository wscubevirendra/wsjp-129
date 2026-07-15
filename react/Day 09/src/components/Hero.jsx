import React from "react";
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiShoppingBag,
    FiTruck,
    FiShield
} from "react-icons/fi";


export default function Hero() {

    return (

        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">

            <div className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">


                {/* Content */}

                <div>


                    <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                        New Collection 2026
                    </span>


                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6 text-slate-900">

                        Shop Smart.
                        <br />

                        <span className="text-indigo-600">
                            Live Better.
                        </span>

                    </h1>


                    <p className="mt-6 text-gray-600 text-lg max-w-lg">

                        Discover premium products at the best prices.
                        Fast delivery, secure payment and amazing offers.

                    </p>



                    <div className="flex gap-4 mt-8">


                        <Link
                            to="/store"
                            className="bg-indigo-600 text-white px-7 py-3 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition"
                        >

                            Shop Now
                            <FiArrowRight />

                        </Link>



                        <Link
                            href="/category"
                            className="border border-gray-300 px-7 py-3 rounded-full hover:bg-white transition"
                        >

                            Explore

                        </Link>


                    </div>



                    {/* Features */}

                    <div className="grid grid-cols-3 gap-5 mt-12">


                        <div>
                            <FiShoppingBag className="text-indigo-600 text-3xl" />
                            <p className="text-sm mt-2">
                                Quality Products
                            </p>
                        </div>



                        <div>
                            <FiTruck className="text-indigo-600 text-3xl" />
                            <p className="text-sm mt-2">
                                Fast Delivery
                            </p>
                        </div>



                        <div>
                            <FiShield className="text-indigo-600 text-3xl" />
                            <p className="text-sm mt-2">
                                Secure Pay
                            </p>
                        </div>


                    </div>


                </div>





                {/* Image */}

                <div className="relative">


                    <div className="bg-indigo-600 rounded-3xl h-[420px] flex items-center justify-center overflow-hidden">


                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                            className="w-full h-full object-cover"
                        />


                    </div>



                    {/* Floating Card */}


                    <div className="absolute bottom-5 left-5 bg-white shadow-xl rounded-2xl p-5">


                        <p className="text-sm text-gray-500">
                            Special Offer
                        </p>


                        <h3 className="text-2xl font-bold text-indigo-600">
                            50% OFF
                        </h3>


                    </div>



                </div>



            </div>


        </section>

    )

}