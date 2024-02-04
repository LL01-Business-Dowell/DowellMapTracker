import { Navigate,Route, Routes } from "react-router-dom";
import Canvas2 from "../Canvas2";
import Canvas from "../Canvas";
import SideBar from "../SideBar";
import StandWiseSideBar from "../StandWiseSideBar";


export const AppRoutes = () =>  {
    return (
        <Routes>
            <Route path="" element={ < div style={{ display: "flex" }} >
                    <div className="Sidebar" style={{ width: "200px" }}>
                        <SideBar/>
                    </div>
                    <div className="canvas" style={{ marginLeft: "200px" }}>
                        <Canvas />
                    </div>
                    </div>}/> 

            <Route path="standwise" element={< div style={{ display: "flex" }} >
                    <div className="Sidebar" style={{ width: "200px" }}>
                        <StandWiseSideBar/>
                    </div>
                    <div className="canvas" style={{ marginLeft: "200px" }}>
                        <Canvas2 />
                    </div>
                    </div>}/>
        </Routes>
    );

}