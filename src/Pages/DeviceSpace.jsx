import React, {useEffect} from 'react'
import SupperDummyData from '../data/seperDummyData'
import EachUserCoords from '../data/EachUserCoords'
import UserCoordinatesData from '../data/UserCoordinatesData'
import { UseStateContext } from "../Context/Context.jsx";

function DeviceSpace() {

const {  
  workspaceData, 
  setWorkspaceData, 
  count, 
  setCount,
  userIdd, 
  setUserIdd } = UseStateContext()

  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }

// let userId = SupperDummyData.find(data => data.user_id === workspaceData.user_id)
// if(userId) {
//   const index = SupperDummyData.findIndex(item => item.id === workspaceData.user_id);
//   SupperDummyData.splice(index, 1)
//   SupperDummyData.push(workspaceData)
// }else if(isEmptyObject(workspaceData) !== true){
//   SupperDummyData.push(workspaceData)
// }


const handleUserClick = (index) =>{
 let userId = SupperDummyData[index].user_id
 //Clear the EachUserCoords array
 EachUserCoords.splice(0, EachUserCoords.length);
 console.log("TTTTTTTTTHHHHHHHHHHHHHHKKKKKKKK",SupperDummyData)
 if(UserCoordinatesData.length !== 0) {
  UserCoordinatesData.map((value)=>{
    if(value.user_id === userId) {
      EachUserCoords.push(value)
      console.log("TTTTTTTTTHHHHHHHHHHHHHHKKKKKKKK",EachUserCoords)
    }
   })
 }else {
  EachUserCoords.push(SupperDummyData[index])
  console.log("TTTTTTTTTHHHHHHHHHHHHHHKKKKKKKK",EachUserCoords)
 }

setCount((count) => count + 1)
}

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
                              <li onClick={() =>handleUserClick(index)} style={{cursor: 'pointer'}} key={index}>{value.user_id}</li>
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
