import historyBack from '../../common/scripts/utils/historyBack';
import renderPage from '../../common/scripts/utils/renderPage';
import MainLayout from '../../layout/main/main';
import ErrorPage500 from './error-page';


const backButton = historyBack();
renderPage(
    '#app', new MainLayout({
        content: new ErrorPage500({}).render(),
        handlers: {backButton}
    })
);