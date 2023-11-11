import { Server } from "socket.io";
import { connectionHandlers } from "./handlers/handlers";
import { disconnectionHandlers } from "./handlers/handlers";

export default function createChatServer(appServer: any) {
  const io = new Server(appServer, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    connectionHandlers.forEach((handler) => handler(socket, io));

    socket.on("disconnect", () =>
      disconnectionHandlers.forEach((handler) => handler(socket, io)),
    );
  });

  return io;
}
