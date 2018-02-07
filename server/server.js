const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//Middle ware
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New Connection from client');

    socket.on('createMessage', (m) => {
        console.log(m);
    });

    socket.emit('newMessage', {
        from: 'Vinod',
        text: 'Hello there',
        createdAt: 12234536
    });

    socket.on('disconnect', () => {
        console.log('Disconnected by client');
    })
});

// io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//       console.log(data);
//     });
//   });

console.log(publicPath);


//Public get/post request
// app.get('/', (q, r) => {
//     r.render('index.html');
// });


//listen
server.listen(port, () => {
    console.log(`App up and running at ${port}`);
})