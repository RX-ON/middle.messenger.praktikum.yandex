import ProfileLayout from '../../layout/profile/profile';
import UserProfilePage from '../../pages/user-profile/user-profile';
import InfoInput from '../../pages/components/info-input/info-input';


export default new ProfileLayout({
    content: new UserProfilePage({
        data: {
            src: '',
            first_name: 'Гриша'
        },
        inputList: new InfoInput({
            data: {
                src: '', 
                disabled: true,
                userData: {
                    email: 'gm@gmail.com',
                    login: 'Goodman',
                    first_name: 'Гриша',
                    second_name: 'Добров',
                    display_name: 'gooD',
                    phone: '+7 (909) 345 67 12'
                }
            },
            KEYS: {
                email: 'Почта',
                login: 'Логин',
                first_name: 'Имя',
                second_name: 'Фамилия',
                display_name: 'Имя в чате',
                phone: 'Телефон'
            }
        }).render()
    }).getContentString()
})