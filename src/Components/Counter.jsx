import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,increaseByAmount,reset } from '../app/features/counter/counterSlice'
import { useState } from 'react'
const Counter = () => {
    const [value, setValue] = useState(0);
    const count = useSelector((state)=> state.counter.value)
    const disptach = useDispatch()
  return (
    <div className="bg-white mt-10 font-bold flex flex-col items-center  justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>disptach(increment())}>+</button>
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white  font-extrabold px-4 rounded-lg shadow-lg my-3">
          {count}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>disptach(decrement())}>-</button>
        <div>
            <input type="text" value={value} onChange={(e)=>setValue(Number(e.target.value))} className="w-64 p-2 rounded border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="" />
            <div className="flex flex-col ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 my-3 rounded" onClick={

                  ()=>
                  {
                  
                    disptach(increaseByAmount(value))
                    setValue(0)

                  }
            }>Increase</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrease  </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>disptach(reset())}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter