export default template = `
.img
    img.user-icon(src=data.src || "https://via.placeholder.com/150", alt="")
span.name #{data.first_name}
ul.form
    |!{inputList}
.actions 
    a(href="/") Изменить данные
    a(href="/") Изменить пароль
    a(href="/login") Выход
`;