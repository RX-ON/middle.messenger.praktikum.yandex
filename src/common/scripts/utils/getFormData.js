export default () => {
    console.log('ready')
    const form = document.forms[0]
    if(!form) {
        return;
    };
    const inputsList = form.querySelectorAll('input');
    const button = form.querySelector('button');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const result = {};
        inputsList.forEach(element => {
            if(!element.value) return
            result[element.name] = element.value;
        });
        if(Object.keys(result).length !== 0) console.log(result);
        form.reset();
    });
};