import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();


export const ContextProvider = ({ children }) => {
    const [workspaceData, setWorkspaceData] = useState({});
    const [showWorkSpace, setShowWorkSpace] = useState(false);
    const [deviceSpace, setDeviceSpace] = useState(false);
    const [userCoords, setUserCoords] = useState([]);
    const [count, setCount ] = useState(0)
    const [userIdd, setUserIdd ] = useState("")
    

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
             setUserIdd
               }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UseStateContext = () => useContext(ProjectContext);



