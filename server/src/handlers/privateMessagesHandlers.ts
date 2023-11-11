import { Handler } from "./handlers";

export const privateMessagesInitHandler: Handler = (socket, io) => {
  socket.join(socket.userId);
};

export const getOldMessagesHandler: Handler = (socket, io) => {
  // get old messages from database
};
