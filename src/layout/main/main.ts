import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './main.template';
import './main.scss';
// import getFormData from '../../common/scripts/utils/getFormData';
// import checkValid from '../../common/scripts/utils/checkValid';

// input: content
export default class MainLayout extends Block {
    constructor(props: Record<string, any>) {
        // const { handlers = {} } = props;
        // super('main', {...props, handlers: {...handlers, getFormData, checkValid}});
        super('main', props);
    }
    render() {
        return compile(template)(this.props);
    }
}