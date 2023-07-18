import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: []
    },

    reducers: {
        addToWhislist: (state, action) => {
            const existingItems = state.items.find((item) => item.id === action.payload.id)

            if (existingItems) {
                const itemsIndex = state.items.findIndex((item) => item.id === action.payload.id)
                state.items.splice(itemsIndex, 1)
            } else {
                state.items = [...state.items, { ...action.payload }]
            }
        },

        addFromWhislist: (state, action) => {
            const findItem = state.items.findIndex((item) => item.id === action.payload)

            if (false) {

            } else {
                state.items.splice(findItem, 1)
            }
        }
    }
})

export const wishlistSelectedItem = (state) => state.wishlist.items
export const totalWishlistItems = (state) => state.wishlist.items.length

export const { addToWhislist, addFromWhislist } = wishlistSlice.actions
export default wishlistSlice.reducer