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
    let map


useEffect(()=>{
    setCoordinates(EachUserCoords)
  }, [count])
console.log(EachUserCoords, "HHHHHHHHHHHHHHHHHHH")

const initMap = async() => {
  // e.preventDefault()
  var myLatlng = new google.maps.LatLng(coordinates.length !== 0 ? parseFloat(coordinates[0].lat) : 0, coordinates.length !== 0 ? parseFloat(coordinates[0].lon) : 0);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
 map = new google.maps.Map(document.getElementById("map"), mapOptions);
  console.log(map, "TTTTTTTTTTTTTTTTTTTt")
}

const initMarker = () => {
  for(let i = 0; i<coordinates.length; i++) {
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(coordinates[i].lat), lng: parseFloat(coordinates[i].lon)},
  });
   // To add the marker to the map, call setMap();
   marker.setMap(map);
  }
console.log(map, "Booooooooooooooo")
}

useEffect(() =>{
  initMap();
}, [])

useEffect(() =>{
  initMarker()
}, [count])

  return (
    <div id="map" style={{height: "100vh", width: "100vw", marginLeft: '230px'}}></div>
  )
}

export default MapReportCanvas
