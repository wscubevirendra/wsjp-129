import React, { useContext, useState } from "react";
import { store } from "../context/StoreContext";

export default function Cart() {
    const { cart, qtyHandler } = useContext(store);

    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <div className="max-w-6xl mx-auto px-4">

                <h1 className="text-3xl font-bold mb-8">
                    Shopping Cart
                </h1>


                <div className="grid lg:grid-cols-3 gap-6">


                    <div className="lg:col-span-2 space-y-5">


                        {
                            cart.map(item => (

                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row gap-5">


                                    <img
                                        src={item.thumbnail}
                                        className="w-full sm:w-32 h-32 object-cover rounded-lg"
                                    />


                                    <div className="flex-1">

                                        <h2 className="font-semibold text-lg">
                                            {item.title}
                                        </h2>


                                        <p className="text-gray-500 mt-2">
                                            ₹ {item.price}
                                        </p>


                                        <div className="flex items-center gap-3 mt-5">


                                            <button
                                                onClick={() => qtyHandler(item.id, "dec")}

                                                className="w-8 h-8 rounded-full bg-gray-200">
                                                -
                                            </button>


                                            <span className="font-semibold">
                                                {item.qty}
                                            </span>


                                            <button
                                                onClick={() => qtyHandler(item.id, "inc")}


                                                className="w-8 h-8 rounded-full bg-gray-200">
                                                +
                                            </button>


                                        </div>


                                    </div>


                                    <div className="font-bold text-lg">
                                        ₹ {item.price * item.qty}
                                    </div>


                                </div>

                            ))
                        }


                    </div>



                    <div className="bg-white rounded-xl shadow p-6 h-fit">


                        <h2 className="text-xl font-bold mb-5">
                            Order Summary
                        </h2>


                        <div className="space-y-3 text-gray-600">


                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>subtotal</span>
                            </div>


                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>$ 2</span>
                            </div>


                        </div>


                        <hr className="my-5" />


                        <div className="flex justify-between text-xl font-bold">

                            <span>Total</span>

                            <span>
                                ₹ subtotal+shipping
                            </span>

                        </div>


                        <button
                            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">

                            Checkout

                        </button>


                    </div>


                </div>

            </div>

        </div>
    )
}