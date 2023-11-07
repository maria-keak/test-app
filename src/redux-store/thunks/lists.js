import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListsData } from "../../api/index.js";

export const getEntireListThunk = createAsyncThunk(
  "getEntireListThunk",
  async () => {
    const response = await getListsData();
    return response;
  }
);
