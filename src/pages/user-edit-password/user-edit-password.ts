import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './user-edit-password.template';
import './user-edit-password.scss';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';

// input: inputList, src, btn
export default class UserEditPasswordPage extends Block {
    constructor(props: Record<string, any>) {
        super('section', {
            ...props,
            className: 'info',
            src: '',
            form: new UserEditComponent({
                btn: new Button({
                    btnName: 'Сохранить'
                }).render(),
                inputList: new InfoInput({
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
                }).render()
            }).getContentString()
        });
    }
    render() {
        return compile(template)(this.props);
    }
}