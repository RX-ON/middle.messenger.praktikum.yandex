export default template = `
each data in inputList
    div.field(class=data.fieldClassName)
        input.data(data-valid="false" id=data.name name=data.name required)&attributes(data.attributes)
        label.name(for=data.name) #{data.text}
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
`;