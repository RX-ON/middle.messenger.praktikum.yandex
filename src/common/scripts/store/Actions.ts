import Store from './Store';
import { authAPI } from '../api/AuthAPI';
import Router from '../modules/Router';
import { userAPI } from '../api/UserAPI';

const store = new Store();
const router = new Router('#app');

const userDataManagment = (data: any) => {
	// eslint-disable-next-line no-console
	console.log('action has been loaded')
	switch (Object.keys(data).length) {
		case 2:
			//login
			// eslint-disable-next-line no-console
			console.log(2, data);
			authAPI.signIn(data)?.then((response: any) => {
				// eslint-disable-next-line no-console
				console.log(response);
				if (response.status === 200) {
					authAPI.getUserInfo()?.then((response: any) => {
						// eslint-disable-next-line no-console
						console.log('Кладем в стор', JSON.parse(response.response));
						store.set('user', JSON.parse(response.response));
						router.go('/settings');
					})
				} else {
					// eslint-disable-next-line no-console
					console.log(JSON.parse(response.response).reason)
				}
			})
			break;
		//case 3:
			//set password
		case 6: 
			//set profile
			// eslint-disable-next-line no-console
			console.log(6, data);
			userAPI.changeProfile(data)?.then((response: any) => {
				// eslint-disable-next-line no-console
				console.log('Кладем в стор', JSON.parse(response.response));
				store.set('user', JSON.parse(response.response));
				router.go('/settings')
			});
			break;
		case 7: 
			// eslint-disable-next-line no-console
			console.log(7);
			authAPI.signUp(data)?.then((response) => {
				// eslint-disable-next-line no-console
				console.log(response);
				authAPI.getUserInfo()?.then((response) => {
					// eslint-disable-next-line no-console
					console.log(response);
					if (response.status === 200) {
						authAPI.getUserInfo()?.then((response) => {
							// eslint-disable-next-line no-console
							console.log(response);
							store.set('user', response);
							router.go('/settings');
						})
					} else {
						// eslint-disable-next-line no-console
						console.log(JSON.parse(response.response).reason)
					}
				})
			})
			break;
			//sign up
		default: 
			// eslint-disable-next-line no-console
			console.log('exit');
			authAPI.logout()?.then((response) => {
				// eslint-disable-next-line no-console
				console.log(response);
			})
	}
	

	//store.set('user', user);
}

export { userDataManagment }