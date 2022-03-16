import Button from './components/button/button';
import TesPage from './pages/tes/tesPage';
import Router from './common/scripts/v2/Router';
import ChatListPage from './pages/chat-list';
import ChatSelectPage from './pages/chat-select';
import AuthLayout from './layout/auth/auth';
import LoginPage from './pages/login/login';
import RegistrationPage from './pages/registration/registration';
import ProfileLayout from './layout/profile/profile';
import UserEditPasswordPage from './pages/user-edit-password';
import UserProfilePage from './pages/user-profile';
import UserEditProfilePage from './pages/user-edit-profile';
import MainLayout from './layout/main/main';

const router = new Router('#app');

router
	.use('/test', TesPage, 'div', {
		title: 'Надеюсь, это работает',
        cnt: new Button(
            'div',
            {
                btn: 'second_btn',
                btnName: 'Вторая кнопка'
            }
        )
	})
	.use('/', AuthLayout, 'section', {
        className: 'auth',
        content: new LoginPage('div', {})
    })
	.use('/sign-up', AuthLayout, 'section', {
        className: 'auth',
        content: new RegistrationPage('div', {})
    })
	.use('/settings', ProfileLayout, 'div', {
        className: 'wrapper',
        content: new UserProfilePage('section', {})
    })
    .use('/settings/edit-password', ProfileLayout, 'div', {
        className: 'wrapper',
        content: new UserEditPasswordPage('section', {})
    })
    .use('/settings/edit-profile', ProfileLayout, 'div', {
        className: 'wrapper',
        content: new UserEditProfilePage('section', {})
    })
    .use('/messenger', MainLayout, 'div', {
        content: new ChatListPage('div', {})
    })
    .use('/messenger/chat', MainLayout, 'div', {
        content: new ChatSelectPage('div', {})
    })
	.start();