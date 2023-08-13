import express from "express";
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";

const app = express();

const httpServer = createServer(app);
const io = new SocketServer(httpServer);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(6),
    });
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port", 3000);
});
