import Block from '../../common/scripts/v2/Block';
import template from './msg.template';

// input: msgList[]
export default class Msg extends Block {
    render() {
		return this.compile(template);
	}
}