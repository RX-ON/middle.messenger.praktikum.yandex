import AuthLayout from "../src/layout/auth/auth.js";
import MainLayout from "../src/layout/main/main.js";
import ProfileLayout from "../src/layout/profile/profile.js";
import Chat from "../src/modules/chats/components/chat/chat.js";
import ChatCollection from "../src/modules/chats/chats.js";
import ChatSelectPage from "../src/pages/chat-select/chat-select.js";
import ChatListPage from "../src/pages/chat-list/chat-list.js";
import MessageField from "../src/modules/message/message.js";
import Button from "../src/pages/components/button/button.js";
import Input from "../src/pages/components/input/input.js";
import InfoInput from "../src/pages/components/info-input/info-input.js";
import ErrorPage from "../src/pages/error-page/error-page.js";
import LoginPage from "../src/pages/login/login.js";
import RegistrationPage from "../src/pages/registration/registration.js";
import UserProfilePage from "../src/pages/user-profile/user-profile.js";
import UserEditProfilePage from "../src/pages/user-edit-profile/user-edit-profile.js";
import UserEditPasswordPage from "../src/pages/user-edit-password/user-edit-password.js";
import renderPage from "../src/common/scripts/utils/renderPage.js";
 
const path = window.location.pathname;

switch (path) {
	case ('/chat-list'): {
		renderPage(
			'#app',
			new MainLayout({
				content: new ChatListPage({
					chatList: new ChatCollection({
						content: new Chat({
							chatsList: [
								{
									id: 1,
									date: '12:67',
									src: 'https://image.shutterstock.com/image-photo/young-man-studio-looking-cameraportrait-260nw-139246634.jpg',
									label: 'Евгений',
									text: 'Привет. Я вчера купил новый автомобиль, не хочешь посмотреть?',
									count: 2
								},
								{
									id: 2,
									date: 'СБ',
									src: 'http://img.youtube.com/vi/x_HL0wiK4Zc/maxresdefault.jpg',
									label: 'Аркадий',
									text: 'Изи, я тебе говорю, ИЗИ!!',
									count: 0
								},
								{
									id: 3,
									date: '1 Октября 2021',
									src: 'https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6',
									label: 'Иван',
									text: 'Хрень какая-то. Думаю, тут надо идти другим путём!',
									count: 10
								},
								{
									id: 123,
									src: "https://via.placeholder.com/50",
									label: "Чат №1",
									text: "Тут есть какая-то информация, go",
									date: "ПН",
									count: 10
								}
							]
						}).render()
					}).getContentString()
				}).render()
			})
		);
		break
	};
	case ('/chat-select'): {
		renderPage(
			'#app',
			new MainLayout({
				content: new ChatSelectPage({
					chatList: new ChatCollection({
						content: new Chat({
							chatsList: [
								{
									id: 1,
									date: '12:67',
									src: 'https://image.shutterstock.com/image-photo/young-man-studio-looking-cameraportrait-260nw-139246634.jpg',
									label: 'Евгений',
									text: 'Привет. Я вчера купил новый автомобиль, не хочешь посмотреть?',
									count: 2
								},
								{
									id: 2,
									date: 'СБ',
									src: 'http://img.youtube.com/vi/x_HL0wiK4Zc/maxresdefault.jpg',
									label: 'Аркадий',
									text: 'Изи, я тебе говорю, ИЗИ!!',
									count: 0
								},
								{
									id: 3,
									date: '1 Октября 2021',
									src: 'https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6',
									label: 'Иван',
									text: 'Хрень какая-то. Думаю, тут надо идти другим путём!',
									count: 10
								},
								{
									id: 123,
									src: "https://via.placeholder.com/50",
									label: "Чат №1",
									text: "Тут есть какая-то информация, go",
									date: "ПН",
									count: 10
								}
							]
						}).render()
					}).getContentString(),
					messageField: new MessageField({
						data: {
							src: '',
							label: 'Евгений'
						}
					}).getContentString()
				}).render()
			})
		);
		break
	};
	case ('/error4'): {
		renderPage(
			'#app',
			new ErrorPage({
				data: {
					code: 404,
					description: 'Ошибка 404'
				}
			})
		);
		break
	};
	case ('/error5'): {
		renderPage(
			'#app',
			new ErrorPage({
				data: {
					code: 500,
					description: 'Ошибка 500'
				}
			})
		);
		break
	};
	case ('/login'): {
		renderPage(
			'#app',
			new AuthLayout({
				content: new LoginPage({
					inputList: new Input({
						inputList: [
							{
								class: 'login',
								text: 'Логин'
							},
							{
								class: 'password',
								text: 'Пароль',
								attributes: {
									type: 'password',
									autocomplete: 'on'
								}
							}
						]
					}).render(),
					btn: new Button({
						btnName: 'Авторизироваться'
					}).render()
				}).getContentString()
			})
		);
		break
	};
	case ('/registration'): {
		renderPage(
			'#app',
			new AuthLayout({
				content: new RegistrationPage({
					inputList: new Input({
						inputList: [
							{name: 'email', text: 'Почта'},
							{name: 'login', text: 'Логин'},
							{name: 'first_name', text: 'Имя'},
							{name: 'second_name', text: 'Фамилия'},
							{name: 'phone', text: 'Телефон'},
							{name: 'password', text: 'Пароль', attributes: {type: 'password', autocomplete: 'on'}},
							{name: 'password_repeat', text: 'Пароль (ещё раз)', attributes: {type: 'password', autocomplete: 'on'}}
						]
					}).render(),
					btn: new Button({
						btnName: 'Зарегистрироваться'
					}).render()
				}).getContentString()
			})
		);
		break
	};
	case ('/user-profile'): {
		renderPage(
			'#app',
			new ProfileLayout({
				content: new UserProfilePage({
					data: {
						src: '',
						first_name: 'Гриша'
					},
					inputList: new InfoInput({
						data: {
							src: "", 
							disabled: true,
							userData: {
								email: "gm@gmail.com",
								login: "Goodman",
								first_name: "Гриша",
								second_name: "Добров",
								display_name: "gooD",
								phone: "+7 (909) 345 67 12"
							}
						},
						KEYS: {
							email: "Почта",
							login: "Логин",
							first_name: "Имя",
							second_name: "Фамилия",
							display_name: "Имя в чате",
							phone: "Телефон"
						}
					}).render()
				}).getContentString()
			})
		);
		break
	};
	case ('/user-edit-profile'): {
		renderPage(
			'#app',
			new ProfileLayout({
				content: new UserEditProfilePage({
					src: '',
					btn: new Button({
						btnName: 'Сохранить'
					}).render(),
					inputList: new InfoInput({
						data: {
							src: "",
							userData: {
								email: "gm@gmail.com",
								login: "Goodman",
								first_name: "Гриша",
								second_name: "Добров",
								display_name: "gooD",
								phone: "+7 (909) 345 67 12"
							}
						},
						KEYS: {
							email: "Почта",
							login: "Логин",
							first_name: "Имя",
							second_name: "Фамилия",
							display_name: "Имя в чате",
							phone: "Телефон"
						}
					}).render()
				}).getContentString()
			})
		);
		break
	};
	case ('/user-edit-password'): {
		renderPage(
			'#app',
			new ProfileLayout({
				content: new UserEditPasswordPage({
					src: '',
					btn: new Button({
						btnName: 'Сохранить'
					}).render(),
					inputList: new InfoInput({
						data: {
							src: "",
							type: "password",
							userData: {
								oldPassword: false,
								newPassword: false,
								repeatNewPassword: false
							}
						},
						KEYS: {
							email: "Почта",
							login: "Логин",
							first_name: "Имя",
							second_name: "Фамилия",
							display_name: "Имя в чате",
							phone: "Телефон",
							oldPassword: "Старый пароль",
							newPassword: "Новый пароль",
							repeatNewPassword: "Повторите новый пароль"
						}
					}).render()
				}).getContentString()
			})
		);
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