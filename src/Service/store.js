import { configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "../Service/apiService";
import cartReducer from "./cartSlice";
import removeReducer from './cartSlice'
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    cartReducer,removeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});
