import { Connect } from '../../common/scripts/v2/Store';
import { formatChats } from '../../common/scripts/v2/utils/formatDate';
import Button from '../../components/button/button';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';
import ChatListPage from './chat-list'


export default Connect(
    ChatListPage,
    (state: any) => {
        if(state.chats == undefined || state.chats.reason) return {};
        return {
            chatList: new ChatCollection(
                'section',
                {
                    className: 'chats',
                    content: new Chat(
                        'div',
                        {
                            className: 'chatList',
                            chatsList: formatChats(state.chats),
                        }
                    ),
                    btn: new Button(
                        'div',
                        {
                        btnName: 'Создать чат'
                    }),
                }
            ),
        }
    }
)