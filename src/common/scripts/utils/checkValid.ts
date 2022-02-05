import validation from './validation';

export default () => {
    const formsList = document.forms;
    if(!formsList) {
        return;
    }
    for(let i = 0; i < formsList.length; i++) {
        const form: HTMLFormElement = formsList[i];
        form.addEventListener('blur', (event:any) => {
            if(event.target.tagName === 'INPUT') {
                const validCheck = validation(event.target.name, event.target.value);
                if(!validCheck) return;
                if(event.target.name === 'message') {
                    if(!validCheck.validation) {
                        event.target.parentNode.previousSibling.style.opacity = 1;
                        event.target.parentNode.previousSibling.textContent = validCheck.errorText;
                        event.target.dataset.valid = false;
                    } else {
                        event.target.parentNode.previousSibling.style.opacity = 0;
                        event.target.dataset.valid = true;
                    }
                    return;
                }
                if(!validCheck.validation) {
                    event.target.parentNode.lastChild.style.opacity = 1;
                    event.target.parentNode.lastChild.textContent = validCheck.errorText;
                    event.target.dataset.valid = false;
                } else {
                    event.target.parentNode.lastChild.style.opacity = 0;
                    event.target.dataset.valid = true;
                }
            }
        }, true);
    }
};