const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Create a separate cors instance for Socket.IO
const ioCors = cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
});

// Enable CORS for all routes
app.use((req, res, next) => {
    ioCors(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error handling CORS' });
        }
        next();
    });
});

const io = socketIO(server, {
    cors: {
        origin: 'http://localhost:5173', // Adjust the port and domain of your client app
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('Client connected');

    // Rest of your Socket.IO code...

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



app.use((req, res, next) => {
    ioCors(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error handling CORS' });
        }
        next();
    });
});
const corsOptions = {
    origin: ['http://localhost:5173'], // Adjust the port and domain of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    transports: ['polling'],
};



io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

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

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});