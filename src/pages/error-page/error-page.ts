import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './error-page.template';
import './error-page.scss';
import historyBack from '../../common/scripts/utils/historyBack';

// input: data -> code, description, back-link
export default class ErrorPage extends Block {
    constructor(props: Record<string, any>) {
        const { handlers = {} } = props;
        const backButton = historyBack('.blue-arrow-back');
        super('section', {...props, className: 'error', handlers: {...handlers, backButton}});
    }
    render() {
        return compile(template)(this.props);
    }
}