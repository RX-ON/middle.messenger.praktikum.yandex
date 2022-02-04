export default template = `
header
    .wrapper
        .companion
            .img
                img(src=data.src || "https://via.placeholder.com/150", alt="")
            label.name #{data.label}
        .three_dots
    hr.border
section.history
    .message 
        p.message_my-message Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia quos quaerat officiis optio esse nisi voluptates illum quam corrupti!
    .message 
        p.message_friend-message Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eveniet?
    .message 
        p.message_my-message Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia quos quaerat officiis optio esse nisi voluptates illum quam corrupti!
    .message 
        p.message_friend-message Lorem
footer 
    hr.border
    form
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
        .wrapper
            .staple
            input.message_input(type="text" placeholder="Сообщение" name="message")
            button.arrow
`;