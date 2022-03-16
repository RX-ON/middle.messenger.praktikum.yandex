export default `
.form
    p #{title}
    form(id=id)
        |!{content}
        |!{btn}
    span(class='error-form') Какая-то ошибка
`;