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

import loginPageLogic from './pages/login/index'
import registrationPageLogic from './pages/registration/index'
import profilePageLogic from './pages/user-profile/index'
import chatListPageLogic from './pages/chat-list/index'

import Router from './common/scripts/modules/Router';
import selectChat from './common/scripts/utils/selectChat';

const router = new Router('#app');
const chat = selectChat();

router
	.use('/', AuthLayout, {
		content: new LoginPage({}).render(),
		handlers: {getFormData, checkValid, loginPageLogic}
	})
	.use('/sign-up', AuthLayout, {
		content: new RegistrationPage({}).render(),
		handlers: {getFormData, checkValid, registrationPageLogic}
	})
	.use('/settings', ProfileLayout, {
		content: new UserProfilePage({}).getContentString(),
		handlers: {profilePageLogic}
	})
	.use('/settings/edit-password', ProfileLayout, {
		content: new UserEditPasswordPage({}).getContentString(),
		handlers: {getFormData, checkValid}
	})
	.use('/settings/edit-profile', ProfileLayout, {
		content: new UserEditProfilePage({}).getContentString(),
		handlers: {getFormData, checkValid}
	})
	.use('/messenger', MainLayout, {
		content: new ChatListPage({}).render(),
		handlers: {getFormData, checkValid, chat, chatListPageLogic}
	})
	.use('/messenger/chat', MainLayout, {
		content: new ChatSelectPage({}).render(),
		handlers: {getFormData, checkValid, chat, chatListPageLogic}
	})
	.start();