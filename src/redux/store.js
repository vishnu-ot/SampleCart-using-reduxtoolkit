import { configureStore } from "@reduxjs/toolkit";
import cartCounter from "./cart";

export const store = configureStore({
  reducer: { cart: cartCounter },
});
