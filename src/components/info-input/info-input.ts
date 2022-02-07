import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './info-input.template';
import './info-input.scss';

// input: btnName
export default class InfoInput extends Block {
    constructor(props: Record<string, any>) {
        super('div', props);
    }
    render() {
        return compile(template)(this.props);
    }
}