import Router from '../modules/Router';


const router = new Router('#app');


export default (tag?: string) => {
    const searchTag = tag || '.chat';
    return function() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const chats: any = document.querySelectorAll(searchTag);
        chats.forEach((chat: any) => {
            chat.addEventListener('click', () => {
                router.go('/messenger/chat');
            });
        })
    }
};