import { Meta } from "@config/meta";
import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pizza, pizzaState } from "./types";
import { fetchPizzas } from "./asyncActions";

const initialState: pizzaState = {
  items: [],
  meta: Meta.loading,
};

export const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.meta = Meta.success;
      console.log(state);
    });
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.meta = Meta.loading;
      state.items = [];
      console.log("Загрузка");
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.meta = Meta.error;
      state.items = [];
      console.log("Ошибка");
    });
  },
});

export const selectPizza = (state: RootState) => state.pizzasSlice.items;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
