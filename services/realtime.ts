import { Server } from 'socket.io';

export function registerRealtime(io: Server) {
  io.on('connection', (socket) => {
    socket.on('session:join', (sessionId: string) => {
      socket.join(sessionId);
    });
  });
}
