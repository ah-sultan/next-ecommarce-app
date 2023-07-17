import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : {
        items : []
    },

    reducers: {
        addToWhislist : (state, action) => {
            const existingItems = state.items.find((item) => item.id === action.payload.id )

            if(existingItems){
                const itemsIndex = state.items.findIndex((item) => item.id === action.payload.id )
                state.items.splice(itemsIndex, 1)
            }else{
                state.items = [...state.items, {...action.payload, active : true}]
            }
        }
    }
})

export const wishlistSelectedItem = (state) => state.wishlist.items

export const {addToWhislist} = wishlistSlice.actions
export default wishlistSlice.reducer