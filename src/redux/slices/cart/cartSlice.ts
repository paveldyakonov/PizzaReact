import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "@utils/getCartFromLS";
import { Pizza, cartState } from "./types";

const cartData = getCartFromLS();

const initialState: cartState = {
  items: cartData.items,
  totalPrice: cartData.totalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pizza>) => {
      const findItem = state.items.find(
        (item: Pizza) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type,
      );
      if (findItem && findItem.count) {
        findItem.count += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((acc: number, item: Pizza) => {
        if (item.count) return acc + Number(item.price) * item.count;
        return acc + Number(item.price);
      }, 0);
    },
    removeItem: (state, action: PayloadAction<Pizza>) => {
      state.items = state.items.filter(
        (item: Pizza) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type
          ),
      );
      state.totalPrice = state.items.reduce((acc: number, item: Pizza) => {
        if (item.count) return acc + Number(item.price) * item.count;
        return acc + Number(item.price);
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    plusItem: (state, action: PayloadAction<Pizza>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type,
      );
      if (findItem && findItem.count) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce((acc: number, item: Pizza) => {
        if (item.count) return acc + Number(item.price) * item.count;
        return acc + Number(item.price);
      }, 0);
    },
    minusItem: (state, action: PayloadAction<Pizza>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type,
      );
      if (findItem && findItem.count) {
        if (findItem.count <= 1) {
        } else {
          findItem.count--;
        }
      }
      state.totalPrice = state.items.reduce((acc: number, item: Pizza) => {
        if (item.count) return acc + Number(item.price) * item.count;
        return acc + Number(item.price);
      }, 0);
    },
  },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
