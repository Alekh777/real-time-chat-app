const http = require('http')
const express = require('express')
const app = express();
const socketio = require('socket.io');

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
    console.log('connected with socket id = ', socket.id);

    // socket.on('msg_send', (data)=>{
    //     console.log('received message = ', data.msg)
    //     io.emit('msg_rcvd', data); // we are not doing socket.emit, because it only emits the "msg_rcvd" to only one socket which 
    //                                // invoked this "msg_send" function. "io.emit" on the other hand, emits to every socket on "io".
    //                                // We can also write "socket.broadcast.emit" to emit to every socket but it doesn't emit to the
    //                                // current socket.
    //                                // 3 options
    //                                // 1. socket.emit -> emits to current socket only.
    //                                // 2. io.emit -> emits to every socket including the current one.
    //                                // 3. socket.broadcast.emit -> emits to every socket except the current one.
    // })

    socket.on('login', (data)=>{
        socket.join(data.username); // join "data.username" Room.
        socket.emit('logged_in')
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(80, ()=>{
    console.log('Listening at http://localhost:80/')
})