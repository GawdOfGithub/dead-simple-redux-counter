import { useState } from "react"
import use

const Todo = () => {
  const [todo, setTodo] = useState({});
  return (
    <>
    <div className="mt-10">
    <input type="text" className="w-64  border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xl font-extrabold p-3 rounded-lg shadow-lg" placeholder=""  />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-3 rounded-3xl">Add todo</button>
    </div>
    </>
  )
}

export default Todo

  
