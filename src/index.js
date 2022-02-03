import AuthLayout from "../src/layout/auth/auth.js";
import MainLayout from "../src/layout/main/main.js";
import ProfileLayout from "../src/layout/profile/profile.js";
import renderPage from "../src/common/scripts/utils/renderPage.js";
 
const path = window.location.pathname;

switch (path) {
	case ('/auth'): {
		renderPage(
			'#app',
			new AuthLayout({
				content: `
					<h1>Авторизация</h1>
					<a href="/">Мэйн</a>
				`
			})
		);
		break
	};
	case ('/profile'): {
		renderPage(
			'#app',
			new ProfileLayout({
				content: `
					<h1>Пофиль</h1>
					<a href="/">Мэйн</a>
				`
			})
		);
		break
	};
	default: {
		renderPage(
			'#app',
			new MainLayout({
                className: 'customClass',
                content: `
					<h1>Мэйн</h1>
					<a href="/auth">Авторизация</a>
				`
            })
		);
		break
	};
};