import Block from '../../common/scripts/v2/Block';
import template from './login.template';
import './login.scss';
import LoginComponent from '../../components/login-form/login';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import checkValid from '../../common/scripts/v2/utils/checkValid';
import getFormData from '../../common/scripts/v2/utils/getFormData';
import Router from '../../common/scripts/v2/Router';
import { Actions } from '../../common/scripts/v2/Store';

// input: inputList, btn
export default class LoginPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            form: new LoginComponent(
                'form',
                {
                    className: 'login',
                    inputList: new Input(
                        'div',
                        {
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
                }),
                btn: new Button(
                    'div',
                    {
                    btnName: 'Авторизироваться'
                })
            }),
            events: {
                click: (e: any) => {

                    const t = e.target;
        
                    if(t && t.getAttribute('href'))
                    {
                        (new Router('#app')).go(t.getAttribute('href'));
        
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            },
            ...props,
        });
    }
    componentDidMount() {
        checkValid();
        // Actions.logout();   // чтобы при рендере автоматом выходить с учетки - работает, надо добавить првоерку: есть пользователь или нет
        getFormData(Actions.signIn);
        return '';
	}
    render() {
        return this.compile(template);
    }
}