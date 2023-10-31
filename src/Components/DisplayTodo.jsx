import { useSelector, useDispatch } from 'react-redux';
import { filterTodo, checkTodo,editTodo,saveTodo } from '../app/features/counter/todoSlice';
import { Editor } from './Editor';
import useMainContext from '../Contexts/Helpers/useMainContext';
const DisplayTodo = () => {
    const {text} = useMainContext()
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const handleCheckboxChange = (id) => {
    
     console.log(id);
    dispatch(checkTodo(id));
  };
  const handleSave = (id)=>
  {
   
    
    dispatch(saveTodo({id:id,text:text}))     
     
  }
  
  

  return (
    <>
      {todoList.map((item, index) => (
        <div key={index}>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-extrabold p-2 rounded-lg shadow-lg mt-2">
            
           {!item.isEditable ? (<>{index+1}.{item.todo}</>):<Editor/>}
           {
            !item.isEditable?
           (<>
           <input
              type="checkbox"
              checked={item.isChecked} // Use the isChecked state from the item
              onChange={() => handleCheckboxChange(item.id)}
            />
           <button onClick={() => dispatch(editTodo(item.id))}>
            <>✏️</></button>
            <button onClick={() => dispatch(filterTodo(item.id))}>❌</button>
            </>):
            <>
            <button className="bg-black hover:bg-blue-700 text-white font-bold px-1 rounded ml-2" onClick={()=>handleSave(item.id,text)} >Save</button>
            </>
            
        }
           
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayTodo;


