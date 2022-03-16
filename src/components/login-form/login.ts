import Block from '../../common/scripts/v2/Block';
import template from './login.template';
import './login.scss';

// input: inputList, btn
export default class LoginComponent extends Block {
    // constructor(tag: any, props: any) {
    //     console.log('Был смонтирован объект формы авторизации');
    //     super(tag, props)
    // }
    render() {
        return this.compile(template);
    }
}