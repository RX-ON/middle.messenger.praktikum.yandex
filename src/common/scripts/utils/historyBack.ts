export default (tag: string) => {
    return function() {
        const button: any = document.querySelector(tag = '.back');
        button.addEventListener('click', () => {
            window.history.back();
        });
    }
};