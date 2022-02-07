import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import MainLayout from '../../layout/main/main';
import ChatSelectPage from './chat-select';


renderPage('#app', new MainLayout({
    content: new ChatSelectPage({}).render(),
    handlers: {getFormData, checkValid}
}));