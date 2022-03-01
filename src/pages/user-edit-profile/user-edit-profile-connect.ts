import Connect from '../../common/scripts/store/Connect';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import UserEditProfilePage from './user-edit-profile';

export default Connect(
	UserEditProfilePage, 
	(state: any) => {
        return {
            src: state.user.avatar,
            form: new UserEditComponent({
                btn: new Button({
                    btnName: 'Сохранить'
                }).render(),
                inputList: new InfoInput({
                    data: {
                        src: state.user.avatar,
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
                }).render()
            }).getContentString(),
        } ?? {}
    } 
);