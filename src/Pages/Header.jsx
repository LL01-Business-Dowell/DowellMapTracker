import React from 'react'
import { UseStateContext } from "../Context/Context.jsx";

function Header() {
    const { 
        showWorkSpace, 
        setShowWorkSpace,
        deviceSpace,
        setDeviceSpace } = UseStateContext()
    const [workspaceColor, setWorkspaceColor] = React.useState(false)
    const [deviceColor, setDeviceColor] = React.useState(false)
    const [standWiseColor, setStandWiseColor] = React.useState(false)

    const handleWorkSpace = () =>{
        setShowWorkSpace(!showWorkSpace)
        setDeviceSpace(false)
    }

    const handleDeviceSpace = () =>{
        setDeviceSpace(!deviceSpace)
        setShowWorkSpace(false)
    }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '20px'}}>
      <h1 onClick={handleDeviceSpace} onMouseEnter={()=>setDeviceColor(true)} onMouseLeave={()=>setDeviceColor(false)} style={{marginRight: '20px', cursor:'pointer', color: deviceColor=== true ? 'green':'black'}}>Device</h1>
      <h1 onMouseEnter={()=>setStandWiseColor(true)} onMouseLeave={()=>setStandWiseColor(false)} style={{marginRight: '20px', cursor:'pointer', color: standWiseColor=== true ? 'green':'black'}}>Standwise</h1>
      <h1 onClick={handleWorkSpace} onMouseEnter={()=>setWorkspaceColor(true)} onMouseLeave={()=>setWorkspaceColor(false)} style={{marginRight: '20px', cursor:'pointer', color: workspaceColor === true ? 'green':'black'}}>Hitmap</h1>
    </div>
  )
}

export default Header
