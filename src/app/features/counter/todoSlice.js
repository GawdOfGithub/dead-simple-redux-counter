import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        todo: action.payload,
        id: nanoid(),
      });
    },
    filterTodo: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.id !== id);
    },
  },
});

export const { addTodo, filterTodo } = todoSlice.actions;
export default todoSlice.reducer;
