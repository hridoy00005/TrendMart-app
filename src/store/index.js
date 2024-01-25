import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
  reducer: rootReducers,
  middleware: ()=>([]),
});

export default store;
export const persistor = persistStore(store);
