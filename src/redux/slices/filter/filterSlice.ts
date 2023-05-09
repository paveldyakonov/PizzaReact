import { Meta } from "@config/meta";
import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import qs from "qs";
import { Pizza, filterState, searchParams } from "./types";

const filterValues: string[] = ["rating", "price", "title"];

const parseQueryString = (text: string): string => {
  const params = qs.parse(window.location.search.substring(1));
  if (params[text]) {
    return `${params[text]}`;
  }
  return "";
};

const initialState: filterState = {
  sortId:
    Number(filterValues.indexOf(parseQueryString("filterValue"))) == -1
      ? 0
      : Number(filterValues.indexOf(parseQueryString("filterValue"))),
  searchValue: !parseQueryString("search") ? "" : parseQueryString("search"),
  categoryId: !Number(parseQueryString("categoryId")) ? 0 : Number(parseQueryString("categoryId")),
  curPage: Number(parseQueryString("page")) === 0 ? 1 : Number(parseQueryString("page")),
  pizzasList: [],
  meta: Meta.initial,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortId: (state, action: PayloadAction<number>) => {
      state.sortId = action.payload;
    },
    setCurPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<searchParams>) => {
      state.curPage = parseInt(action.payload.curPage);
      state.sortId = parseInt(action.payload.filterValue);
      state.categoryId = parseInt(action.payload.categoryId);
      state.searchValue = action.payload.searchValue;
    },
    removeFilters: (state) => {
      state.curPage = 1;
      state.sortId = 0;
      state.categoryId = 0;
      state.searchValue = "";
      state.pizzasList = [];
    },
    setMeta: (state, action: PayloadAction<Meta>) => {
      state.meta = action.payload;
    },
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.pizzasList = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectCurPage = (state: RootState) => state.filterSlice.curPage;
export const selectSort = (state: RootState) => state.filterSlice.sortId;

export const {
  setCategoryId,
  setSortId,
  setCurPage,
  setFilters,
  setPizzas,
  setMeta,
  setSearch,
  removeFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
