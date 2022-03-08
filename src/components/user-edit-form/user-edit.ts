import Block from '../../common/scripts/v2/Block';
import template from './user-edit.template';
import './user-edit.scss';

// input: inputList, src, btn
export default class UserEditComponent extends Block {
    render() {
        return this.compile(template);
    }
}