import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import ProfileLayout from '../../layout/profile/profile';
import UserEditPasswordPage from './user-edit-password';


renderPage('#app', new ProfileLayout({
    content: new UserEditPasswordPage({}).getContentString(),
    handlers: {getFormData, checkValid}
}));