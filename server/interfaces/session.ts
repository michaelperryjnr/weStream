import User from "./user";
import Chat from "./chats";

export default interface Session {
    sessionMembers: User[],
    sessionChat: Chat[],
    sessionId: string,
    sessionHash: string,
    isProtectedSession: boolean,
    isSessionExpired: boolean,
    isScheduledSession: boolean,
}