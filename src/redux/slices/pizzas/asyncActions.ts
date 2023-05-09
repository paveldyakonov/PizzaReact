import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzaArgs, Pizza } from "./types";
import axios from "axios";
import { API_ENDPOINT } from "@config/api";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaArgs>(
  "pizza/fetchPizzasById",
  async (params, thunkApi) => {
    const res = await axios({
      url: API_ENDPOINT,
      method: "GET",
      params: params,
    });

    const data: Pizza[] = await res.data;
    return data;
  },
);
