import Router from '../../common/scripts/modules/Router';


const router = new Router('#app');

export default function() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            router.go(link.dataset.link as string);
        });
    })    
}