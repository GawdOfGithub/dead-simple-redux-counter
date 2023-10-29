import { useSelector, useDispatch } from 'react-redux';
import { filterTodo, checkTodo,editTodo,saveTodo } from '../app/features/counter/todoSlice';
import { Editor } from './Editor';
import useMainContext from '../Contexts/Helpers/useMainContext';
const DisplayTodo = () => {
    const {text} = useMainContext()
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.value);
  const handleCheckboxChange = (id) => {
    
    // Dispatch the checkTodo action with the item's id to toggle its state
    dispatch(checkTodo(id));
  };
  const handleSave = (id)=>
  {
    console.log(id);
    console.log(text);
    dispatch(saveTodo({id:id,text:text}))     
     
  }
  
  console.log(todoList);

  return (
    <>
      {todoList.map((item, index) => (
        <div key={index}>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-extrabold p-2 rounded-lg shadow-lg mt-2">
            
           {!item.todoData.isEditable ? (<>{index+1}.{item.todoData.todo}</>):<Editor/>}
           {
            !item.todoData.isEditable?
           (<>
           <input
              type="checkbox"
              checked={item.todoData.isChecked} // Use the isChecked state from the item
              onChange={() => handleCheckboxChange(item.todoData.id)}
            />
           <button onClick={() => dispatch(editTodo(item.todoData.id))}>
            <>✏️</></button>
            <button onClick={() => dispatch(filterTodo(item.todoData.id))}>❌</button>
            </>):
            <>
            <button className="bg-black hover:bg-blue-700 text-white font-bold px-1 rounded ml-2" onClick={()=>handleSave(item.todoData.id,text)} >Save</button>
            </>
            
        }
           
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayTodo;


