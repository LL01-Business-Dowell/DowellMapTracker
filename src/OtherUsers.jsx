import React from 'react'
import SupperDummyData from './data/seperDummyData'
import EachUserCoords from './data/EachUserCoords'
import UserCoordinatesData from './data/UserCoordinatesData'
import filteredData from './data/filteredData.js'
import team2 from './data/team2.js'
import Teams from './data/Teams.js'
import OtherUser from './data/OtherUser.js'
import { UseStateContext } from "./Context/Context.jsx";
import AudienceIcon from './assets/audience-icon.png'
import { FaRegUser } from "react-icons/fa6";

function OtherUsers() {
    const {  
        workspaceData, 
        setWorkspaceData, 
        count, 
        setCount,
        userIdd, 
        setUserIdd } = UseStateContext()
      const [teamA, setTeamA] = React.useState(false)
      const [teamB, setTeamB] = React.useState(false)
      const [teamData, setTeamData] = React.useState()
        function isEmptyObject(obj){
          return JSON.stringify(obj) === '{}'
        }
      
      let userId = SupperDummyData.find(data => data.user_id === workspaceData.user_id)
      if(userId) {
        const index = SupperDummyData.findIndex(item => item.id === workspaceData.user_id);
        SupperDummyData.splice(index, 1)
        SupperDummyData.push(workspaceData)
      }else if(isEmptyObject(workspaceData) !== true){
        SupperDummyData.push(workspaceData)
      }

      
      if(workspaceData.team_status === true) {
        for(let i = 0; i< workspaceData.team_list.length; i++) {
            if(Teams.indexOf(workspaceData.team_list[i]) === -1) {
                Teams.push(workspaceData.team_list[i])
            }  
        }
      }else {
        // OtherUser.push(workspaceData)
        let userId = OtherUser.find(data => data.user_id === workspaceData.user_id)
      if(userId) {
        const index = OtherUser.findIndex(item => item.id === workspaceData.user_id);
        OtherUser.splice(index, 1)
        OtherUser.push(workspaceData)
      }else if(isEmptyObject(workspaceData) !== true){
        OtherUser.push(workspaceData)
      }
      }

      const handleHover = (teamName, index) =>{
        filteredData.splice(0, filteredData.length);
        for(let i = 0; i< SupperDummyData.length; i++) {
          if(SupperDummyData[i].team_status === true) {
            for(let j = 0; j<(SupperDummyData[i].team_list).length; j++) {
              if(SupperDummyData[i].team_list[j] === teamName) {
                let userId = filteredData.find(data => data.user_id === SupperDummyData[i].user_id)
                if(!userId){
                  filteredData.push(SupperDummyData[i])
                }
              }
            }
          }
        }
        console.log("Hello", filteredData)
        setTeamData(index)
      }

      const handleSingleUsers = (index) =>{
        let userId = OtherUser[index].user_id
        //Clear the EachUserCoords array
        EachUserCoords.splice(0, EachUserCoords.length);
        console.log("TTTTTTTTTHHHHHHHHHHHHHHKKKKKKKK",OtherUser)
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
      console.log("Workspace data ----------------", Teams)
  return (
    <div style={{marginLeft:"10px", fontSize: '15px'}}>
      <div style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter'}}>
        <img src={AudienceIcon} style={{width: '18.56px', height: '18.56px', marginLeft: '10px', marginRight: '10px'}} alt='icon' />
        <h5>Teams</h5>
      </div>
            {/* <hr style={{width:"10vw"}} /> */}
            {/* {props.workspaces.forEach(element => {
                <li>element.company_id</li>
            });} */}

            {Teams.length !== 0 && <ul style={{textDecoration:"none", lineHeight:"35px", marginRight:'10px', padding: '20px' }}>
                {/* {SupperDummyData.map((value, index)=>{
                    return <div key={index}>
                              <li onClick={() =>handleUserClick(index)} style={{cursor: 'pointer'}} key={index}>{value.user_id}</li>
                        </div>
                })} */}
               {/* <li onMouseEnter={() => setTeamA(true)} style={{cursor: 'pointer'}}>Team Ajax2</li> */}
              {Teams.map((value, index)=>{
                    return <div key={index}>{
                    <li onMouseEnter={() => handleHover(value, index)} style={{cursor: 'pointer'}} key={index}>{value}</li>
                     }
                     {(filteredData.length !== 0 && teamData === index) &&<ul style={{textDecoration:"none", lineHeight:"35px"}}>
                {filteredData.map((value, index)=>{
                    return <div key={index} >{
                    <li onClick={() =>handleUserClick(index)} style={{cursor: 'pointer', fontSize: 'small'}} key={index}>{value.user_id}</li>
                     }
                 </div>
                })}
                </ul>}
                 </div>
                })}
                
                {/* {teamA &&<ul style={{textDecoration:"none", marginTop:20, lineHeight:"35px" }}>
                    {filteredData.map((value, index) =>{
                      return <div key={index}>
                        <li onClick={() =>handleTeamAClick(index)} style={{cursor: 'pointer'}} key={index}>{value.user_id}</li>
                  </div>
                    })}
                </ul>} */}
                {/* <li onMouseEnter={() => setTeamB(true)} style={{cursor: 'pointer'}} >Team Ajax3</li> */}
                {/* {teamB &&<ul style={{textDecoration:"none", marginTop:20, lineHeight:"35px" }}>
                    {team2.map((value, index) =>{
                        return <div key={index}>
                        <li onClick={() =>handleUserClick(index)} style={{cursor: 'pointer'}} key={index}>{value.user_id}</li>
                  </div>
                    })}
                </ul>} */}
                {/* <li>Workspace 1</li>
                <li>Workspace 2</li>
                <li>Workspace 3</li> */}
            </ul>}
            <div style={{display: 'flex', alignItems: 'center', borderRadius: '8px', fontSize: '16px', fontWeight: '400', fontStyle: 'inter'}}>
            <FaRegUser style={{width: '18.56px', height: '18.56px', marginLeft: '10px', marginRight: '10px'}} />
              <h5>Other users</h5>
            </div>
            <ul style={{textDecoration:"none", lineHeight:"35px"}}>
                {OtherUser.map((value, index)=>{
                    return <div key={index} >{
                    <li onClick={() =>handleSingleUsers(index)} style={{cursor: 'pointer', fontSize: 'small'}} key={index}>{value.user_id}</li>
                     }
                 </div>
                })}
                </ul>
    </div>
  )
}

export default OtherUsers
