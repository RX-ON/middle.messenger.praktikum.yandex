import ErrorPage from "/src/pages/error-page/error-page.js";


export default ErrorPageIndex = function(prop) {
    return new ErrorPage({
        data: {
            code: prop.code,
            description: prop.description
        }
    })
}