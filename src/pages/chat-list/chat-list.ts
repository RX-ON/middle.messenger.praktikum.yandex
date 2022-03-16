import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./chat-list.pug');
import './chat-list.scss';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';
import Button from '../../components/button/button';
import { Actions } from '../../common/scripts/v2/Store';
export default class ChatListPage extends Block {
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
                            chatsList: [],
                        }
                    ),
                    btn: new Button(
                        'div',
                        {
                        btnName: 'Создать чат'
                    }),
                }
            ),
            ...props
        });
    }
    render() {
        return this.compile(template);
    }
    componentDidMount(): string {
        Actions.updateChats();
        return '';
    }
}