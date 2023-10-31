import { createSlice } from "@reduxjs/toolkit";
const initialState = []
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  }
})
//export const { addTodo,filterTodo,editTodo,checkTodo,saveTodo } = authSlice.actions;
export default authSlice.reducer;