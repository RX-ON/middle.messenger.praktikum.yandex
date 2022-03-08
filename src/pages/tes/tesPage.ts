import Block from '../../common/scripts/v2/Block';
import Button from '../../components/button/button';
import Chat from '../../components/chat/chat'
import ChatCollection from '../../components/chat-list/chat-list';
import template from './tes.template';
import InfoInput from '../../components/info-input/info-input';
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
							// eslint-disable-next-line no-console
							console.log('Нажатие');
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
									// eslint-disable-next-line no-console
									console.log('Auth');
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