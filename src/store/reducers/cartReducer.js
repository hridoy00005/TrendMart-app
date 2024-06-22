import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    cartQuantityIncrease: (state, action) => {
      const { idx, quantity } = action.payload;
      state.cart[idx] = { ...state.cart[idx], quantity: quantity + 1 };
    },
    cartQuantityDecrease: (state, action) => {
      const { quantity, idx } = action.payload;
      state.cart[idx] = {
        ...state.cart[idx],
        quantity: quantity > 1 ? quantity - 1 : quantity,
      };
    },
    singleCartItemDelete: (state, action) => {
      const remainProducts = state.cart.filter(
        (item, itemIdx) => itemIdx !== action.payload.idx
      );
      return { ...state, cart: remainProducts };
    },

    clearCart: (state) => {
      return { ...state, cart: [] };
    },
  },
});

export const {
  addCart,
  cartQuantityIncrease,
  cartQuantityDecrease,
  singleCartItemDelete,
  clearCart
} = cartSlice.actions;
export default cartSlice;
