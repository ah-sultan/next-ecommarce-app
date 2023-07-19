import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/cartSlice";
import wishlistSlice from "./slice/wishlistSlice";
import popupSlice from "./slice/popupSlice";
import filterSlice from "./slice/filterSlice";

export const store = configureStore({
    reducer: {
        filter : filterSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        popup: popupSlice,
    }
})

