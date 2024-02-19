const express = require('express')
const http = require('http')
const path = require('path')

const { Server } = require('socket.io')


const app = express();
const server = http.createServer(app)
const io = new Server(server)


// handle socket io
// basically socket is a user that want to connect with sever
io.on('connection', (socket) => {
    console.log('a new user connected', socket.id);
    
    // thats how we can get info from client to server
    socket.on('user-message', (message) => {
        console.log("A new message arived from server ==> ", message)
        // this is used to deliver msg from server to client
        io.emit('message', message)
    })

});


app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html')
})

server.listen(9000, () => {
    console.log('listening on 9000')
})