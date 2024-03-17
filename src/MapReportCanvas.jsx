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
let map;

async function initMap() {
   // The location of Uluru
   const position = { lat: -25.344, lng: 131.031 };
   const position2 = { lat: -25.364, lng: 131.031 };

   // Request needed libraries.
   //@ts-ignore
   const { Map } = await google.maps.importLibrary("maps");
   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
 
   // The map, centered at Uluru
   map = new Map(document.getElementById("map"), {
     zoom: 4,
     center: position,
     mapId: "AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ",
   });
 
   // The marker, positioned at Uluru
   const marker = new AdvancedMarkerElement({
     map: map,
     position: position,
     title: "Uluru",
   });
   const marker2 = new AdvancedMarkerElement({
    map: map,
    position: position2,
    title: "Uluru",
  });

  }

useEffect(() =>{
  initMap();
}, [])

  return (
    <div id="map" style={{height: "100vh", width: "100vw"}}></div>
  )
}

export default MapReportCanvas
