import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./registration.pug');
import './registration.scss';

// input: inputList, btn
export default class RegistrationComponent extends Block {
    render() {
        return this.compile(template);
    }
}