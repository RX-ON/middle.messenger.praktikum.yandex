import Block from '../../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './input.template';
import './input.scss';

// input: inputList[] -> data -> name, attributes, text, errorText, errorClassName, fieldClassName
export default class Input extends Block {
    constructor(props: Record<string, any>) {
        super('div', props);
    }
    render() {
        return compile(template)(this.props);
    }
}