import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    original_total: 0,
    final_total: 0,
};

export const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        // Add product to cart
        addToCart: (state, { payload }) => {
            const product = state.items.find(
                (item) => item._id === payload._id
            );

            if (product) {
                product.qty += 1;
            } else {
                state.items.push(payload);
            }

            state.original_total += Number(payload.originalPrice);
            state.final_total += Number(payload.salePrice);

            localStorage.setItem("cart", JSON.stringify(state));
        },

        // Increase product quantity
        increaseQty: (state, { payload }) => {
            const product = state.items.find(
                (item) => item._id === payload
            );

            if (!product) return;

            product.qty += 1;

            state.original_total += Number(product.originalPrice);
            state.final_total += Number(product.salePrice);

            localStorage.setItem("cart", JSON.stringify(state));
        },

        // Decrease product quantity
        decreaseQty: (state, { payload }) => {
            const product = state.items.find(
                (item) => item._id === payload
            );

            if (!product) return;

            // Don't allow quantity below 1
            if (product.qty > 1) {
                product.qty -= 1;

                state.original_total -= Number(product.originalPrice);
                state.final_total -= Number(product.salePrice);
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },

        // Remove complete product from cart
        removeFromCart: (state, { payload }) => {
            console.log(payload)
            const product = state.items.find(
                (item) => item._id === payload
            );

            if (!product) return;

            state.original_total -=
                Number(product.originalPrice) * product.qty;

            state.final_total -=
                Number(product.salePrice) * product.qty;

            state.items = state.items.filter(
                (item) => item._id !== payload
            );

            localStorage.setItem("cart", JSON.stringify(state));
        },

        // Update quantity directly
        updateQty: (state, { payload }) => {
            const { id, qty } = payload;

            const product = state.items.find(
                (item) => item._id === id
            );

            if (!product || qty < 1) return;

            // Remove old product contribution
            state.original_total -=
                Number(product.originalPrice) * product.qty;

            state.final_total -=
                Number(product.salePrice) * product.qty;

            // Update quantity
            product.qty = qty;

            // Add new product contribution
            state.original_total +=
                Number(product.originalPrice) * product.qty;

            state.final_total +=
                Number(product.salePrice) * product.qty;

            localStorage.setItem("cart", JSON.stringify(state));
        },

        // Load cart from localStorage
        lsToCart: (state) => {
            const lscart = JSON.parse(
                localStorage.getItem("cart")
            );

            if (lscart) {
                state.items = lscart.items;
                state.original_total = lscart.original_total;
                state.final_total = lscart.final_total;
            }
        },

        // Empty entire cart
        emptyCart: (state) => {
            state.items = [];
            state.original_total = 0;
            state.final_total = 0;

            localStorage.removeItem("cart");
        },
    },
});

export const {
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    updateQty,
    lsToCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;