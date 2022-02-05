import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './login.template';
import './login.scss';

// input: inputList, btn
export default class LoginPage extends Block {
    constructor(props: Record<string, any>) {
        super('form', {...props, className: 'login'});
    }
    render() {
        return compile(template)(this.props);
    }
}