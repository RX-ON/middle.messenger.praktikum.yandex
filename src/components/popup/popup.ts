import Block from '../../common/scripts/v2/Block';
import template from './popup.template';
import './popup.scss'

// input: msgList[]
export default class Popup extends Block {
    constructor(tag: string, props: any = {}) {
        if(typeof(props['events']) == 'undefined')
        props['events'] = {};
        
		props.events['click'] = (e: any) => {
            const t = e.target;
            
            if(t && t.className === 'popup') {
                t.remove()
            }
		}
        super(tag, props);
    }
    render() {
		return this.compile(template);
	}
}