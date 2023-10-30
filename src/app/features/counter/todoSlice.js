import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [{todo:"hi",a:"1"}]
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:{ 
    reducer:(state, action) => {
      console.log(action.payload,"This iss the payload");
      console.log(action.payload);
    
      state.push(action.payload)
    },

    prepare: (todo,a) => {
      const id = nanoid()
      return { payload: { todo,a,id } }
    }
   
  },
}
});

export const { addTodo, filterTodo } = todoSlice.actions;
export default todoSlice.reducer;
