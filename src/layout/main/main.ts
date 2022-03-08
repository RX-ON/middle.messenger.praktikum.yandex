import Block from '../../common/scripts/v2/Block';
import template from './main.template';
import './main.scss';
import { Actions } from '../../common/scripts/v2/Store';
import { authAPI } from '../../common/scripts/api/AuthAPI';

// input: content
export default class MainLayout extends Block {
    render() {
        return this.compile(template);
    }
}