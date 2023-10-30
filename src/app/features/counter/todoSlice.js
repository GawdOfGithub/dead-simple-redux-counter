import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = []
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:{ 
    reducer:(state, action) => {
      
      console.table(action.payload);
    
      state.push(action.payload)
    },

    prepare: (todo,isChecked,isEditable,) => {
      const id = nanoid()
      return { payload: {id,todo,isChecked,isEditable } }
    }
   
  },
  
  deleteTodo:{
    reducer:(state,action)=>
    {
      const id = action.payload
      state.filter(item=> item.id!==id)
    }

  },
  checkTodo:{
    reducer:(state,action)=>
    {
      const id = action.payload
      state = state.map((item)=>
      {
        if(item.id!==id)
        {
          return item
        }
        else
        {
          return {...item,isChecked:!item.isChecked}
        }
      }
      )
    }
  },
  editTodo:{
    reducer:(state,action)=>
    {
     const id = action.payload
     state = state.map((item)=>
     {
       if(item.id!==id)
       {
         return item
       }
       else
       {
         return {...item,isEditable:!item.isEditable}
       }
     })

    }
  }
}
});

export const { addTodo,deleteTodo,editTodo,checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
