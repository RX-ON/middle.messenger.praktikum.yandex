import renderPage from "../src/common/scripts/utils/renderPage.js";
import MainLayout from "../src/layout/main/main.js";

import chatListIndex from "/src/pages/chat-list/index.js"
import chatSelectIndex from "/src/pages/chat-select/index.js"
import errorIndex from "/src/pages/error-page/index.js"
import loginIndex from "/src/pages/login/index.js"
import registrationIndex from "/src/pages/registration/index.js"
import userEditPasswordIndex from "/src/pages/user-edit-password/index.js"
import userEditProfileIndex from "/src/pages/user-edit-profile/index.js"
import userProfileIndex from "/src/pages/user-profile/index.js"
 
const path = window.location.pathname;

switch (path) {
	case ('/chat-list'): {
		renderPage('#app', chatListIndex);
		break
	};
	case ('/chat-select'): {
		renderPage('#app', chatSelectIndex);
		break
	};
	case ('/error4'): {
		renderPage(
			'#app',
			errorIndex({
				code: 404,
				description: 'Не туда попали'
			})
		);
		break
	};
	case ('/error5'): {
		renderPage(
			'#app',
			errorIndex({
				code: 500,
				description: 'Мы уже фиксим'
			})
		);
		break
	};
	case ('/login'): {
		renderPage('#app', loginIndex);
		break
	};
	case ('/registration'): {
		renderPage('#app', registrationIndex);
		break
	};
	case ('/user-profile'): {
		renderPage('#app', userProfileIndex);
		break
	};
	case ('/user-edit-profile'): {
		renderPage('#app', userEditProfileIndex);
		break
	};
	case ('/user-edit-password'): {
		renderPage('#app', userEditPasswordIndex);
		break
	};
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
	};
};