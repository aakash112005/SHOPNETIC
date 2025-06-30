import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice.js"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
