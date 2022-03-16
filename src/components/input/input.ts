import Block from '../../common/scripts/v2/Block';
import template from './input.template';
import './input.scss';

// input: inputList[] -> data -> name, attributes, text, errorText, errorClassName, fieldClassName
export default class Input extends Block {
    render() {
        return this.compile(template);
    }
}