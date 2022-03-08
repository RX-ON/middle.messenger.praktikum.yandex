import Block from '../../common/scripts/v2/Block';
import template from './chat.template';
import './chat.scss';
import { Actions } from '../../common/scripts/v2/Store';

// input: chatsList[] -> data -> id, src, lable, date, text, count
export default class Chat extends Block {
	constructor(tag: string, props: any = {}) {
        if(typeof(props['events']) == 'undefined')
        props['events'] = {};
        
		props.events['click'] = (e: any) => {
            const t = e.target;
            console.log(t, e.path)
			e.path.forEach((el) => {
				if(el.id && el.className === 'chat') {
					console.log(el.id)
					Actions.connectChat(el.id)
				}
			})
            // if(t && t.className === 'popup') {
            //     t.remove()
            // }
		}
        super(tag, props);
    }
    render() {
		return this.compile(template);
	}
}