import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import AuthLayout from '../../layout/auth/auth';
import RegistrationPage from './registration';


renderPage('#app', new AuthLayout({
    content: new RegistrationPage({}).render(),
    handlers: {getFormData, checkValid}
}));