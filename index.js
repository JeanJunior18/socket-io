const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = socketIo.listen(server);

server.listen(3300, console.log('Running'));

app.use(express.static(__dirname+'/public'))

io.on('connection', (socket) =>{
    console.log('New connection')
    socket.on('msg', ()=>{console.log('Mensagem Recebida')})
})

