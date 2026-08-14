import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload newItem
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.pizzaId === newItem.pizzaId,
      );
      if (!existingItem) {
        state.cart.push(newItem);
      }
    },
    deleteItem(state, action) {
      // payload pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      // payload pizzaId
      // state.cart = state.cart.map((item) =>
      //   item.pizzaId === action.payload
      //     ? {
      //         ...item,
      //         quantity: item.quantity + 1,
      //         totalPrice: item.unitPrice * item.quantity,
      //       }
      //     : item,
      // );

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      // payload pizzaId

      // state.cart = state.cart.map((item) =>
      //   item.pizzaId === action.payload
      //     ? {
      //         ...item,
      //         quantity: item.quantity - 1,
      //         totalPrice: item.unitPrice * item.quantity,
      //       }
      //     : item,
      // );

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);
};
