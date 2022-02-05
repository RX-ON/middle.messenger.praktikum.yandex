import ProfileLayout from "/src/layout/profile/profile.js";
import UserEditProfilePage from "/src/pages/user-edit-profile/user-edit-profile.js";
import Button from "/src/pages/components/button/button.js";
import InfoInput from "/src/pages/components/info-input/info-input.js";



export default UserEditProfileIndex = new ProfileLayout({
    content: new UserEditProfilePage({
        src: '',
        btn: new Button({
            btnName: 'Сохранить'
        }).render(),
        inputList: new InfoInput({
            data: {
                src: "",
                userData: {
                    email: "gm@gmail.com",
                    login: "Goodman",
                    first_name: "Гриша",
                    second_name: "Добров",
                    display_name: "gooD",
                    phone: "+7 (909) 345 67 12"
                }
            },
            KEYS: {
                email: "Почта",
                login: "Логин",
                first_name: "Имя",
                second_name: "Фамилия",
                display_name: "Имя в чате",
                phone: "Телефон"
            }
        }).render()
    }).getContentString()
})