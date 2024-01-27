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
    updateProfile: (state, action) => {
      state.user={...state.user, ...action.payload}
    },
  },
});

export const { loginReducer, logoutreducer, updateProfile } = authSlice.actions;
export default authSlice;
