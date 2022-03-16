import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./button.pug');
import './button.scss';

export default class Button extends Block {
	render() {
		return this.compile(template);
	}
}