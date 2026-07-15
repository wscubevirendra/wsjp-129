
import { useState, useEffect } from "react";
import axios from "axios";
const useProducts = (slug = "") => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        let API = "https://dummyjson.com/products";
        if (slug !== "") {
            API = API + `/category/${slug}`
        }
        setLoading(true)
        axios.get(API).then(
            (response) => {
                setProducts(response.data.products)
            }
        ).catch(
            (error) => {
                setError("Internal server error")
            }
        ).finally(() => {
            setLoading(false)
        })
    }

    useEffect(
        () => {
            fetchProducts();
        },
        [slug]
    )

    return {
        loading,
        error,
        products,
        reFetch: fetchProducts
    }


}

export { useProducts }