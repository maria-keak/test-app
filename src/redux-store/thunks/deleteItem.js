import { createAsyncThunk } from '@reduxjs/toolkit';
import {  deleteItemApi } from '../../api/index.js';

export const deleteItemThunk = createAsyncThunk(
  'delete/request',
  async ({id, callback}, thunkAPI) => {
    const response = await deleteItemApi(id)
    callback()
    return response
     
  }
);