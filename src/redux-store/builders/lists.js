import { createThunk } from "../thunks/create.js";
import { deleteItemThunk } from "../thunks/deleteItem.js";
import { fetchListsData } from "../thunks/lists.js";
import { toggleTodoThunk } from "../thunks/mark.js";

export function listsBuilder(builder) {
    console.log(builder);
    builder
        .addCase(fetchListsData.pending, (state) => {
            // state.loading = true
        })

        .addCase(fetchListsData.fulfilled, (state, action) => {
            // console.log(state.loaded);
            state.todos = action.payload.data
            // state.loading = false
            // delete state.loading
            console.log(state.todos, 'builderic');
            // console.log('builderr');]
        })

        .addCase(fetchListsData.rejected, (state, action) => {

        })
        ///////////deleting case
        .addCase(deleteItemThunk.pending, (state) => {

        })

        .addCase(deleteItemThunk.fulfilled, (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.data.id);
         
        })

        .addCase(deleteItemThunk.rejected, (state, action) => {

        })
  
        //////update
        .addCase(toggleTodoThunk.pending, (state) => {

        })

        .addCase(toggleTodoThunk.fulfilled, (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.done = !todo.done;
            }
         
        })

        .addCase(toggleTodoThunk.rejected, (state, action) => {
         
        })
        //////update
        .addCase(createThunk.pending, (state) => {

        })

        .addCase(createThunk.fulfilled, (state, action) => {
           console.log('steghic');
        //    return true
        })

        .addCase(createThunk.rejected, (state, action) => {
         
        });
}

