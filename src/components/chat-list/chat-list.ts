import Block from '../../common/scripts/v2/Block';
import template from './chat-list.template';
import './chat-list.scss';
import Router from '../../common/scripts/v2/Router';
import renderDOM from '../../common/scripts/v2/utils/renderDOM';
import Popup from '../popup/popup';
import Button from '../button/button';
import { Actions } from '../../common/scripts/v2/Store';
import Input from '../input/input';
export default class ChatCollection extends Block {
    constructor(tag: any, props: any) {
        super(tag, {
            events: {
                click: (e: any) => {

                    const t = e.target;
        
                    if(t && t.className.toString() === 'profile')
                    {
                        (new Router('#app')).go('/settings');
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    if(t && t.className.toString() === 'btn')
                    {
                        e.preventDefault();
                        e.stopPropagation();
                        renderDOM('#app', new Popup('div', {
                            className: 'popup',
                            title: 'Создать чат',
                            id: 'pop10',
                            content: new Input(
                                'div',
                                {
                                    inputList: [
                                        {
                                            name: 'chatName',
                                            text: 'Название чата'
                                        },
                                
                                    ],
                                }
                            ),
                            btn: new Button('div', {
                                btnName: 'Создать'
                            }),
                            events: {
                                submit: (e: any) => {
                                    e.preventDefault()
                                    const form = document.getElementById('pop10');
                                    const input = form?.querySelector('input');
                                    Actions.createChat({title: input?.value})
                                    document.querySelector('.popup')?.remove()
                                }
                            }
                        }))
                    }
                }
            },
            ...props
        })
    }
    render() {
        return this.compile(template);
    }
}