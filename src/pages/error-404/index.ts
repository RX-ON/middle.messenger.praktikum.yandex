import historyBack from '../../common/scripts/utils/historyBack';
import renderPage from '../../common/scripts/utils/renderPage';
import MainLayout from '../../layout/main/main';
import ErrorPage404 from './error-page';


const backButton = historyBack();
renderPage(
    '#app', new MainLayout({
        content: new ErrorPage404({}).render(),
        handlers: {backButton}
    })
);