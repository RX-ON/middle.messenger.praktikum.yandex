import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './chat-list.template';
import './chat-list.scss';

// input: content
export default class ChatCollection extends Block {
    constructor(props: Record<string, any>) {
        super('section', {...props, className: 'chats'});
    }
    render() {
        return compile(template)(this.props);
    }
}