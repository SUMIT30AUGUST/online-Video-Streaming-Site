import express from 'express';
import path from 'path';
import http from 'http'
import {Server as SocketIO } from 'socket.io';


const app= express();

app.use(express.static(path.resolve("./public")))

const server = http.createServer(app);
const io = new SocketIO(server)

io.on('connection',socket=>{
    console.log("socket connected",socket.id);
    socket.on('binaryStream',stream=>{
        // console.log("stream is coming",stream)
    })
})


server.listen(3223,()=>console.log("server running at 3223"))
