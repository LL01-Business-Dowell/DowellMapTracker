import React from 'react'
import { UseStateContext } from "../Context/Context.jsx";
import { Link } from 'react-router-dom';

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

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '20px' }}>
      <Link to={"/DowellMapTracker"}><h1 onClick={handleDeviceSpace} onMouseEnter={() => setDeviceColor(true)} onMouseLeave={() => setDeviceColor(false)} style={{ marginRight: '20px', cursor: 'pointer', color: deviceColor === true ? 'green' : 'black' }}>Device</h1></Link>
      <Link to={"/DowellMapTracker/standwise"}><h1 onMouseEnter={() => setStandWiseColor(true)} onMouseLeave={() => setStandWiseColor(false)} style={{ marginRight: '20px', cursor: 'pointer', color: standWiseColor === true ? 'green' : 'black' }}>Standwise</h1></Link>
      <h1 onClick={handleWorkSpace} onMouseEnter={() => setWorkspaceColor(true)} onMouseLeave={() => setWorkspaceColor(false)} style={{ marginRight: '20px', cursor: 'pointer', color: workspaceColor === true ? 'green' : 'black' }}>Heatmap</h1>
      <Link to={"/DowellMapTracker/mapReport"}><h1 onMouseEnter={() => setMapReport(true)} onMouseLeave={() => setMapReport(false)} style={{ marginRight: '20px', cursor: 'pointer', color: mapReport === true ? 'green' : 'black' }}>Map Report</h1></Link>
    </div>
  )
}

export default Header
