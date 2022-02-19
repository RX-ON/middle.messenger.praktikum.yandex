export default (tag?: string) => {
    const searchTag = tag || '.back';
    return function() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const button: any = document.querySelector(searchTag);
        button.addEventListener('click', () => {
            window.history.back();
        });
    }
};