export default template = `
each data in chatsList
    hr.border(noshade)
    .chat(id=data.id)
        .img
            img(src=data.src || "https://via.placeholder.com/150", alt="")
        .row
            label.title #{data.label}
            span.date #{data.date}
        .row
            p.chat__text #{data.text}
            if data.count
                .notification
                    span.counter #{data.count}
`;