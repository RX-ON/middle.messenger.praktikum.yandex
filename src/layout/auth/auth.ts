import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./auth.pug');
import './auth.scss';

export default class AuthLayout extends Block {
    render() {
        return this.compile(template);
    }
    show(): void {
        this.getContent().style.display = 'flex';
    }
}