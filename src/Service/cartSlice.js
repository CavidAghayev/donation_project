import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.count++
      } else {
        state.cart.push({
          id: action.payload,
          count: 1,
        });
      }
    },
    removeFromCard: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        state.cart.push({
          id: action.payload,
          count: 1,
        });
      }
    },

    decrement: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem.count > 1) {
        existingItem.count--;
      } else {
        existingItem.count = 0;
      }
    },
  },
});

export const { increment, decrement, productToCart, removeFromCard } =
  cartSlice.actions;

export default cartSlice.reducer;
