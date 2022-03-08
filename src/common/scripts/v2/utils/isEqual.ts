export default function isEqual(lhs: any, rhs: any) {
    // if(!lhs.chats && rhs.chats || !rhs.chats && lhs.chats) return true
    if(lhs.length != rhs.length) return true;
    for(let i = 0; i < lhs.length; i++) {
        if((!lhs[i].last_message && rhs[i].last_message) || (!rhs[i].last_message && lhs[i].last_message)) return true
        if(!lhs[i].last_message && !rhs[i].last_message) return false
        if(lhs[i].last_message.time != rhs[i].last_message.time) return true
    }
    return false;
}