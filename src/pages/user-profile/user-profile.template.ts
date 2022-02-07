export default `
.img
    img.user-icon(src=data.src || "https://via.placeholder.com/150", alt="")
span.name #{data.first_name}
ul.form
    |!{inputList}
.actions 
    a(href="/src/pages/user-edit-profile/user-edit-profile.pug") Изменить данные
    a(href="/src/pages/user-edit-password/user-edit-password.pug") Изменить пароль
    a(href="/src/pages/login/login.pug") Выход
`;