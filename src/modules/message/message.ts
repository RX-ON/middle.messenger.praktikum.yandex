import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './message.template';
import './message.scss';

// input: data -> src, label
export default class MessageField extends Block {
    constructor(props: Record<string, any>) {
        super('div', {...props, className: 'msg'});
    }
    render() {
        return compile(template)(this.props);
    }
}