import renderPage from '../../common/scripts/utils/renderPage';
import ProfileLayout from '../../layout/profile/profile';
import UserProfilePage from './user-profile';


renderPage('#app', new ProfileLayout({
    content: new UserProfilePage({}).getContentString()
}));