import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { REHYDRATE, persistReducer } from "redux-persist";
import authSlice from "./authReducer";

const persistConfig = {
  key: authSlice.name,
  storage,
  REHYDRATE,
};

const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
});

export default rootReducers;
