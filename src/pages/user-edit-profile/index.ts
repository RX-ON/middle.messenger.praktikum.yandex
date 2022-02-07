import checkValid from '../../common/scripts/utils/checkValid';
import getFormData from '../../common/scripts/utils/getFormData';
import renderPage from '../../common/scripts/utils/renderPage';
import ProfileLayout from '../../layout/profile/profile';
import UserEditProfilePage from './user-edit-profile';


renderPage('#app', new ProfileLayout({
    content: new UserEditProfilePage({}).getContentString(),
    handlers: {getFormData, checkValid}
}));