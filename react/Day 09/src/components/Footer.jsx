import React from "react";
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiPhone
} from "react-icons/fi";


export default function Footer() {

    return (

        <footer className="bg-slate-900 text-gray-300 mt-20">


            <div className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">


                {/* Brand */}

                <div>

                    <h2 className="text-3xl font-bold text-white">
                        ShopZone
                    </h2>

                    <p className="mt-4 text-sm leading-6">
                        Your trusted mini ecommerce store.
                        Shop latest products with best quality
                        and fast delivery.
                    </p>


                    <div className="flex gap-4 mt-6 text-xl">

                        <FiFacebook className="hover:text-indigo-400 cursor-pointer" />
                        <FiInstagram className="hover:text-pink-400 cursor-pointer" />
                        <FiTwitter className="hover:text-blue-400 cursor-pointer" />

                    </div>

                </div>



                {/* Links */}

                <div>

                    <h3 className="text-white font-semibold mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm">

                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact</li>

                    </ul>

                </div>



                {/* Customer */}

                <div>

                    <h3 className="text-white font-semibold mb-5">
                        Customer Support
                    </h3>

                    <ul className="space-y-3 text-sm">

                        <li>Order Tracking</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>

                    </ul>

                </div>




                {/* Contact */}

                <div>


                    <h3 className="text-white font-semibold mb-5">
                        Contact
                    </h3>


                    <div className="space-y-4 text-sm">


                        <p className="flex gap-3 items-center">
                            <FiMail />
                            support@shopzone.com
                        </p>


                        <p className="flex gap-3 items-center">
                            <FiPhone />
                            +91 98765 43210
                        </p>


                    </div>


                </div>



            </div>




            <div className="border-t border-gray-700 text-center py-5 text-sm">

                © 2026 ShopZone. All Rights Reserved.

            </div>



        </footer>

    )

}