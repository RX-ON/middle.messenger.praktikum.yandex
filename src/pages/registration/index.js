import AuthLayout from "/src/layout/auth/auth.js";
import RegistrationPage from "/src/pages/registration/registration.js";
import Input from "/src/pages/components/input/input.js";
import Button from "/src/pages/components/button/button.js";


export default RegistrationPageIndex = new AuthLayout({
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