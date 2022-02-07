import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './user-edit.template';
import './user-edit.scss';

// input: inputList, src, btn
export default class UserEditComponent extends Block {
    constructor(props: Record<string, any>) {
        super('form', props);
    }
    render() {
        return compile(template)(this.props);
    }
}