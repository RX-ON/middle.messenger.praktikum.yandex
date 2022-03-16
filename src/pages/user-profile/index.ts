import { Connect } from '../../common/scripts/v2/Store';
import InfoInput from '../../components/info-input/info-input';
import UserProfilePage from './user-profile';

export default Connect(
	UserProfilePage, 
	(state: any) => {
        if(state.user == undefined) return {};
        return {
            data: {
                src: state.user.avatar ? `https://ya-praktikum.tech/api/v2/resources${state.user.avatar}` : '',
                first_name: state.user.first_name
            },
            inputList: new InfoInput(
                'div',
                {
                data: {
                    src: state.user.avatar ? `https://ya-praktikum.tech/api/v2/resources${state.user.avatar}` : '',
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
            }),
        } ?? {}
    } 
);