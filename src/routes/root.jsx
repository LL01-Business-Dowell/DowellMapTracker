import { Navigate,Route, Routes } from "react-router-dom";
import Canvas2 from "../Canvas2";
import Canvas from "../Canvas";
import SideBar from "../SideBar";
import StandWiseSideBar from "../StandWiseSideBar";
import Header from "../Pages/Header";
import { UseStateContext } from "../Context/Context";
import DeviceSpace from "../Pages/DeviceSpace";
import MapReportCanvas from "../MapReportCanvas";
import { Wrapper } from '@googlemaps/react-wrapper'
import MapReportSideBar from "../MapReportSideBar";


export const AppRoutes = () =>  {
    const { 
        showWorkSpace, 
        setShowWorkSpace, 
        deviceSpace,
        setDeviceSpace,
        workspaceData, 
        setWorkspaceData,
        count, 
        setCount,
         } = UseStateContext()
    
    return (
        <Routes>
            <Route path="/DowellMapTracker" element={     <div>
                            <Header />
                            {showWorkSpace && <div className="Sidebar" style={{ width: "70px" }}>
                                <SideBar />
                            </div>}
                            {deviceSpace && <div className="devicespace" style={{ width: "70px" }}>
                                <DeviceSpace />
                            </div>}
                            <div className="canvas">
                                <Canvas />
                            </div>
                            </div>
                        }/> 

            <Route path="/DowellMapTracker/standwise" element={
            <div>
                            <Header />

            < div style={{ display: "flex" }} >

                    <div className="Sidebar" style={{ width: "200px" }}>
                        <StandWiseSideBar/>
                    </div>
                    <div className="canvas" style={{ marginLeft: "200px" }}>
                        <Canvas2 />
                    </div>
                    </div>
                    </div>}/>

                    <Route path="/DowellMapTracker/MapReport" element={
            <div>
                            <Header />

            < div style={{ display: "flex" }} >

                    <div className="Sidebar" style={{ width: "200px" }}>
                        <MapReportSideBar/>
                    </div>
                    <Wrapper apiKey='AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ'>
                        <MapReportCanvas />
                    </Wrapper>
                    </div>
                    </div>}/>
        </Routes>
    );

}