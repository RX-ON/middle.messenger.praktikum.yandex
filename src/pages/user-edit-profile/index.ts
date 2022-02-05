import ProfileLayout from "../../layout/profile/profile";
import UserEditProfilePage from "../../pages/user-edit-profile/user-edit-profile";
import Button from "../../pages/components/button/button";
import InfoInput from "../../pages/components/info-input/info-input";



export default new ProfileLayout({
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