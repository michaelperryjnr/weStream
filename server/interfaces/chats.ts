import User from "./user";
import Session from "./session";

export default interface Chat{
    isSessionChat: boolean,
    session: Session,
    users: User[],
}