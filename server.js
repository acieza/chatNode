var express = require('express');
var socket = require('socket.io');
const cors = require('cors');


var app = express();


app.use(cors());

var io = socket(server);

io.on('connection', (socket) => {

    console.log(`Nueva conexión ${socket.id}`)

    socket.on('chat', function(data){

        io.sockets.emit('chat', data);
    });


    socket.on('escribiendo', function(data){

        io.sockets.emit('escribiendo', data);
       
    });

});
var server = app.listen(3000, function(){
    console.log('Esperando respuesta del puerto 3000');
});