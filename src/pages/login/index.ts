import { compileFile } from 'pug'
import Block from '../../utils/Block'

interface InputProps {
	fields: any
}

let template = `
	p #{fields}
`;

export default class LoginPage extends Block {
	constructor(props: InputProps = {
        fields: [{class: 'login', text: 'Логин'}, {class: 'password', text: 'Пароль', attributes: {type: 'password', autocomplete: 'on'}}]
	}){
		super('template', props)
	}

	render(): string {
		return compileFile(template)(this.props)
	}
}
