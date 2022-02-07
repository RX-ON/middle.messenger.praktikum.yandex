import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './chat-list.template';
import './chat-list.scss';
import ChatCollection from '../../components/chat-list/chat-list';
import Chat from '../../components/chat/chat';

// input: chatList
export default class ChatListPage extends Block {
    constructor(props: Record<string, any>) {
        super('div', {
            chatList: new ChatCollection({
                content: new Chat({
                    chatsList: [
                        {
                            id: 1,
                            date: '12:67',
                            src: 'https://image.shutterstock.com/image-photo/young-man-studio-looking-cameraportrait-260nw-139246634.jpg',
                            label: 'Евгений',
                            text: 'Привет. Я вчера купил новый автомобиль, не хочешь посмотреть?',
                            count: 2
                        },
                        {
                            id: 2,
                            date: 'СБ',
                            src: 'http://img.youtube.com/vi/x_HL0wiK4Zc/maxresdefault.jpg',
                            label: 'Аркадий',
                            text: 'Изи, я тебе говорю, ИЗИ!!',
                            count: 0
                        },
                        {
                            id: 3,
                            date: '1 Октября 2021',
                            src: 'https://us.123rf.com/450wm/luismolinero/luismolinero1909/luismolinero190917934/130592146-handsome-young-man-in-pink-shirt-over-isolated-blue-background-keeping-the-arms-crossed-in-frontal-p.jpg?ver=6',
                            label: 'Иван',
                            text: 'Хрень какая-то. Думаю, тут надо идти другим путём!',
                            count: 10
                        },
                        {
                            id: 123,
                            src: 'https://via.placeholder.com/50',
                            label: 'Чат №1',
                            text: 'Тут есть какая-то информация, go',
                            date: 'ПН',
                            count: 10
                        }
                    ]
                }).render()
            }).getContentString(),
            ...props
        });
    }
    render() {
        return compile(template)(this.props);
    }
}