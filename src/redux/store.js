import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/cartSlice";
import wishlistSlice from "./slice/wishlistSlice";
import popupSlice from "./slice/popupSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice,
        popup: popupSlice,
    }
})

