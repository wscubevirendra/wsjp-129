import { fetchProducts } from '@/api/api'
import Pagination from '@/components/website/store/Pagination';
import ProductCard from '@/components/website/ui/ProductCard';
import PromoBanner from '@/components/website/store/PromoBanner';
import React from 'react'

export default async function page({ searchParams }) {
    const query = await searchParams;
    const category = query.category || null;
    const room = query.room || null;
    const stock = query.stock || null;
    const min_price = query.min_price || null;
    const max_price = query.max_price || null;
    const page = query.page || 1;
    const response = await fetchProducts({ category, room, stock, min_price, max_price,page });
    // console.log(response)
    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                {
                    response?.data.map((product) => {
                        return <ProductCard key={product._id} product={product} />
                    })
                }
            </div>
            <PromoBanner />
            <Pagination pages={response.pages} />
        </>
    )
}
