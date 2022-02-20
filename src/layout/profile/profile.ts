import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './profile.template';
import './profile.scss';
import historyBack from '../../common/scripts/utils/historyBack';
import getFormData from '../../common/scripts/utils/getFormData';
import checkValid from '../../common/scripts/utils/checkValid';

// input: content + backLink
export default class ProfileLayout extends Block {
    constructor(props: Record<string, any>) {
        const { handlers = {} } = props;
        const backButton = historyBack('.blue-arrow-back');
        super('div', {
            ...props,
            className: 'wrapper',
            handlers: {...handlers, backButton}
        });
    }
    render() {
        return compile(template)(this.props);
    }
    show(): void {
        this.getContent().style.display = 'flex';
    }
}