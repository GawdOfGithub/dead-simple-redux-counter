import useMainContext from "../Helpers/useMainContext";
import Sidebar from "./Sidebar";
const Navbar = () => {
    const {toggleSidebar,setToggleSidebar} = useMainContext()
  return (
    <>
    <Sidebar/>
    <div className="fixed w-full bg-white min-h-content t z-50 ">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl">
          {
            !toggleSidebar ?
            
          (<button className="bg-white text-black" onClick={()=>setToggleSidebar(!toggleSidebar)} >
            <span>☰</span>
            </button>):
            (<button className="bg-white text-black" onClick={()=>setToggleSidebar(!toggleSidebar)} >
            <span>✕</span>  
          </button>)
}
        </div>
        <a href="/" className="text-yellow-500 text-2xl font-bold">
          <span>AddTodo</span>
        </a>
        <button className="text-black bg-white">
          <span>🔍</span>
        </button>
        <div className='flex'>
          <span>👤</span>
          <a href="/signIn" className="text-black bg-white font-semibold">
            <span>SignIn</span>
          </a>
        </div>
      </div>
    </div>;
    </>)
    
};
export default Navbar