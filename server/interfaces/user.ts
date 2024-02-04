export default interface User {
    username: string,
    id: string,
    isAdmin: false,
    isActive: boolean,
    isInSession: boolean,
    isGuest: boolean,
    bookmarks: Array<any>,
    friends: Array<User[]>,
}