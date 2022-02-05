export default `
.img
    img.user-icon(src=data.src || "https://via.placeholder.com/150", alt="")
span.name #{data.first_name}
ul.form
    |!{inputList}
.actions 
    a(href="/user-edit-profile") Изменить данные
    a(href="/user-edit-password") Изменить пароль
    a(href="/login") Выход
`;