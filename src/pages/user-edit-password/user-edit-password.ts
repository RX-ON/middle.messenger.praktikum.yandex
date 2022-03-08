import Block from '../../common/scripts/v2/Block';
import template from './user-edit-password.template';
import './user-edit-password.scss';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';
import checkValid from '../../common/scripts/v2/utils/checkValid';
import getFormData from '../../common/scripts/v2/utils/getFormData';
import { Actions } from '../../common/scripts/v2/Store';

// input: inputList, src, btn
export default class UserEditPasswordPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            className: 'info',
            src: '',
            form: new UserEditComponent(
                'form',
                {
                btn: new Button(
                    'div',
                    {
                    btnName: 'Сохранить'
                }),
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
            }),
            events: {
                submit: (e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const formsList = document.forms;
                    if(!formsList) {
                        return;
                    }
                    for(let i = 0; i < formsList.length; i++) {
                        const form: HTMLFormElement = formsList[i];
                        const inputsList = form.querySelectorAll('input');
                        let inputsValidTest = true;
                        for(let i = 0; i < inputsList.length; i++) {
                            const input = inputsList[i];
                            if(input.dataset.valid !== 'true') {
                                inputsValidTest = false;
                            }
                        }
                        if(!inputsValidTest) return;
                        const result: Record<string, string> = {};
                        inputsList.forEach(element => {
                            if(!element.value) return
                            result[element.name] = element.value;
                        });
                        console.log(result.newPassword !== result.repeatNewPassword, result.newPassword == undefined)
                        if(result.newPassword !== result.repeatNewPassword || result.newPassword == undefined) continue
                        console.log(result.newPassword !== result.repeatNewPassword, { newPassword: result.newPassword, oldPassword: result.oldPassword }, 'target', e)
                        // eslint-disable-next-line no-console
                        if(Object.keys(result).length !== 0) Actions.changePassword({ newPassword: result.newPassword, oldPassword: result.oldPassword });
                        form.reset();
                    }
                }
            },
            ...props,
        });
    }
    componentDidMount() {
        checkValid();
        return '';
	}
    render() {
        return this.compile(template);
    }
}