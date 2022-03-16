import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./info-input.pug');
import './info-input.scss';

// input: content
export default class InfoInput extends Block {
    render() {
        return this.compile(template);
    }
}