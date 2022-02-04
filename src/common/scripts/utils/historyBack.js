export default (tag) => {
    return function() {
        const button = document.querySelector(tag = '.back');
        button.addEventListener('click', () => {
            window.history.back();
        });
    }
};