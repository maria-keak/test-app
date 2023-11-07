import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateItemApi } from '../../api/index.js';

export const toggleTodoThunk = createAsyncThunk(
    'toggleTodoThunk',
    async (data) => {
        let response = await updateItemApi(data.id, data)
        if (response.data) return response.data
    }
);