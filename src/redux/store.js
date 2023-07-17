import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/cartSlice";
import wishlistSlice from "./slice/wishlistSlice";

export const store = configureStore({
    reducer : {
        cart : cartSlice,
        wishlist : wishlistSlice
    }
})

