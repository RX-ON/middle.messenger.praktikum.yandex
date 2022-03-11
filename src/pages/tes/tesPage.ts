import Block from '../../common/scripts/v2/Block';
import Button from '../../components/button/button';
import template from './tes.template';
import Input from '../../components/input/input';
import LoginComponent from '../../components/login-form/login';

export default class TesPage extends Block {

	constructor(tag: string, props: any = {}) {

		props['btn'] = new Button(
			'div',
			{
				btn: 'my_button',
				btnName: 'Нажми на меня',
				events: {
					click : (e: any) => {
						
						const t = e.target;
		
						if(t && t.tagName && t.tagName.toString().toLowerCase() == 'button')
						{
							e.preventDefault();
							e.stopPropagation();
						}
					}
				}
			}
		);
		props['content'] = new LoginComponent(
			'form',
			{
				className: 'login',
				inputList: new Input(
					'div',
					{
						inputList: [
							{
								name: 'login',
								text: 'Логин'
							},
							{
								name: 'password',
								text: 'Пароль',
								attributes: {
									type: 'password',
									autocomplete: 'on'
								}
							}
						]
					}
				),
				btn: new Button(
					'div',
					{
						btn: 'my_button',
						btnName: 'Auth',
						events: {
							click : (e: any) => {
								
								const t = e.target;
				
								if(t && t.tagName && t.tagName.toString().toLowerCase() == 'button')
								{
									e.preventDefault();
									e.stopPropagation();
								}
							}
						}
					}
				)
			}
		)

		super(tag,props);
	}
	
	render() {
		return this.compile(template);
	}
}