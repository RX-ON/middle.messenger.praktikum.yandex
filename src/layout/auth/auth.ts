import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './auth.template';
import './auth.scss';
// import getFormData from '../../common/scripts/utils/getFormData';
// import checkValid from '../../common/scripts/utils/checkValid';

// input: content
export default class AuthLayout extends Block {
    constructor(props: Record<string, any>) {
        super('section', {
            ...props,
            className: 'auth'}
        );
    }
    render() {
        return compile(template)(this.props);
    }
}