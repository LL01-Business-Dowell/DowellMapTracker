import Canvas from "./Canvas";
import { FiMenu } from "react-icons/fi";
import React, { useEffect } from "react";
import { io } from 'socket.io-client';
import SideBar from "./SideBar";
import Header from "./Pages/Header";
import { UseStateContext } from "./Context/Context.jsx";
import DeviceSpace from "./Pages/DeviceSpace.jsx";


const App = () => {

  const { 
    showWorkSpace, 
    setShowWorkSpace, 
    deviceSpace,
    setDeviceSpace,
    workspaceData, 
    setWorkspaceData } = UseStateContext()
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('https://tracking.uxlivinglab.online/socket'); // Use 'http://' or 'https://' depending on your server configuration

    // Event listener for successful connection
    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      socket.emit('clientMessage', 'Hello Server!'); // Send a message to the server
    });

    // Event listener for receiving messages from the server
    socket.on('message', (message) => {
      console.log('Received message from server:', message);
      setWorkspaceData(message)
      // Update your component state or perform other actions with the received data
    });

    // Event listener for Socket.IO errors
    socket.on('error', (error) => {
      console.error('Socket.IO error:', error);
      // Handle error state or reconnect logic here
    });

    // Event listener for Socket.IO disconnection
    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [0]);


  return (
    < div >
    <Header />
      {showWorkSpace && <div className="Sidebar" style={{ width: "70px" }}>
        <SideBar />
      </div>}
      {deviceSpace && <div className="devicespace" style={{ width: "70px" }}>
        <DeviceSpace />
      </div>}
      <div className="canvas">
        <Canvas />
      </div>
    </div>
  )
}

export default App