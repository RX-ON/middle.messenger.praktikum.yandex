export default `
.img
    img.user-icon(src=data.src || "https://via.placeholder.com/150", alt="")
span.name #{data.first_name}
ul.form
    |!{inputList}
.actions 
    a(href="/pages/user-edit-profile/user-edit-profile.html") Изменить данные
    a(href="/pages/user-edit-password/user-edit-password.html") Изменить пароль
    a(href="/pages/login/login.html") Выход
`;