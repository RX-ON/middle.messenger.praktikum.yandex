export function dateFormat(date: string) {
    const nowDate: any = new Date();
    const inputDate: any = new Date(date);
    if(nowDate - inputDate > 86400000) {
        return `${inputDate.getDate() < 10 ? '0' + inputDate.getDate() : inputDate.getDate()}.${(inputDate.getMonth() + 1) < 10 ? '0' + (inputDate.getMonth() + 1) : (inputDate.getMonth() + 1)}`
    } else {
        return `${inputDate.getHours() < 10 ? '0' + inputDate.getHours() : inputDate.getHours()}:${inputDate.getMinutes() < 10 ? '0' + inputDate.getMinutes() : inputDate.getMinutes()}`
    }
}

export function formatChats(chats: any) {
    const result = chats.map((chat: any) => {
        if(chat.last_message) {
            const time = dateFormat(chat.last_message.time)
            return {...chat, last_message: {...chat.last_message, time: time}}
        } else {
            return chat
        }
    })
    return result
}