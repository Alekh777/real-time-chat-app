const http = require('http')
const express = require('express')
const app = express();
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
    
})

app.use('/', express.static(__dirname + '/public'))

server.listen(80, ()=>{
    console.log('Listening at http://localhost:80/')
})