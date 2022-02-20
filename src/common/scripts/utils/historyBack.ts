export default (tag?: string) => {
    const searchTag = tag || '.back';
    return function() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const buttons: any = document.querySelectorAll(searchTag);
        buttons.forEach((button: any) => {
            button.addEventListener('click', () => {
                window.history.back();
            });
        })
    }
};