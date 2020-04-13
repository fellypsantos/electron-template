const express = require('express');
const cors = require('cors');

const app = express().use(express.json()).use(cors());
const server = require('http').createServer(app);
const io = require('socket.io')(server);

/* EXPRESS */
app.get('/', async (req, res) => {
  res.send('Hello Express World');
});

/* SOCKET */
io.on('connection', (socket) => {
  console.log('SocketIO connected!', socket.id);

  socket.on('receivedYourMessage', () => console.log('Message received.'));
});

server.listen(5000);
