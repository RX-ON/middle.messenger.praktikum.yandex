export default `
each value, key in data.userData
    .info-field
        label.name #{KEYS[key]} 
        input.data(data-valid= (value ? "true" : "false"), name=key, value=value, disabled=data.disabled || false, type=data.type || "text", autocomplete=data.autocomplete || "on")
        span.error(class=data.errorClassName) #{data.errorText || 'Какая-то ошибка'}
`;