const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

//let count = 0;
let message = "welcome"

io.on('connection', (socket) => {
    console.log('WebSocket Connection Successfull');

    // socket.emit('countUpdated', count);

    // socket.on('increment', ()=> {
    //     count++;
    //     io.emit('countUpdated', count);
    // })

    socket.emit('message', message);

    socket.on('newMessage', (newMessage) => {
        io.emit('message', newMessage);
    })
});

server.listen(port, () => {
    console.log(`App Listening on Port ${port}`);
})