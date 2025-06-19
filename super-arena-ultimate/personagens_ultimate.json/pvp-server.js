// Simples servidor PvP com Socket.IO
const io = require('socket.io')(3000, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('Conectado: ', socket.id);

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`${socket.id} entrou na sala ${room}`);
  });

  socket.on('battleEvent', (data) => {
    io.to(data.room).emit('battleEvent', data);
  });

  socket.on('disconnect', () => {
    console.log('Desconectado: ', socket.id);
  });
});
