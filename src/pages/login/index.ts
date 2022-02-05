import LoginPage from "../../pages/login/login";
import AuthLayout from "../../layout/auth/auth";
import Input from "../../pages/components/input/input";
import Button from "../../pages/components/button/button";


export default new AuthLayout({
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