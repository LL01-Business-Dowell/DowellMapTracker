import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();


export const ContextProvider = ({ children }) => {
    const [workspaceData, setWorkspaceData] = useState({});
    const [showWorkSpace, setShowWorkSpace] = useState(false);
    const [deviceSpace, setDeviceSpace] = useState(false);
    const [userCoords, setUserCoords] = useState([]);
    const [count, setCount ] = useState(0)
    const [userIdd, setUserIdd ] = useState("")
    const [stands, setStands] = useState([]);
    const [currentStandSelection,setCurrentStandSelection] = useState([]);
  
    

    return (
        <ProjectContext.Provider value={{
             workspaceData, 
             setWorkspaceData, 
             showWorkSpace, 
             setShowWorkSpace,
             deviceSpace,
             setDeviceSpace,
             userCoords, 
             setUserCoords,
             count, 
             setCount,
             userIdd, 
             setUserIdd,
             stands,
             setStands,
             currentStandSelection,
             setCurrentStandSelection
               }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UseStateContext = () => {
    return useContext(ProjectContext);
};

// export const useGlobalContext = () => {
//     return useContext(PreviewContext);
//   };
  



