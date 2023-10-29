
import useMainContext from '../Contexts/Helpers/useMainContext';
export const Editor = () => {
    const {text,setText} = useMainContext()
  return (
    <>
    <input type="text" className="w-64  rounded border border-gray-300 focus:ring ml-6 focus:ring-blue-500 focus:ring-opacity-50 text-black" placeholder="" value={text}
     onChange={(e)=>setText(e.target.value)}
    />
    </>
  )
}
