import { useState } from "react";
import Layout from "../Layout/Layout";
import MainMap from "../components/Map";
import { useGlobalContext } from "../Context/PreviewContext";

const LandingPage = () => {
  const context = useGlobalContext();
  console.log("context Value: ",context)
  const { centerCoords } = context;
  const [dataFromServer, setDataFromServer] = useState(null);
  

  // const centerParams = {
  //   center_lat: centerCoords.lat,
  //   center_lon: centerCoords.lon,
  // };


  // instance of websocket connection as a state
  const [ws, setWs] = useState(new WebSocket('ws://localhost:3000/ws'));

  const updateLocation =(event)=>{
    setDataFromServer(event)
  }
  ws.addEventListener("open", (event) => {
    socket.send("Hello Server!");
  })
  ws.addEventListener("message", (event) => {
    updateLocation(event)
    
  })

  // Error handling
  ws.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
    // Handle error state or reconnect logic here
  });

  // Close WebSocket connection on component unmount
  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };


  return (
    <Layout>
      <main className="w-full  h-full ">

        <div className="flex mx-12 my-12 h-[390px]"> 
          <div className="w-[900px]">
           <MainMap  pins = {null}/>

          </div>
         

         
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
