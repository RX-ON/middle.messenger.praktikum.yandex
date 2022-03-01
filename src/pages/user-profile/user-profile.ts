import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './user-profile.template'
import './user-profile.scss';
import InfoInput from '../../components/info-input/info-input';

// input: inputList, data -> src, first_name
export default class UserProfilePage extends Block {
    constructor(props: Record<string, any>) {
        super('section', {
            className: 'info',
            data: {
                src: '',
                first_name: 'Гриша'
            },
            inputList: new InfoInput({
                data: {
                    src: '', 
                    disabled: true,
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
            }).render(),
            ...props,
        });
    }
    render() {
        return compile(template)(this.props);
    }
}