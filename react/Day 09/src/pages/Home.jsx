import React from 'react'
import Hero from '../components/Hero'
import { useProducts } from '../hooks/useProducts'
import Error from '../components/Error';
import SkeletonProduct from '../components/SkeletonProduct';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const { loading, error, products } = useProducts();
    let trendingProduct = products.slice(0, 5)
    let bestProduct = products.slice(5, 10)
    if (error) {
        return <Error />
    }
    return (
        <>
            <Hero />
            <div className='max-w-7xl p-4 my-6'>
                <h2 className='text-3xl my-4 font-bold'>Trending Products</h2>
                <div className='grid grid-cols-5 gap-4'>
                    {
                        loading ?
                            [1, 2, 3, 3, 4].map(o => <SkeletonProduct />)
                            :
                            trendingProduct.map((product) => {
                                return <ProductCard product={product} key={product.id} />
                            })
                    }
                </div>
            </div>
            <div className='max-w-7xl p-4 my-6'>
                <h2 className='text-3xl my-4 font-bold'>Best Products</h2>
                <div className='grid grid-cols-5 gap-4'>
                    {
                        loading ?
                            [1, 2, 3, 3, 4].map(o => <SkeletonProduct />)
                            :
                            bestProduct.map((product) => {
                                return <ProductCard product={product} key={product.id} />
                            })
                    }
                </div>
            </div>
        </>
    )
}
