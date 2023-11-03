import { createAsyncThunk } from '@reduxjs/toolkit';
import { postListItem } from '../../api/index.js';

export const createThunk = createAsyncThunk(
    'create/request',
    async (data) => {
        const response = await postListItem(data)
        if (response.data) return true
    }
);