import { createAsyncThunk } from '@reduxjs/toolkit';
import {  deleteItemApi } from '../../api/index.js';

export const deleteItemThunk = createAsyncThunk(
  'preview/request',
  async (id) => {
    return await deleteItemApi(id)
     
  }
);