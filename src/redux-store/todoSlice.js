import { createSlice } from '@reduxjs/toolkit';
const initialList = [
    {
        id: "3044efbc-7e54-4751-a96c-e01474caf8a7",
        description: "Jog around the park",
        done: false,
    },
    {
        id: "9ef6e570-7025-47a9-a048-198232681a09",
        description: "Testing 1",
        done: false
    },
    {
        id: "9ef6e570-7025-47a9-a048-198232681a10",
        description: "Testing 2",
        done: false
    }

]
const todoSlice = createSlice({
    name: 'todos',
    initialState: [...initialList],
    reducers: {

        addTodo: (state, action) => {
            state.push(action.payload);
        },

        toggleTodo: (state, action) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        },

        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },

       
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
