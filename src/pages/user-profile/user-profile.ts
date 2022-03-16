import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./user-profile.pug');
import './user-profile.scss';
import InfoInput from '../../components/info-input/info-input';
import Router from '../../common/scripts/v2/Router';
import { Actions } from '../../common/scripts/v2/Store';
import renderDOM from '../../common/scripts/v2/utils/renderDOM';
import Popup from '../../components/popup/popup';
import Button from '../../components/button/button';
export default class UserProfilePage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            className: 'info',
            data: {
                src: '',
                first_name: 'Гриша'
            },
            inputList: new InfoInput(
                'div',
                {
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
            }),
            events: {
                click: (e: any) => {

                    const t = e.target;
        
                    if(t && t.getAttribute('href')) {
                        if (t.getAttribute('href') === '/') Actions.logout();
                        (new Router('#app')).go(t.dataset.link);
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    if(t && t.dataset.photo) {
                        renderDOM('#app', new Popup('div', {
                            className: 'popup',
                            title: 'Загрузить фото',
                            id: 'pop10',
                            content: `<input id="avatar" type="file" name="avatar" accept="image/*">`,
                            btn: new Button('div', {
                                btnName: 'Отправить'
                            }),
                            events: {
                                submit: (e: any) => {
                                    e.preventDefault()
                                    const inputForm: any = document.getElementById('pop10');
                                    const form = new FormData(inputForm);
                                    Actions.changeAvatar(form)
                                    document.querySelector('.popup')?.remove()
                                }
                            }
                        }))
                    }
                }
            },
            ...props,
        });
    }
    render() {
        return this.compile(template);
    }
}