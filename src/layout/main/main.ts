import Block from '../../common/scripts/v2/Block';
import template from './main.template';
import './main.scss';
export default class MainLayout extends Block {
    render() {
        return this.compile(template);
    }
}