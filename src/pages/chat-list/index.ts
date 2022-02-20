import Router from '../../common/scripts/modules/Router';


const router = new Router('#app');

export default function() {
    const link = document.querySelector('.profile');
    link?.addEventListener('click', (event) => {
        event.preventDefault();
        router.go('/settings');
    });
}