import AuthLayout from '../../layout/auth/auth';
import RegistrationPage from '../../pages/registration/registration';
import Input from '../../pages/components/input/input';
import Button from '../../pages/components/button/button';


export default new AuthLayout({
    content: new RegistrationPage({
        inputList: new Input({
            inputList: [
                {name: 'email', text: 'Почта'},
                {name: 'login', text: 'Логин'},
                {name: 'first_name', text: 'Имя'},
                {name: 'second_name', text: 'Фамилия'},
                {name: 'phone', text: 'Телефон'},
                {name: 'password', text: 'Пароль', attributes: {type: 'password', autocomplete: 'on'}},
                {name: 'password_repeat', text: 'Пароль (ещё раз)', attributes: {type: 'password', autocomplete: 'on'}}
            ]
        }).render(),
        btn: new Button({
            btnName: 'Зарегистрироваться'
        }).render()
    }).getContentString()
})