import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'search',
    initialState: {
        allItems: [],
        searchedItems: [],
        shopFilteredItems: []

    },

    reducers: {
        storeAllItems: (state, action) => {
            state.allItems = action.payload
        },

        addToSearchedItems: (state, action) => {
            state.searchedItems = action.payload
        },

        filterBy




    }
})

export const { storeAllItems, addToSearchedItems } = filterSlice.actions

export const storedAllItems = (state) => state.filter.allItems

export default filterSlice.reducer