import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './registration.template'
import './registration.scss';

// input: inputList, btn
export default class RegistrationComponent extends Block {
    constructor(props: Record<string, any>) {
        super('form', {
            ...props,
            className: 'registration'
        });
    }
    render() {
        return compile(template)(this.props);
    }
}