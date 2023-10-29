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
       todoData:action.payload
      });
    },
    filterTodo: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.todoData.id !== id);
    },
    checkTodo: (state, action) => {
        const id = action.payload;
        state.value = state.value.map((item) => {
          if (item.todoData.id !== id) {
            return item;
          } else {
           
            return { ...item, todoData: { ...item.todoData, isChecked: !item.todoData.isChecked } };
          }
        });
      },
      editTodo: (state, action) => {
        const id = action.payload;
        
        state.value = state.value.map((item) => {
          if (item.todoData.id !== id) {
            return item;
          } else {
           
            return { ...item, todoData: { ...item.todoData, isEditable: !item.todoData.isEditable } };
          }
        });
      },
      saveTodo: (state, action) => {
        const {id,text} = action.payload
        console.log(id);
        console.log(id);
        console.log(text);
        console.log(text);
        state.value = state.value.map((item) => {
          if (item.todoData.id !== id) {
            return item;
          } else {
           
            return { ...item, todoData: { ...item.todoData,isEditable: !item.todoData.isEditable,todo:text } };
          }
        });
      },
    
  },
});

export const { addTodo, filterTodo,checkTodo,editTodo,saveTodo } = todoSlice.actions;
export default todoSlice.reducer;
