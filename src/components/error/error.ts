import Block from '../../common/scripts/v2/Block';
import template from './error.template';
import './error.scss';

// input: content
export default class ErrorComponent extends Block {
    render() {
        return this.compile(template);
    }
}