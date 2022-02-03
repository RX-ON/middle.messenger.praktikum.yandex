import AuthLayout from "../src/layout/auth/auth.js";
import MainLayout from "../src/layout/main/main.js";
import ProfileLayout from "../src/layout/profile/profile.js";
import Chat from "../src/modules/chats/components/chat/chat.js";
import ChatCollection from "../src/modules/chats/chats.js";
import ChatSelectPage from "../src/pages/chat-select/chat-select.js";
import MessageField from "../src/modules/message/message.js";
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
	case ('/profile'): {
		renderPage(
			'#app',
			new ProfileLayout({
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
			})
		);
		break
	};
	default: {
		renderPage(
			'#app',
			new MainLayout({
                className: 'customClass',
                content: new ChatCollection({
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
            })
		);
		break
	};
};