import AuthLayout from "../src/layout/auth/auth.js";
import MainLayout from "../src/layout/main/main.js";
import ProfileLayout from "../src/layout/profile/profile.js";
import Chat from "../src/modules/chats/components/chat/chat.js";
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
				content: new Chat({
					data: {
						id: 123,
						src: "https://via.placeholder.com/50",
						label: "Чат №1",
						text: "Тут есть какая-то информация, go",
						date: "ПН",
						count: 10
					}
				}).render()
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