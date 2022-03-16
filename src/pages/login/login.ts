import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./login.pug');
import './login.scss';
import LoginComponent from '../../components/login-form/login';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import checkValid from '../../common/scripts/v2/utils/checkValid';
import getFormData from '../../common/scripts/v2/utils/getFormData';
import Router from '../../common/scripts/v2/Router';
import { Actions } from '../../common/scripts/v2/Store';

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
        getFormData(Actions.signIn);
        return '';
	}
    render() {
        return this.compile(template);
    }
}