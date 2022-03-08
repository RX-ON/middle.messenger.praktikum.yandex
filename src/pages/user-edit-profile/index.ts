import { Connect } from '../../common/scripts/v2/Store';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import UserEditProfilePage from './user-edit-profile';


export default Connect(
    UserEditProfilePage,
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
                                src: state.user.avatar ? `https://ya-praktikum.tech/api/v2/resources${state.user.avatar}` : '',
                                userData: {
                                    email: state.user.email,
                                    login: state.user.login,
                                    first_name: state.user.first_name,
                                    second_name: state.user.second_name,
                                    display_name: state.user.display_name,
                                    phone: state.user.phone
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
                        }
                    )
                }
            )
        }
    }
)