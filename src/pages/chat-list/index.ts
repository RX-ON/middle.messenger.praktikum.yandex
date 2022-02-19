import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import selectChat from '../../common/scripts/utils/selectChat';
import MainLayout from '../../layout/main/main';
import ChatListPage from './chat-list';

const chat = selectChat();
renderPage('#app', new MainLayout({
    content: new ChatListPage({}).render(),
    handlers: {getFormData, checkValid, chat}
}));