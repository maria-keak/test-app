import { createAsyncThunk } from '@reduxjs/toolkit';
import { getListItem } from '../../api/index.js';

export const previewToDoThunk = createAsyncThunk(
  'previewToDoThunk',
  async ({ id, successCallback }, thunkAPI) => {
    const response = await getListItem(id)
    if (response.error) {
      return thunkAPI.rejectWithValue(response.error)
    }
    successCallback(response.data)
    return response
  }
);