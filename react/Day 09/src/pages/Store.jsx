import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard';
import SkeletonProduct from '../components/SkeletonProduct';
import Error from '../components/Error';
import { useProducts } from '../hooks/useProducts';
import { Link, useParams } from 'react-router-dom';


export default function Store() {
    const { slug } = useParams()
    const { error, products, loading } = useProducts(slug);
    const [categories, setCategories] = useState([]);


    useEffect(
        () => {
            const fetchCategories = () => {
                axios.get("https://dummyjson.com/products/categories").then((response) => {
                    setCategories(response.data)
                }).catch((error) => {
                    setCategories([])
                })
            }
            fetchCategories()
        },
        []
    )

    if (error) {
        return <Error />
    }



    return (

        <div className='max-w-7xl grid grid-cols-5 gap-10 mx-auto p-4'>
            <div >
                <ol>
                  <Link to="/store">  <li className={`w-full ${slug==null ? "bg-indigo-500 text-white" : ""} p-2 my-2 hover:outline-1 cursor-pointer rounded-sm shadow`}>All</li></Link>

                    {
                        categories.map((category, index) => {
                            return (
                                <Link to={`/store/${category.slug}`}>
                                    <li className={`w-full ${slug==category.slug ? "bg-indigo-500 text-white" : ""} p-2 my-2 hover:outline-1 cursor-pointer rounded-sm shadow`}>{category.name}</li>
                                </Link>

                            )
                        })
                    }

                </ol>

            </div>
            <div className='col-span-4 grid grid-cols-3 gap-4'>
                {
                    loading ?
                        [1, 2, 3, 3, 3, 3, 3, 3].map(o => <SkeletonProduct />)
                        :
                        products.map((product) => {
                            return <ProductCard product={product} key={product.id} />
                        })
                }
            </div>
        </div>
    )
}
