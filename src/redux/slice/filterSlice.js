import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'search',
    initialState: {
        allItems: [],
        searchedItems: [],
        shopFilterValue: {
            category: null,
            price: null,

        }

    },

    reducers: {
        storeAllItems: (state, action) => {
            state.allItems = action.payload
        },

        addToSearchedItems: (state, action) => {
            state.searchedItems = action.payload
        },

        shopFilterHandler: (state, action) => {

            state.shopFilterValue.category = action.payload.category
        }




    }
})

export const { storeAllItems, addToSearchedItems, shopFilterHandler } = filterSlice.actions

export const storedAllItems = (state) => state.filter.allItems
export const shopFilteredValue = (state) => state.filter.shopFilterValue

export default filterSlice.reducer