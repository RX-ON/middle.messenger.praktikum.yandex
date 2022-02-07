import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import AuthLayout from '../../layout/auth/auth';
import LoginPage from './login';


renderPage('#app', new AuthLayout({
    content: new LoginPage({}).render(),
    handlers: {getFormData, checkValid}
}));