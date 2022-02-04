export default template = `
each value, key in data.userData
    .info-field
        label.name(for=key) #{KEYS[key]} 
        input.data(data-valid="false" id=key, name=key, placeholder=value, disabled=data.disabled || false, type=data.type || "text", autocomplete=data.autocomplete || "on")
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
`;