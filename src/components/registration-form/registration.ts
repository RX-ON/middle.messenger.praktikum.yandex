import Block from '../../common/scripts/v2/Block';
import template from './registration.template'
import './registration.scss';

// input: inputList, btn
export default class RegistrationComponent extends Block {
    render() {
        return this.compile(template);
    }
}