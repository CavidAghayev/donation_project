import { configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "../Service/apiService";
import cartReducer from "./cartSlice";
import emptyReducer from "./cartSlice"
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    cartReducer,emptyReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});
