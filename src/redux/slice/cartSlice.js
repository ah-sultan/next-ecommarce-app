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
        },

        increementQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload)
            if (existingItem) {
                existingItem.quantity++
            }
        },
        decreementQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload)

            if (existingItem.quantity === 1) {
                const itemIndex = state.items.findIndex((items) => items.id === action.payload)
                state.items.splice(itemIndex, 1)
            } else {
                existingItem.quantity--
            }
        },

        removeCartItem: (state, action) => {
            const itemIndex = state.items.findIndex((items) => items.id === action.payload)

            if (itemIndex <= 0) {
                state.items.splice(itemIndex, 1)
            } else {
                state.items.splice(itemIndex, 1)
            }
        }
    }


})

export const selectedCartItems = (state) => state.cart.items

export const totalQuantity = (state) => state.cart.items.reduce((init, total) => init + total.quantity, 0)

export const { addToCart, increementQuantity, decreementQuantity, removeCartItem } = cartSlice.actions
export default cartSlice.reducer