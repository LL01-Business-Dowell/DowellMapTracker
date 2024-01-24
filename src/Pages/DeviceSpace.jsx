import React from 'react'
import SupperDummyData from '../data/seperDummyData'
import { UseStateContext } from "../Context/Context.jsx";

function DeviceSpace() {
  return (
    <div style={{display:'flex', flexDirection:'column', textAlign:"center", marginLeft:"10px", position:'absolute', zIndex: '9', backgroundColor: 'lightgrey'}}>
      <h5>Device space</h5>
            <hr style={{width:"10vw"}} />
            {/* {props.workspaces.forEach(element => {
                <li>element.company_id</li>
            });} */}

            <ul style={{textDecoration:"none", marginTop:20, lineHeight:"35px" }}>
                {SupperDummyData.map((value, index)=>{
                    return <div key={index}>
                              <li style={{cursor: 'pointer'}} key={index}>{value.user_id}</li>
                        </div>
                })}
                {/* <li>Workspace 1</li>
                <li>Workspace 2</li>
                <li>Workspace 3</li> */}
            </ul>
    </div>
  )
}

export default DeviceSpace
