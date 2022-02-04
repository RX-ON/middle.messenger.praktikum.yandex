import validation from './validation.js';

export default () => {
    const formsList = document.forms;
    if(!formsList) {
        return;
    };
    for(let i = 0; i < formsList.length; i++) {
        const form = formsList[i];
        console.log(i);
        form.addEventListener("focus", (event) => {
            if(event.target.tagName === 'INPUT') {
                // console.log("focus", event.target.name);
                // event.target.style.background = "pink";
            };
        }, true);
        form.addEventListener("blur", (event) => {
            if(event.target.tagName === 'INPUT') {
                const validCheck = validation(event.target.name, event.target.value);
                if(!validCheck) return;
                if(event.target.name === "message") {
                    if(!validCheck.validation) {
                        event.target.parentNode.previousSibling.style.opacity = 1;
                        event.target.parentNode.previousSibling.textContent = validCheck.errorText;
                    } else {
                        event.target.parentNode.previousSibling.style.opacity = 0;
                    };
                    return;
                };
                if(!validCheck.validation) {
                    event.target.parentNode.lastChild.style.opacity = 1;
                    event.target.parentNode.lastChild.textContent = validCheck.errorText;
                } else {
                    event.target.parentNode.lastChild.style.opacity = 0;
                };
            };
        }, true);
    };
};