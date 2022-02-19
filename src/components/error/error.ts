import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './error.template';
import './error.scss';
// import historyBack from '../../common/scripts/utils/historyBack';

// input: data -> code, description, back-link
export default class ErrorComponent extends Block {
    constructor(props: Record<string, any>) {
        super('section', {...props, className: 'error'});
    }
    render() {
        return compile(template)(this.props);
    }
}