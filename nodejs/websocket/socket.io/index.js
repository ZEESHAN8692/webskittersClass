const express = require("express");
const {createServer}= require("http");
const {Server} = require("socket.io");
const app = express();
const server = createServer(app);

// Middleware
app.use(express.static("public"));

const io = new Server(server);

io.on("connection",(socket)=>{
    console.log("A New User Connected", socket.id );

    socket.on("messages",(msg)=>{
        io.emit("messages", msg)
    })
})

io.on("disconnect",()=>{
    console.log("User Disconnected", socket.id);
})


app.get("/",(req, res)=>{
    res.sendFile("/index.html")
})



server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})