import express from "express";
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";

const app = express();

const httpServer = createServer(app);
const io = new SocketServer(httpServer);

io.on("connection", (socket) => {
  console.log("Client connected");
});

httpServer.listen(3000, () => {
  console.log("Server is running on port", 3000);
});
