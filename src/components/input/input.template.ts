export default `
each data in inputList
    div.field(class=data.fieldClassName)
        input.data(data-valid="false" name=data.name required)&attributes(data.attributes)
        label.name #{data.text}
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
`;