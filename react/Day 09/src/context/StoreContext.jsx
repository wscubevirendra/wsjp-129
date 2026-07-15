import React, { createContext, useState } from 'react'
const store = createContext();

export default function StoreContext({ children }) {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id);
        if (productExist) {
            const updateCart = cart.map((item, index) => {
                return item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            })
            setCart(updateCart)
        } else {
            setCart([...cart, product])
                ;
        }

    }


    const qtyHandler = (id, flag) => {
        const productExist = cart.find((item) => item.id === id);
        let updateCart = null
        if (productExist) {
            if (flag === "inc") {
                updateCart = cart.map((item, index) => {
                    return item.id === id ? { ...item, qty: item.qty + 1 } : item
                })
               

            } else {
                updateCart = cart.map((item, index) => {
                    return item.id === id ? { ...item, qty: item.qty - 1 } : item
                })

            }
        }
        setCart(updateCart)
    }

    return (
        <store.Provider value={{ cart, addToCart ,qtyHandler}}>
            {children}
        </store.Provider>
    )
}

export { store }
