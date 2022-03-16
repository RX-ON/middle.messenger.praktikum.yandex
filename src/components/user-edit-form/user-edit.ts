import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./user-edit.pug');
import './user-edit.scss';

// input: inputList, src, btn
export default class UserEditComponent extends Block {
    render() {
        return this.compile(template);
    }
}