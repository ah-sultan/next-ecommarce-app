import {
    createSlice
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)

            if (existingItem) {
                existingItem.quantity++
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }]
            }
        }
    }



})

export const selectedCartItems = (state) => state.cart.items

export const totalQuantity = (state) => state.cart.items.reduce((init, total) => init + total.quantity, 0)

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer