import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './login.template';
import './login.scss';
import LoginComponent from '../../components/login-form/login';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

// input: inputList, btn
export default class LoginPage extends Block {
    constructor(props: Record<string, any>) {
        super('div', {
            ...props,
            form: new LoginComponent({
                ...props,
                inputList: new Input({
                    inputList: [
                        {
                            name: 'login',
                            text: 'Логин'
                        },
                        {
                            name: 'password',
                            text: 'Пароль',
                            attributes: {
                                type: 'password',
                                autocomplete: 'on'
                            }
                        }
                    ]
                }).render(),
                btn: new Button({
                    btnName: 'Авторизироваться'
                }).render()
            }).getContentString()
        });
    }
    render() {
        return compile(template)(this.props);
    }
}