import { createAsyncThunk } from '@reduxjs/toolkit';
import { postListItem } from '../../api/index.js';

export const createToDoThunk = createAsyncThunk(
    'createToDoThunk',
    async ({ data, successCallback }, thunkAPI) => {
        const response = await postListItem(data)

        if (response.error) {
            return thunkAPI.rejectWithValue(response.error)
        }
        successCallback()
        if (response.data) return true
    }
);