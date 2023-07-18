import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        quickView: {
            items: {},
            visibilty: false,
        }
    },
    reducers: {

        showQuickView: (state, action) => {
            state.quickView.items = action.payload
            state.quickView.visibilty = true
        },
        hideQuickView: (state) => {
            state.quickView.items = {}
            state.quickView.visibilty = false
        },

    }
})

export const { showQuickView, hideQuickView } = popupSlice.actions

export default popupSlice.reducer 