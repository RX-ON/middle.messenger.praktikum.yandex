import ProfileLayout from "/src/layout/profile/profile.js";
import UserEditPasswordPage from "/src/pages/user-edit-password/user-edit-password.js";
import Button from "/src/pages/components/button/button.js";
import InfoInput from "/src/pages/components/info-input/info-input.js";


export default UserEditPasswordIndex = new ProfileLayout({
    content: new UserEditPasswordPage({
        src: '',
        btn: new Button({
            btnName: 'Сохранить'
        }).render(),
        inputList: new InfoInput({
            data: {
                src: "",
                type: "password",
                userData: {
                    oldPassword: false,
                    newPassword: false,
                    repeatNewPassword: false
                }
            },
            KEYS: {
                email: "Почта",
                login: "Логин",
                first_name: "Имя",
                second_name: "Фамилия",
                display_name: "Имя в чате",
                phone: "Телефон",
                oldPassword: "Старый пароль",
                newPassword: "Новый пароль",
                repeatNewPassword: "Повторите новый пароль"
            }
        }).render()
    }).getContentString()
})