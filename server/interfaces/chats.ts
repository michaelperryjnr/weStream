import { Interface } from "readline";
import Message from "./messages";

export default interface Chat {
  chat_room_id: string;
  messages: Message[];
  last_message: string;
  active_chat: false;
}
export type UserChatArray = [string, UserChat:Interface]
