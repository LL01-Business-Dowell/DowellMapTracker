import React, {useEffect, useState} from 'react'
import { UseStateContext } from "./Context/Context.jsx";
import EachUserCoords from './data/EachUserCoords'

function MapReportCanvas() {

  const {  
    workspaceData, 
    setWorkspaceData, 
    count, 
    setCount, } = UseStateContext()

    const [coordinates, setCoordinates] = useState([]);


useEffect(()=>{
    setCoordinates(EachUserCoords)
  }, [count])
console.log(coordinates, "HHHHHHHHHHHHHHHHHHH")

const initMap = async() => {
  // e.preventDefault()
  var myLatlng = new google.maps.LatLng(coordinates.length !== 0 ? coordinates[0].lat : 0, coordinates.length !== 0 ? coordinates[0].lng : 0);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  for(let i = 0; i<coordinates.length; i++) {
    var marker = new google.maps.Marker({
      position: {lat: coordinates[i].lat, lng: coordinates[i].lng},
  });

   // To add the marker to the map, call setMap();
   marker.setMap(map);
  }

}

useEffect(() =>{
  initMap();
}, [count])

  return (
    <div id="map" style={{height: "100vh", width: "100vw"}}></div>
  )
}

export default MapReportCanvas
