import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./error.pug');
import './error.scss';

// input: content
export default class ErrorComponent extends Block {
    render() {
        return this.compile(template);
    }
}