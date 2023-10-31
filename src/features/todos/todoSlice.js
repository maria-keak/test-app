import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [{
        id:  "3044efbc-7e54-4751-a96c-e01474caf8a7" ,   
        description: "Jog around the park",    
        done: false, 
  }],
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
