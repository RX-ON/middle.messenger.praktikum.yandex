import Block from '../../common/scripts/v2/Block';
import template from './info-input.template';
import './info-input.scss';

// input: content
export default class InfoInput extends Block {
    render() {
        return this.compile(template);
    }
}