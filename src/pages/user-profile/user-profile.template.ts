export default `
.img
    img.user-icon(src=data.src || "https://via.placeholder.com/150", alt="")
span.name #{data.first_name}
ul.form
    |!{inputList}
.actions 
    a(href="/settings/edit-profile" data-link="/settings/edit-profile") Изменить данные
    a(href="/settings/edit-password" data-link="/settings/edit-password") Изменить пароль
    a(href="/" data-link="/") Выход
`;