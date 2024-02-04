import Canvas from "./Canvas";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import SideBar from "./SideBar";
import Canvas2 from "./Canvas2";
import StandWiseSideBar from "./StandWiseSideBar";
import { BrowserRouter,createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";


const App = () => {
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('https://tracking.uxlivinglab.online/socket'); // Use 'http://' or 'https://' depending on your server configuration

    // Event listener for successful connection
    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      // socket.emit("message","Good Morning from the react app")
    });

    // Event listener for receiving messages from the server
    socket.on('serverMessage', (message) => {
      console.log('Received message from server:', message);
      // Update your component state or perform other actions with the received data
    });
    socket.on('reactMessage', (message) => {
      console.log('Received message from client:', message);
      // Update your component state or perform other actions with the received data
    });

    socket.on("hello",(message)=>{
      console.log(message)
      socket.emit('reactMessage', 'Hello from the react app'); // Send a message to the server

    })
    socket.on("message",(message)=>{
      console.log(message)
      // socket.emit("message",message)
    })

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
  }, []);


  return (
    <BrowserRouter>
      <>
      <AppRoutes/>
      </>
    </BrowserRouter>
    )
}

export default App