import LoginPage from "/src/pages/login/login.js";
import AuthLayout from "/src/layout/auth/auth.js";
import Input from "/src/pages/components/input/input.js";
import Button from "/src/pages/components/button/button.js";


export default LoginPageIndex = new AuthLayout({
    content: new LoginPage({
        inputList: new Input({
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
        }).render(),
        btn: new Button({
            btnName: 'Авторизироваться'
        }).render()
    }).getContentString()
});