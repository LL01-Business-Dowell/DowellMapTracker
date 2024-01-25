import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();


export const ContextProvider = ({ children }) => {
    const [workspaceData, setWorkspaceData] = useState({});
    const [showWorkSpace, setShowWorkSpace] = useState(false);
    const [deviceSpace, setDeviceSpace] = useState(false);
    const [userCoords, setUserCoords] = useState([]);
    const [userLat, setUserLat ] = useState(0.0)
    const [userLng, setUserLng] = useState(0.0)

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
             userLat, 
             setUserLat, 
             userLng, 
             setUserLng  }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UseStateContext = () => useContext(ProjectContext);



