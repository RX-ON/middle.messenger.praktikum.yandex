export default `
each msg in msgList
    .message 
        p(class=msg.msgClass) #{msg.msgText}
`;