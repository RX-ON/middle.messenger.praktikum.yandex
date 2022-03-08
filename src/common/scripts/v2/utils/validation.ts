const MAP: any = {
    first_name: {
        reg: /^[A-ZА-Я][a-zа-яA-ZА-Я-]{0,30}$/,
        errorText: 'Введите корректные данные'
    },
    second_name: {
        reg: /^[A-ZА-Я][a-zа-яA-ZА-Я-]{0,30}$/,
        errorText: 'Введите корректные данные'
    },
    display_name: {
        reg: /^[A-ZА-Я][a-zа-яA-ZА-Я-]{0,30}$/,
        errorText: 'Введите корректные данные'
    },
    login: {
        reg: /^[a-z][a-z0-9-_]{2,19}$/i,
        errorText: 'Вы ввели некорректный логин'
    },
    email: {
        reg: /^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z]{2,4}$/i,
        errorText: 'Вы ввели некорректный email'
    },
    password: {
        reg: /^(?=.*[a-zа-я])(?=.*\d)[a-zа-я\d]{8,40}$/i,
        errorText: 'Введён некорректный пароль'
    },
    password_repeat: {
        reg: /^(?=.*[a-zа-я])(?=.*\d)[a-zа-я\d]{8,40}$/i,
        errorText: 'Введён некорректный пароль'
    },
    oldPassword: {
        reg: /^(?=.*[a-zа-я])(?=.*\d)[a-zа-я\d]{8,40}$/i,
        errorText: 'Введён некорректный пароль'
    },
    newPassword: {
        reg: /^(?=.*[a-zа-я])(?=.*\d)[a-zа-я\d]{8,40}$/i,
        errorText: 'Введён некорректный пароль'
    },
    repeatNewPassword: {
        reg: /^(?=.*[a-zа-я])(?=.*\d)[a-zа-я\d]{8,40}$/i,
        errorText: 'Введён некорректный пароль'
    },
    phone: {
        reg: /^(\+|\d)[\d]{9,14}$/i,
        errorText: 'Введён некорректный телефон'
    },
    message: {
        reg: /.+/,
        errorText: 'Поле не должно быть пустым'
    },
};
export default(selector: string, value: string) => {
    if(!MAP[selector]) return;
    return {
        validation: MAP[selector].reg.test(value),
        errorText: MAP[selector].errorText
    };
};