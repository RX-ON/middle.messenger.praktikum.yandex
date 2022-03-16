import Block from '../../common/scripts/v2/Block';
import template from './registration.template'
import './registration.scss';
import RegistrationComponent from '../../components/registration-form/registration';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Router from '../../common/scripts/v2/Router';
import checkValid from '../../common/scripts/v2/utils/checkValid';
import getFormData from '../../common/scripts/v2/utils/getFormData';
import { Actions } from '../../common/scripts/v2/Store';
export default class RegistrationPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            form: new RegistrationComponent(
                'form',
                {
                    className: 'registration',
                inputList: new Input(
                    'div',
                    {
                    inputList: [
                        {name: 'email', text: 'Почта'},
                        {name: 'login', text: 'Логин'},
                        {name: 'first_name', text: 'Имя'},
                        {name: 'second_name', text: 'Фамилия'},
                        {name: 'phone', text: 'Телефон'},
                        {name: 'password', text: 'Пароль', attributes: {type: 'password', autocomplete: 'on'}},
                        {name: 'password_repeat', text: 'Пароль (ещё раз)', attributes: {type: 'password', autocomplete: 'on'}}
                    ]
                }),
                btn: new Button(
                    'div',
                    {
                    btnName: 'Зарегистрироваться'
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
        getFormData(Actions.signUp);
        return '';
	}
    render() {
        return this.compile(template);
    }
}