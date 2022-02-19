import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import selectChat from '../../common/scripts/utils/selectChat';
import MainLayout from '../../layout/main/main';
import ChatSelectPage from './chat-select';

const chat = selectChat();
renderPage('#app', new MainLayout({
    content: new ChatSelectPage({}).render(),
    handlers: {getFormData, checkValid, chat}
}));