import { createThunk } from "../thunks/create.js";
import { deleteItemThunk } from "../thunks/deleteItem.js";
import { fetchListsData } from "../thunks/lists.js";
import { toggleTodoThunk } from "../thunks/mark.js";
import { previewDataThunk } from "../thunks/preview.js";

export function listsBuilder(builder) {
    builder
        .addCase(fetchListsData.pending, (state) => {
            state.loading = true
        })

        .addCase(fetchListsData.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload.data
        })

        .addCase(fetchListsData.rejected, (state, action) => {
            state.loading = false
        })
    
        
        .addCase(deleteItemThunk.pending, (state) => {
            state.loading = true
        })

        .addCase(deleteItemThunk.fulfilled, (state, action) => {
            state.todos = state.todos?.filter(todo => todo.id !== action.payload.data.id);
            state.loading = false
        })

        .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        
            const todo = state.todos?.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.done = !todo.done;
            }
         
        })


}

