import { createSlice, current } from "@reduxjs/toolkit";
import Product from "../components/Product/Product";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ ...action.payload, count: 1 });
    },

    addProductsToCart: (state, action) => {
      let itemIndex = state.cart?.findIndex(
        (item) => item.id == action.payload
      );
      state.cart.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, count: ++item.count };
        } else {
          return { ...item };
        }
      });
    },

    decreaseProductsFromCart: (state, action) => {
      let itemIndex = state.cart?.findIndex(
        (item) => item.id == action.payload
      );
      state.cart.map((productItem, index) => {
        if (productItem.count > 1) {
          if (index === itemIndex) {
            return { ...productItem, count: --productItem.count };
          } else {
            return { ...productItem };
          }
        } else {
          const newCart = state.cart.filter(
            (productItem) => productItem.id !== action.payload
          );
          state.cart = newCart;
        }
      });
    },
  },
});

export const { addToCart, addProductsToCart, decreaseProductsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
