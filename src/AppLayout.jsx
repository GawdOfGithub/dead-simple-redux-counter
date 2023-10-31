import React from "react";
import  Navbar  from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import FishTheme from "./Components/FishTheme";
const AppLayout = () => {
  return (
    <>
    
      <div className="h-content min-h-screen  ">
        
        <div className="flex flex-col">
          <div className="">
          <div className="z-50 ">
            <Navbar />
            </div>
           <FishTheme/>
          </div>
          <div className="">
            <div className="z-50 text-black ml-12 font-extrabold ">
              Created with ❤️ by Anurag Bhandari{" "}
            </div>
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppLayout;
