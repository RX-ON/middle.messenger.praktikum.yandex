import Block from '../../common/scripts/v2/Block';
import template from './chat.template';
import './chat.scss';
import { Actions } from '../../common/scripts/v2/Store';

export default class Chat extends Block {
	constructor(tag: string, props: any = {}) {
        if(typeof(props['events']) == 'undefined')
        props['events'] = {};
        
		props.events['click'] = (e: any) => {
			e.path.forEach((el: any) => {
				if(el.id && el.className === 'chat') {
					Actions.connectChat(el.id)
				}
			})
		}
        super(tag, props);
    }
    render() {
		return this.compile(template);
	}
}