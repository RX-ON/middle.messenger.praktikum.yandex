export default () => {
    const formsList = document.forms;
    if(!formsList) {
        return;
    };
    for(let i = 0; i < formsList.length; i++) {
        const form = formsList[i];
        const inputsList = form.querySelectorAll('input');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let inputsValidTest = true;
            for(let i = 0; i < inputsList.length; i++) {
                const input = inputsList[i];
                if(input.dataset.valid !== "true") {
                    inputsValidTest = false;
                };
            };
            if(!inputsValidTest) return;
            const result = {};
            inputsList.forEach(element => {
                if(!element.value) return
                result[element.name] = element.value;
            });
            if(Object.keys(result).length !== 0) console.log(result);
            form.reset();
        });
    };
};