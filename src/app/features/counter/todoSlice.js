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
  
  filterTodo:{
    reducer:(state,action)=>
    {
     
      const id = action.payload
    return state.filter(item=> item.id!==id)
    }

  },
  checkTodo:{
    reducer:(state,action)=>
    {
    console.log("hello");
      const id = action.payload
      return state = state.map((item)=>
      {
        if(item.id!==id)
        {
          console.log("I am in the if block",item.id);
          return item
        }
        else
        {
          console.log("else block",item.id);
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
    return state = state.map((item)=>
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
  },
  saveTodo:{
    
    reducer:(state,action)=>
    {
      console.log(action.payload.id);
      console.log(action.payload.text);
     const {id,text} = action.payload
    return state = state.map((item)=>
     {
       if(item.id!==id)
       {
         return item
       }
       else
       {
         return {...item,isEditable:false,todo:text}
       }
     })

    }
  }
}
});

export const { addTodo,filterTodo,editTodo,checkTodo,saveTodo } = todoSlice.actions;
export default todoSlice.reducer;
