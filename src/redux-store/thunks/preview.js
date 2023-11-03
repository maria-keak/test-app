import { createAsyncThunk } from '@reduxjs/toolkit';
import { getListItem } from '../../api/index.js';

export const previewDataThunk = createAsyncThunk(
  'preview/request',
  async (id) => {
    const response = await getListItem(id)
    return response
  }
);