import React from 'react'
import { UseStateContext } from "../Context/Context.jsx";
import { Link } from 'react-router-dom';
import dowell from '../assets/dowell.jpeg'
import graphIcon from '../assets/graph-icon.png'
import AudienceIcon from '../assets/audience-icon.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import MapReportSideBar from '../MapReportSideBar.jsx';
import { MdHistoryToggleOff } from "react-icons/md";
import OtherUsers from '../OtherUsers.jsx';

function Header() {
  const {
    showWorkSpace,
    setShowWorkSpace,
    deviceSpace,
    setDeviceSpace } = UseStateContext()
  const [workspaceColor, setWorkspaceColor] = React.useState(false)
  const [deviceColor, setDeviceColor] = React.useState(false)
  const [standWiseColor, setStandWiseColor] = React.useState(false)
  const [mapReport, setMapReport] = React.useState(false)
  const [showTimeTrack, setShowTimeTrack] = React.useState(false)
  const [showSpaces, setShowSpaces] = React.useState(false)
  const [showRealTime, setShowRealTime] = React.useState(false)
  const [showMaport, setShowMapReport] = React.useState(false)

  const handleWorkSpace = () => {
    setShowWorkSpace(!showWorkSpace)
    setDeviceSpace(false)
  }

  const handleDeviceSpace = () => {
    setDeviceSpace(!deviceSpace)
    setShowWorkSpace(false)
  }

  const handleMapReport = () => {
    setDeviceSpace(false)
    setShowWorkSpace(false)
    setMapReport(!mapReport)
  }

  const handleTimeTrack = () =>{
    setShowTimeTrack(!showTimeTrack)
  }

  const handleSpaces = () =>{
    setShowSpaces(!showSpaces)
  }

  const handleRealTime = () => {
    setShowRealTime(!showRealTime)
  }

  const handleReport = () => {
    setShowMapReport(!showMaport)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '52cm', fontSize: '20px', width:'230px', position:'fixed', left:'0', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', zIndex: '9' }}>
      <img src={dowell} alt='Dowell logo' style={{width: '170px', height: '170px', borderRadius: '8px', margin: '30px', marginTop: '20px', border: '3px solid lightgrey'}}/>
      <div style={{color: '#005734', marginBottom: '20px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        {/* <div onClick={handleTimeTrack} style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter', cursor:'pointer', marginBottom: '10px'}}>
          <img src={graphIcon} style={{width: '18.56px', height: '18.56px', marginRight: '10px'}} alt='icon' />
          <h1 style={{width: '100px', display: 'flex'}}>Time track</h1> 
          <div style={{display: 'flex'}}>
          {showTimeTrack && <IoIosArrowDown style={{width: '14px', height: '7px', marginBottom: '4px'}}/>}
          {!showTimeTrack &&<IoIosArrowUp style={{width: '14px', height: '7px'}}/>}
          </div>
          </div> */}
      <div style={{marginBottom: '20px'}}>
        <div>
         {/* <p onClick={handleRealTime} style={{marginLeft: '30px', fontStyle: 'Inter', fontWeight: '400', fontSize: '16px', lineHeight: '24px', cursor: 'pointer'}}>Real time track</p> */}
     <div style={{marginLeft: '5px', color: '#005734', marginBottom: '20px'}}>
      <div onClick={handleSpaces} style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter', cursor:'pointer', marginBottom: '10px'}}>
          {/* <img src={graphIcon} style={{width: '18.56px', height: '18.56px', marginRight: '10px'}} alt='icon' /> */}
          <MdAccessTimeFilled style={{width: '18.56px', height: '18.56px', marginRight: '4px'}}/>
          <h1 style={{width: '100px', display: 'flex'}}>Realtime track</h1> 
          <div style={{display: 'flex'}}>
          {showSpaces && <IoIosArrowDown style={{width: '14px', height: '7px'}}/>}
          {!showSpaces &&<IoIosArrowUp style={{width: '14px', height: '7px'}}/>}
          </div>
          </div>
          { showSpaces &&<div>
            <div>
             <Link to={"/DowellMapTracker/"}><h1 onMouseEnter={() => setMapReport(true)} onMouseLeave={() => setMapReport(false)} style={{ marginLeft: '25px', cursor: 'pointer', color: mapReport === true ? 'green' : '#005734', fontSize: '15px', fontWeight: '400', marginBottom: '4px' }} onClick={handleReport}>Map Report</h1></Link>
             {/* {showMaport &&<MapReportSideBar />} */}
             {showMaport &&<OtherUsers />}
             </div>
             {/* <Link to={"/DowellMapTracker/standwise"}><h1 onMouseEnter={() => setStandWiseColor(true)} onMouseLeave={() => setStandWiseColor(false)} style={{ marginLeft: '15px', cursor: 'pointer', color: standWiseColor === true ? 'green' : '#005734', fontSize: '15px', fontWeight: '400', marginBottom: '4px' }}>Standwise</h1></Link> */}
             {/* <h1 onClick={handleWorkSpace} onMouseEnter={() => setWorkspaceColor(true)} onMouseLeave={() => setWorkspaceColor(false)} style={{ marginLeft: '15px', cursor: 'pointer', color: workspaceColor === true ? 'green' : '#005734', fontSize: '16px', fontWeight: '400', marginBottom: '4px' }}>Heatmap</h1> */}
             {/* <Link to={"/DowellMapTracker"}><h1 onMouseEnter={() => setDeviceColor(true)} onMouseLeave={() => setDeviceColor(false)} style={{ marginLeft: '15px', cursor: 'pointer', color: deviceColor === true ? 'green' : '#005734', fontSize: '15px', fontWeight: '400', marginBottom: '4px' }}>Device Report</h1></Link> */}
      </div>}
      </div>
         </div>
         {/* <p style={{marginLeft: '30px', fontStyle: 'Inter', fontWeight: '400', fontSize: '16px', lineHeight: '24px',  cursor: 'pointer'}}>Historical time track</p> */}
      <div style={{marginLeft: '5px', color: '#005734', marginBottom:'20px'}}>
      <div style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter', cursor:'pointer', marginBottom: '10px'}}>
          {/* <img src={AudienceIcon} style={{width: '18.56px', height: '18.56px', marginRight: '10px'}} alt='icon' /> */}
          {/* <MdHistoryToggleOff style={{width: '18.56px', height: '18.56px', marginRight: '10px'}}/> */}
          {/* <h1 style={{width: '100px', display: 'flex'}}> Historical time track</h1>  */}
          <div style={{display: 'flex'}}>
          {/* {showSpaces && <IoIosArrowDown style={{width: '14px', height: '7px'}}/>}
          {!showSpaces &&<IoIosArrowUp style={{width: '14px', height: '7px'}}/>} */}
          </div>
          </div>
      </div>
      </div>
      </div>
      <div style={{marginLeft: '20px', color: '#005734', marginBottom:'20px'}}>
      {/* <div onClick={handleSpaces} style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter', cursor:'pointer', marginBottom: '10px'}}>
          <img src={AudienceIcon} style={{width: '18.56px', height: '18.56px', marginRight: '10px'}} alt='icon' />
          <h1 style={{width: '100px', display: 'flex'}}> Teams</h1> 
          <div style={{display: 'flex'}}>
          {showSpaces && <IoIosArrowDown style={{width: '14px', height: '7px'}}/>}
          {!showSpaces &&<IoIosArrowUp style={{width: '14px', height: '7px'}}/>}
          </div>
          </div> */}
      </div>
    </div>
  )
}

export default Header
