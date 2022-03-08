import Block from '../../common/scripts/v2/Block';
import template from './auth.template';
import './auth.scss';
import { Actions } from '../../common/scripts/v2/Store';

// input: content
export default class AuthLayout extends Block {
    render() {
        return this.compile(template);
    }
    show(): void {
        this.getContent().style.display = 'flex';
        // Actions.logout(); //когда мы отрисовываем страницу логина - автоматом выходим (срабатывает через раз)
    }
}