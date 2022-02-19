import renderPage from './common/scripts/utils/renderPage';
import MainLayout from './layout/main/main';


import ChatListPage from './pages/chat-list/chat-list';
import ChatSelectPage from './pages/chat-select/chat-select';
import getFormData from './common/scripts/utils/getFormData';
import checkValid from './common/scripts/utils/checkValid';
import ErrorPage404 from './pages/error-404/error-page';
import ErrorPage500 from './pages/error-500/error-page';
import historyBack from './common/scripts/utils/historyBack';
import AuthLayout from './layout/auth/auth';
import LoginPage from './pages/login/login';
import RegistrationPage from './pages/registration/registration';
import ProfileLayout from './layout/profile/profile';
import UserProfilePage from './pages/user-profile/user-profile';
import UserEditProfilePage from './pages/user-edit-profile/user-edit-profile';
import UserEditPasswordPage from './pages/user-edit-password/user-edit-password';
 
const path: string = window.location.pathname;


switch (path) {
	case ('/chat-list'): {
		renderPage('#app', new MainLayout({
			content: new ChatListPage({}).render(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	case ('/chat-select'): {
		renderPage('#app', new MainLayout({
			content: new ChatSelectPage({}).render(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	case ('/error4'): {
		const backButton = historyBack();
		renderPage(
			'#app', new MainLayout({
				content: new ErrorPage404({}).render(),
				handlers: {backButton}
			})
		);
		break
	}
	case ('/error5'): {
		const backButton = historyBack();
		renderPage(
			'#app', new MainLayout({
				content: new ErrorPage500({}).render(),
				handlers: {backButton}
			})
		);
		break
	}
	case ('/login'): {
		renderPage('#app', new AuthLayout({
			content: new LoginPage({}).render(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	case ('/registration'): {
		renderPage('#app', new AuthLayout({
			content: new RegistrationPage({}).render(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	case ('/user-profile'): {
		renderPage('#app', new ProfileLayout({
			content: new UserProfilePage({}).getContentString()
		}));
		break
	}
	case ('/user-edit-profile'): {
		renderPage('#app', new ProfileLayout({
			content: new UserEditProfilePage({}).getContentString(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	case ('/user-edit-password'): {
		renderPage('#app', new ProfileLayout({
			content: new UserEditPasswordPage({}).getContentString(),
			handlers: {getFormData, checkValid}
		}));
		break
	}
	default: {
		renderPage(
			'#app',
			new MainLayout({
                content: `
				<div class="start-menu" style="margin: 50px 50px">
					<a href="/login" style="display: block">Логин</a>
					<a href="/registration" style="display: block">Регистрация</a>
					<a href="/chat-list" style="display: block">Чаты</a>
					<a href="/chat-select" style="display: block">Чат</a>
					<a href="/user-profile" style="display: block">Профиль</a>
					<a href="/user-edit-profile" style="display: block">Редактировать профиль</a>
					<a href="/user-edit-password" style="display: block">Редактировать пароль</a>
					<a href="/error4" style="display: block">Ошибка 404</a>
					<a href="/error5" style="display: block">Ошибка 500</a>
				</div>
				`
            })
		);
		break
	}
}