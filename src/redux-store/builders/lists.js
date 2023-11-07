import { deleteItemThunk } from "../thunks/deleteItem.js";
import { getEntireListThunk } from "../thunks/lists.js";
import { toggleTodoThunk } from "../thunks/mark.js";

export function listsBuilder(builder) {
  builder
    .addCase(getEntireListThunk.pending, (state) => {
      state.loading = true;
    })

    .addCase(getEntireListThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload.data;
      state.undoneToDosCount = state.todos.filter((todo) => !todo.done).length;
    })

    .addCase(getEntireListThunk.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(deleteItemThunk.pending, (state) => {
      state.loading = true;
    })

    .addCase(deleteItemThunk.fulfilled, (state, action) => {
      state.todos = state.todos?.filter(
        (todo) => todo.id !== action.payload.data.id
      );
      state.undoneToDosCount = state.todos.filter((todo) => !todo.done).length;
      state.loading = false;
    })

    .addCase(toggleTodoThunk.fulfilled, (state, action) => {
      const todo = state.todos?.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.done = !todo.done;
      }
      state.undoneToDosCount = state.todos.filter((todo) => !todo.done).length;
    });
}
