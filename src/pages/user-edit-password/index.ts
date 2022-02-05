import ProfileLayout from '../../layout/profile/profile';
import UserEditPasswordPage from '../../pages/user-edit-password/user-edit-password';
import Button from '../../pages/components/button/button';
import InfoInput from '../../pages/components/info-input/info-input';


export default new ProfileLayout({
    content: new UserEditPasswordPage({
        src: '',
        btn: new Button({
            btnName: 'Сохранить'
        }).render(),
        inputList: new InfoInput({
            data: {
                src: '',
                type: 'password',
                userData: {
                    oldPassword: false,
                    newPassword: false,
                    repeatNewPassword: false
                }
            },
            KEYS: {
                email: 'Почта',
                login: 'Логин',
                first_name: 'Имя',
                second_name: 'Фамилия',
                display_name: 'Имя в чате',
                phone: 'Телефон',
                oldPassword: 'Старый пароль',
                newPassword: 'Новый пароль',
                repeatNewPassword: 'Повторите новый пароль'
            }
        }).render()
    }).getContentString()
})