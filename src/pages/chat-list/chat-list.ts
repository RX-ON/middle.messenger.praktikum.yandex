import Block from '../../common/scripts/v2/Block';
import template from './chat-list.template';
import './chat-list.scss';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';
import Button from '../../components/button/button';
import { Actions } from '../../common/scripts/v2/Store';
import isEqual from '../../common/scripts/v2/utils/isEqual';

// input: chatList
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


// [
//     {
//       "id": 1897,
//       "title": "Test",
//       "avatar": null,
//       "created_by": 317826,
//       "unread_count": 0,
//       "last_message": null
//     },
//     {
//       "id": 1896,
//       "title": "PS5",
//       "avatar": null,
//       "created_by": 317826,
//       "unread_count": 0,
//       "last_message": null
//     },
//     {
//       "id": 1895,
//       "title": "Second",
//       "avatar": null,
//       "created_by": 317826,
//       "unread_count": 0,
//       "last_message": null
//     },
//     {
//       "id": 1866,
//       "title": "First1",
//       "avatar": null,
//       "created_by": 317826,
//       "unread_count": 0,
//       "last_message": null
//     }
//   ]