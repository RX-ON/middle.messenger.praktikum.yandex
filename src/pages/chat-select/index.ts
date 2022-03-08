import { Connect } from '../../common/scripts/v2/Store';
import { formatChats } from '../../common/scripts/v2/utils/formatDate';
import Button from '../../components/button/button';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';
import Dropdown from '../../components/dropdown/dropdown';
import MessageField from '../../components/message/message';
import Msg from '../../components/msg/msg';
import ChatSelectPage from './chat-select'


export default Connect(
    ChatSelectPage,
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
                    src: state.selectChat ? state.selectChat.avatar : '',
                    label: state.selectChat ? state.selectChat.title : ''
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
                        msgList: state.dialog ?? []
                    }
                )
            }),
        }
    }
)