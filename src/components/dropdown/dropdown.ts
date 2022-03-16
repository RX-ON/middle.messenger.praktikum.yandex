import Block from '../../common/scripts/v2/Block';
import template from './dropdown.template';
import './dropdown.scss'

// input: msgList[]
export default class Dropdown extends Block {
    constructor(tag: string, props: any = {}) {
        if(typeof(props['events']) == 'undefined')
        props['events'] = {};
        
		props.events['click'] = (e: any) => {
            const t = e.target;
            if(t && t.tagName == 'P') {
                document.querySelector('.dropdown-content')?.classList.remove('show');
                document.querySelector('.blur')?.classList.remove('show');
                return;
            }
            if(t && t.id === 'blur') {
                document.querySelector('.dropdown-content')?.classList.remove('show');
                document.querySelector('.blur')?.classList.remove('show');
                return;
            }
            document.querySelector('.dropdown-content')?.classList.add('show');
            document.querySelector('.blur')?.classList.add('show');
		}
        super(tag, props);
    }
    render() {
		return this.compile(template);
	}
}