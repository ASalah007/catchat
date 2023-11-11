import createApp from "./app";
import createChatServer from "./chatServer";

const app = createApp();

const server = app.listen(process.env.PORT, () =>
  console.log(`server is running on ${process.env.PORT}`),
);

const io = createChatServer(server);
