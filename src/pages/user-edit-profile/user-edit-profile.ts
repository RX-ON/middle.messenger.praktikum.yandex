import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './user-edit-profile.template';
import './user-edit-profile.scss';
import UserEditComponent from '../../components/user-edit-form/user-edit';
import Button from '../../components/button/button';
import InfoInput from '../../components/info-input/info-input';

// input: inputList, src, btn
export default class UserEditProfilePage extends Block {
    constructor(props: Record<string, any>) {
        super('section', {
            className: 'info',
            src: '',
            form: new UserEditComponent({
                btn: new Button({
                    btnName: 'Сохранить'
                }).render(),
                inputList: new InfoInput({
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
                }).render()
            }).getContentString(),
            ...props,
        });
    }
    render() {
        return compile(template)(this.props);
    }
}