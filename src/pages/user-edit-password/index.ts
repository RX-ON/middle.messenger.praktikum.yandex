import { Connect } from '../../common/scripts/v2/Store';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import UserEditPasswordPage from './user-edit-password';


export default Connect(
    UserEditPasswordPage,
    (state: any) => {
        if(state.user == undefined) return {};
        return {
            src: state.user.avatar ? `https://ya-praktikum.tech/api/v2/resources${state.user.avatar}` : '',
            form: new UserEditComponent(
                'form',
                {
                    btn: new Button(
                        'div',
                        {
                            btnName: 'Сохранить'
                        }
                    ),
                    inputList: new InfoInput(
                        'div',
                        {
                        data: {
                            src: '',
                            type: 'password',
                            userData: {
                                oldPassword: false,
                                newPassword: false,
                                repeatNewPassword: false
                            }
                        },
                        KEYS: {
                            email: 'Почта',
                            login: 'Логин',
                            first_name: 'Имя',
                            second_name: 'Фамилия',
                            display_name: 'Имя в чате',
                            phone: 'Телефон',
                            oldPassword: 'Старый пароль',
                            newPassword: 'Новый пароль',
                            repeatNewPassword: 'Повторите новый пароль'
                        }
                    }),
                }
            )
        }
    }
)