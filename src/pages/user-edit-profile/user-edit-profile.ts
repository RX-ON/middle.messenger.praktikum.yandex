import Block from '../../common/scripts/v2/Block';
import template from './user-edit-profile.template';
import './user-edit-profile.scss';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';
import checkValid from '../../common/scripts/v2/utils/checkValid';
import { Actions } from '../../common/scripts/v2/Store';
export default class UserEditProfilePage extends Block {
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
                        userData: {
                            email: 'gm@gmail.com',
                            login: 'Goodman',
                            first_name: 'Гриша',
                            second_name: 'Добров',
                            display_name: 'gooD',
                            phone: '+7 (909) 345 67 12'
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
                })
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
                        if(Object.keys(result).length !== 0) Actions.changeProfile(result);
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