import { createAsyncThunk } from '@reduxjs/toolkit';
import { getListsData } from '../../api/index.js';

export const fetchListsData = createAsyncThunk(
  'lists/request',
  async () => {
    const response = await getListsData()
    return response
  }
);
