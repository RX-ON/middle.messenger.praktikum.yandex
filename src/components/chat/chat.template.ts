export default `
each data in chatsList
    hr.border(noshade)
    .chat(id=data.id)
        .img
            img(src=data.avatar ? "https://ya-praktikum.tech/api/v2/resources" + data.avatar : "https://via.placeholder.com/150", alt="")
        .row
            label.title #{data.title}
            span.date #{data.last_message ? data.last_message.time : null}
        .row
            p.chat__text #{data.last_message ? data.last_message.content : null}
            if data.unread_count
                .notification
                    span.counter #{data.unread_count}
`;

//     {
//       "id": 1897,
//       "title": "Test",
//       "avatar": null,
//       "created_by": 317826,
//       "unread_count": 0,
//       "last_message": null
//     },