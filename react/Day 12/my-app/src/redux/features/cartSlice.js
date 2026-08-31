import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, { payload }) => {
            console.log(payload.data)
            state.data.push(payload)
        },
        removetoCart: (state) => {
            console.log(state)
        },
        emptyCart: (state) => {
            console.log(state)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, removetoCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer