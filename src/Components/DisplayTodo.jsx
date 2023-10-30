import { useSelector,useDispatch } from 'react-redux';
import { filterTodo } from '../app/features/counter/todoSlice';

const DisplayTodo = () => {
    const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todo);
  console.log(todoList);

  return (
    <>
      {todoList.map((item, index) => (
        <div key={index}>
         
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white  font-extrabold p-2 rounded-lg shadow-lg mt-2">
            {index + 1}.{item.todo} <button onClick={()=>{dispatch(filterTodo(item.id))}}>❌ </button>
            </div>
          
        </div>
      ))}
    </>
  );
};

export default DisplayTodo;
