// import styles from "./styles.module.css"
// import { useStateContext } from "./context/Context";
import React, { useEffect } from "react";
import SupperDummyData from './data/seperDummyData'

function SideBar(props){
    const [showUserDevices, setShowUserDevices] = React.useState(false)
    const [userDevices, setUserDevices] = React.useState()

    const handleToggle =(e)=>{
        e.preventDefault()
       setShowUserDevices(!showUserDevices)
       setUserDevices(e.target.id)
       console.log(userDevices)
    }
    return(
        <div  style={{display:'flex', flexDirection:'column', textAlign:"center", marginTop:"40px", marginLeft:"10px", position:'absolute', zIndex: '9', backgroundColor: 'lightgrey'}}>
            <h5>Work space</h5>
            <hr style={{width:"10vw"}} />
            {/* {props.workspaces.forEach(element => {
                <li>element.company_id</li>
            });} */}

            <ul style={{textDecoration:"none", marginTop:20, lineHeight:"35px" }}>
                {SupperDummyData.map((value, index)=>{
                    return <div key={index}>
                        <li id={`id${index}`} onClick={handleToggle}  style={{cursor: 'pointer'}}>{value.company_id}</li>
                        {showUserDevices === true && userDevices === `id${index}` ? <ul style={{marginTop:20, lineHeight:"35px" }}>
                            {(value.users_devices).map((val, ind)=>{
                                return <li key={ind}>{val}</li>
                            })}
                        </ul> : ""}
                        </div>
                })}
                {/* <li>Workspace 1</li>
                <li>Workspace 2</li>
                <li>Workspace 3</li> */}
            </ul>

        </div>
    );
}



export default SideBar;