import {
  privateMessagesInitHandler,
  getOldMessagesHandler,
} from "./privateMessagesHandlers";

export type Handler = (socket: any, io: any) => void;

export const connectionHandlers: Handler[] = [
  privateMessagesInitHandler,
  getOldMessagesHandler,
];

export const disconnectionHandlers: Handler[] = [];
