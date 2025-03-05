import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "../redux/studentApi";
import { booksApi } from "../redux/booksApi";
import { bookTransactionApi } from "../redux/bookTransactionApi";
import { persistStore } from "redux-persist";
import { authApi } from "../redux/authApi";
import { persistedAuthReducer } from "../redux/authSlice";

export const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [bookTransactionApi.reducerPath]: bookTransactionApi.reducer,
    auth: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      studentsApi.middleware,
      booksApi.middleware,
      bookTransactionApi.middleware,
      authApi.middleware
    ),
});

export const persistor = persistStore(store);
