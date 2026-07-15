

import React from "react";

export default function Error() {

    return (
        <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gray-100
            px-5
        ">

            <div className="
                bg-white
                rounded-2xl
                shadow-lg
                p-8
                text-center
                max-w-md
                w-full
            ">


                <h1 className="
                    text-4xl
                    font-bold
                    text-red-600
                    mb-4
                ">
                    Oops!
                </h1>



                <h2 className="
                    text-xl
                    font-semibold
                    text-gray-800
                    mb-3
                ">
                    Something went wrong
                </h2>



                <p className="
                    text-gray-500
                    mb-6
                ">
                    Failed to load products
                </p>



                <button
                  
                    className="
                        bg-indigo-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        hover:bg-indigo-700
                    "
                >
                    Try Again
                </button>


            </div>


        </div>
    );
}