import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { REHYDRATE, persistReducer } from "redux-persist";
import authSlice from "./authReducer";
import cartSlice from "./cartReducer";

const persistAuth = {
  key: authSlice.name,
  storage,
  REHYDRATE,
};

const persistCart = {
  key: cartSlice.name,
  storage,
  REHYDRATE,
};

const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistAuth, authSlice.reducer),
  [cartSlice.name]: persistReducer(persistCart, cartSlice.reducer),
});

export default rootReducers;
