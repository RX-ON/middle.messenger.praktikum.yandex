import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './registration.template'
import './registration.scss';
import RegistrationComponent from '../../components/registration-form/registration';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
// input: inputList, btn
export default class RegistrationPage extends Block {
    constructor(props: Record<string, any>) {
        super('div', {
            ...props,
            form: new RegistrationComponent({
                ...props,
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
        });
    }
    render() {
        return compile(template)(this.props);
    }
}