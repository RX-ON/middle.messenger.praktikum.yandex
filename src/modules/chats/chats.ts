import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './chats.template';
import './chats.scss';

// input: content
export default class ChatCollection extends Block {
    constructor(props: Record<string, any>) {
        super('section', {...props, className: 'chats'});
    }
    render() {
        return compile(template)(this.props);
    }
}