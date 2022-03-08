import Block from '../../common/scripts/v2/Block';
import template from './message.template';
import './message.scss';
import { Actions } from '../../common/scripts/v2/Store';
import getFormData from '../../common/scripts/v2/utils/getFormData';

// input: data -> src, label
export default class MessageField extends Block {
    constructor(tag: string, props: any = {}) {
        if(typeof(props['events']) == 'undefined')
        props['events'] = {};
        
		props.events['click'] = (e: any) => {
            const t = e.target;
            if(t && t.id === 'addUser') {
                Actions.addUserChat();
            }
            if(t && t.id === 'removeUser') {
                Actions.removeUserChat();
            }
            if(t && t.id === 'delChat') {
                Actions.deleteChat();
            }
		}
		props.events['submit'] = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            const form: any = document.getElementById('formMessage');
            const input = form.querySelector('input');
            console.log('sub', input.value);
            Actions.sendMessage(input.value);
            form.reset();
		}
        super(tag, props);
    }
    render() {
        return this.compile(template);
    }
}