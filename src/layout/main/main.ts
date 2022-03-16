import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./main.pug');
import './main.scss';
export default class MainLayout extends Block {
    render() {
        return this.compile(template);
    }
}