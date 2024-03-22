import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      // const {product, quantity } = action.payload;
      // const products = state.cart;
      // console.log(state);
      // for (let item in products) {
      //   if((item.product._id===product._id) && (item.quantity===quantity)){
      //     console.log("returned")
      //     return state;
      //   }
      // }
      state.cart.push(action.payload);
    },
    quantityIncrease:(state, action)=>{
      const {product, idx} = action.payload;
      state.cart[idx] = {...state.cart[idx], quantity:(product.quantity)+1};
    },
    quantityDecrease:(state, action)=>{
      const {product, idx} = action.payload;
      state.cart[idx] = {...state.cart[idx], quantity:(product.quantity)-1};
    },
    deleteProduct:(state, action)=>{
      const remainProducts = state.cart.filter((item, itemIdx) => itemIdx !== action.payload)
      return {...state, cart:remainProducts}
    }
  },
});

export const { addCart, quantityIncrease, quantityDecrease, deleteProduct } = cartSlice.actions;
export default cartSlice;
