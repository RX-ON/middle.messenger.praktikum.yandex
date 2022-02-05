import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './chat-list.template';
import './chat-list.scss';

// input: chatList
export default class ChatListPage extends Block {
    constructor(props: Record<string, any>) {
        super('div', props);
    }
    render() {
        return compile(template)(this.props);
    }
}