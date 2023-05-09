import pizzasSlice from "./slices/pizzas/pizzasSlice";
import cartSlice from "./slices/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter/filterSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzasSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
