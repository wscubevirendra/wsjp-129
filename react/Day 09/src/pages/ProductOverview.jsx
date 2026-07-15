import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiTruck,
  FiShield,
} from "react-icons/fi";


export default function ProductOverview() {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {

    try {

      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(response?.data);



    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    fetchProduct();

  }, [id]);




  return (

    <div className="max-w-7xl mx-auto px-5 py-10">


      <div className="grid lg:grid-cols-2 gap-12">


        {/* Images */}

        <div>


          <div
            className="
            bg-gray-100
            rounded-3xl
            h-[500px]
            flex
            items-center
            justify-center
            overflow-hidden
            "
          >

            <img

              src={product.thumbnail}

              className="
              w-full
              h-full
              object-contain
              hover:scale-110
              transition
              "

            />

          </div>



          <div className="flex gap-4 mt-5">


            {
              product?.images?.map(
                (img, index) => (

                  <img

                    key={index}

                    src={img}

                 

                    className={`
                    w-20
                    h-20
                    object-cover
                    rounded-xl
                    cursor-pointer
                    border
                    
                    `}

                  />

                )
              )
            }


          </div>


        </div>






        {/* Details */}


        <div>


          <p className="
          text-indigo-600
          font-medium
          uppercase
          "
          >

            {product?.brand}

          </p>




          <h1 className="
          text-4xl
          font-bold
          text-slate-900
          mt-3
          "
          >

            {product?.title}

          </h1>




          <p className="
          text-gray-600
          mt-5
          leading-7
          "
          >

            {product?.description}

          </p>






          {/* Rating */}


          <div className="
          flex
          items-center
          gap-2
          mt-5
          ">


            <div className="flex text-yellow-500">

              {
                [1,2,3,4,5].map((star)=>(

                  <FiStar

                    key={star}

                    fill={
                      star <= Math.round(
                        product?.rating ?? 0
                      )
                      ? "currentColor"
                      : "none"
                    }

                  />

                ))
              }


            </div>



            <span className="text-gray-500">

              {product?.rating ?? 0}

            </span>



          </div>






          {/* Price */}


          <div className="
          mt-6
          flex
          items-center
          gap-4
          ">


            <h2 className="
            text-4xl
            font-bold
            text-indigo-600
            "
            >

              ${product?.price}

            </h2>




            <span className="
            bg-green-100
            text-green-700
            px-3
            py-1
            rounded-full
            "
            >

              -{product?.discountPercentage}%

            </span>



          </div>






          <p className="
          mt-5
          text-green-600
          font-medium
          "
          >

            ● {product?.availabilityStatus}

          </p>







          {/* Actions */}



          <div className="
          flex
          gap-4
          mt-8
          ">


            <button

              className="
              flex-1
              bg-indigo-600
              text-white
              py-4
              rounded-xl
              flex
              justify-center
              items-center
              gap-3
              hover:bg-indigo-700
              "

            >

              <FiShoppingCart />

              Add To Cart

            </button>




            <button

              className="
              p-4
              border
              rounded-xl
              hover:bg-gray-100
              "

            >

              <FiHeart />

            </button>



          </div>






          {/* Features */}



          <div className="
          grid
          grid-cols-2
          gap-5
          mt-10
          ">



            <div className="
            bg-gray-50
            p-5
            rounded-2xl
            ">


              <FiTruck
                className="text-indigo-600 text-2xl"
              />


              <p className="mt-2 font-medium">

                Fast Delivery

              </p>


              <span className="
              text-sm
              text-gray-500
              "
              >

                {product?.shippingInformation}

              </span>


            </div>






            <div className="
            bg-gray-50
            p-5
            rounded-2xl
            ">


              <FiShield
                className="text-indigo-600 text-2xl"
              />


              <p className="mt-2 font-medium">

                Warranty

              </p>


              <span className="
              text-sm
              text-gray-500
              "
              >

                {product?.warrantyInformation}

              </span>


            </div>



          </div>



        </div>



      </div>







      {/* Reviews */}


      <div className="mt-16">


        <h2 className="
        text-3xl
        font-bold
        mb-6
        "
        >

          Customer Reviews

        </h2>




        <div className="
        grid
        md:grid-cols-3
        gap-6
        ">



          {
            product?.reviews?.map(
              (review,index)=>(


                <div

                  key={index}

                  className="
                  bg-white
                  shadow
                  rounded-2xl
                  p-5
                  "

                >


                  <div className="flex text-yellow-500">


                    {
                      [1,2,3,4,5].map((star)=>(

                        <FiStar

                          key={star}

                          fill={
                            star <= review?.rating
                              ? "currentColor"
                              : "none"
                          }

                        />

                      ))
                    }


                  </div>




                  <p className="
                  mt-3
                  text-gray-600
                  "
                  >

                    "{review?.comment}"

                  </p>




                  <h4 className="
                  mt-4
                  font-semibold
                  "
                  >

                    {review?.reviewerName}

                  </h4>



                </div>


              )
            )
          }



        </div>



      </div>



    </div>

  );

}