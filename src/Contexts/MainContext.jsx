import  { createContext } from 'react';
import { useState } from 'react';

const MainContext = createContext();


export default function MainContextProvider({ children }) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [text, setText] = useState("");

  return (
    <MainContext.Provider value={{
        toggleSidebar,setToggleSidebar,text,setText
    
    }}>
      {children}
    </MainContext.Provider>
  );
}

export {MainContext}