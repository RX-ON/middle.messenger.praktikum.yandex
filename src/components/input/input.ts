import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./input.pug');
import './input.scss';

// input: inputList[] -> data -> name, attributes, text, errorText, errorClassName, fieldClassName
export default class Input extends Block {
    render() {
        return this.compile(template);
    }
}