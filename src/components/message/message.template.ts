export default `
header
    .wrapper
        .companion
            .img
                img(src=data.src ? "https://ya-praktikum.tech/api/v2/resources" + data.src : "https://via.placeholder.com/150", alt="")
            label.name #{data.label}
        |!{dropdown}
    hr.border
    
|!{dialog}
footer 
    hr.border
    form(id='formMessage')
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
        .wrapper
            .staple
            input.message_input(data-valid="false" type="text" placeholder="Сообщение" name="message" autofocus)
            button.arrow
`;