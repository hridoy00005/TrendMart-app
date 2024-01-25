import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
  isAuthenticate: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticate = true;
    },

    logoutreducer: (state) => {
      state.token = "";
      state.user = {};
      state.isAuthenticate = false;
    },
  },
});

export const { loginReducer, logoutreducer } = authSlice.actions;
export default authSlice;
