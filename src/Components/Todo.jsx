import { useState} from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../app/features/counter/todoSlice";
import DisplayTodo from "./DisplayTodo";


const Todo = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center ">
        
        <input
          type="text"
          className="w-full mb-5 border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xl font-extrabold p-3 rounded-lg shadow-lg"
          placeholder=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded-3xl"
          onClick={() => {
            dispatch(addTodo(todo,false,false

            ));
          }}
        >
          Add todo
        </button>
      </div>
      <div>
        <DisplayTodo />
      </div>
    </>
  );
};

export default Todo;
