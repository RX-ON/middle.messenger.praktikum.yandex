import Connect from '../../common/scripts/store/Connect';
import InfoInput from '../../components/info-input/info-input';
import UserProfilePage from './user-profile';

export default Connect(
	UserProfilePage, 
	(state: any) => {
        console.log('сработал коннект', state)
        return {
            data: {
                src: state.user.avatar,
                first_name: state.user.first_name
            },
            inputList: new InfoInput({
                data: {
                    src: state.user.avatar,
                    disabled: true,
                    userData: {
                        email: state.user.email,
                        login: state.user.login,
                        first_name: state.user.first_name,
                        second_name: state.user.second_name,
                        display_name: state.user.display_name,
                        phone: state.user.phone,
                    }
                },
                KEYS: {
                    email: 'Почта',
                    login: 'Логин',
                    first_name: 'Имя',
                    second_name: 'Фамилия',
                    display_name: 'Имя в чате',
                    phone: 'Телефон'
                }
            }).render(),
        } ?? {}
    } 
);