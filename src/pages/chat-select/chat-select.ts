import Block from '../../common/scripts/v2/Block';
import template from './chat-select.template';
import './chat-select.scss';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';
import MessageField from '../../components/message/message';
import Msg from '../../components/msg/msg';
import Button from '../../components/button/button';
import Dropdown from '../../components/dropdown/dropdown';
import Store, { Actions } from '../../common/scripts/v2/Store';

export default class ChatSelectPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            chatList: new ChatCollection(
                'section',
                {
                    className: 'chats',
                content: new Chat(
                    'div',
                    {
                        className: 'chatList',
                    chatsList: []
                }),
                btn: new Button(
                    'div',
                    {
                    btnName: 'Создать чат'
                }),
            }),
            messageField: new MessageField(
                'div',
                {
                    className: 'msg',
                data: {
                    src: '',
                    label: 'Евгений'
                },
                dropdown: new Dropdown(
                    'div',
                    {
                        dropList: [
                            {
                                id: 'addUser', name: 'Добавить пользователя'
                            },
                            {
                                id: 'removeUser', name: 'Удалить пользователя'
                            },
                            {
                                id: 'delChat', name: 'Удалить чат'
                            },
                        ]
                    }
                ),
                dialog: new Msg(
                    'section',
                    {
                        className: 'history',
                        msgList: []
                    }
                )
            }),
            ...props
        });
    }
    componentDidMount(): string {
        Actions.updateChats();
        Store.getState()['selectChat'].socket.readyState == undefined ? Actions.connectChat(Store.getState()['selectChat'].id.toString()) : '';
        return '';
    }
    render() {
        return this.compile(template);
    }
}