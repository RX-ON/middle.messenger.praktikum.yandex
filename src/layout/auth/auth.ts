import Block from '../../common/scripts/v2/Block';
import template from './auth.template';
import './auth.scss';

export default class AuthLayout extends Block {
    render() {
        return this.compile(template);
    }
    show(): void {
        this.getContent().style.display = 'flex';
    }
}