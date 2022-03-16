import Block from '../../common/scripts/v2/Block';
import template from './button.template';
import './button.scss';

export default class Button extends Block {
	render() {
		return this.compile(template);
	}
}