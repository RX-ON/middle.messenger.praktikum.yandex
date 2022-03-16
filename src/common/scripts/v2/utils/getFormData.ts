export default (action: any) => {
    const formsList = document.forms;
    if(!formsList) {
        return;
    }
    for(let i = 0; i < formsList.length; i++) {
        const form: HTMLFormElement = formsList[i];
        const inputsList = form.querySelectorAll('input');
        form.addEventListener('submit', (event: any) => {
            event.preventDefault();
            let inputsValidTest = true;
            for(let i = 0; i < inputsList.length; i++) {
                const input = inputsList[i];
                if(input.dataset.valid !== 'true') {
                    inputsValidTest = false;
                }
            }
            if(!inputsValidTest) return;
            const result: Record<string, string> = {};
            inputsList.forEach(element => {
                if(!element.value) return
                result[element.name] = element.value;
            });
            // eslint-disable-next-line no-console
            if(Object.keys(result).length !== 0) action(result);
            form.reset();
        });
    }
};