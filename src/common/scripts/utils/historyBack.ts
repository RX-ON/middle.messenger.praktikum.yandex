export default (tag: string) => {
    return function() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const button: any = document.querySelector(tag = '.back');
        button.addEventListener('click', () => {
            window.history.back();
        });
    }
};