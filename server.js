const express = require('express');

const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

console.log('Mi servidor esta corriendo');

const socket = require('socket.io');

const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('Nueva Conexion: ' + socket.id);
    
    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}