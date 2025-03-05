import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import storage from "redux-persist/lib/storage"; 
import { persistReducer } from "redux-persist";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, user: null },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.token = null;
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
