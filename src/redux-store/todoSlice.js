import { createSlice } from '@reduxjs/toolkit';
import {listsBuilder} from './builders/lists.js';

const todoSlice = createSlice({
    name: 'todos',
    initialState:
    {
        todos: []
    }
    ,
    reducers: {



    },
    extraReducers:(builder)=>{
        listsBuilder(builder)
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
