import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './user-profile.template'
import './user-profile.scss';

// input: inputList, data -> src, first_name
export default class UserProfilePage extends Block {
    constructor(props: Record<string, any>) {
        super('section', {...props, className: 'info'});
    }
    render() {
        return compile(template)(this.props);
    }
}