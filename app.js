const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    // Handle messages from FlutterFlow app
    socket.on('flutterflowMessage', (message) => {
        console.log('Message from FlutterFlow:', message);
        // Broadcast the message to React app
        io.emit('reactMessage', message);
    });

    // Handle messages from React app
    socket.on('reactMessage', (message) => {
        console.log('Message from React:', message);
        // Broadcast the message to FlutterFlow app
        io.emit('flutterflowMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});