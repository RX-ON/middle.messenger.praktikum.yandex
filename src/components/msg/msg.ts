import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./msg.pug');

// input: msgList[]
export default class Msg extends Block {
    render() {
		return this.compile(template);
	}
}