export default interface UserChat {
  active: boolean;
  lastMessage: {
    date: string;
    message: string;
  };
  unread: boolean;
  unreadMsgCount: number;
  userInfo: {
    uid: string;
  };
  isGroup: false;
}
