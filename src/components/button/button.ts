import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './button.template';
import './button.scss';

// input: btnName
export default class Button extends Block {
    constructor(props: Record<string, any>) {
        super('div', props);
    }
    render() {
        return compile(template)(this.props);
    }
}