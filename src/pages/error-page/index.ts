import ErrorPage from '../../pages/error-page/error-page';


export default function(prop: Record<string, any>) {
    return new ErrorPage({
        data: {
            code: prop.code,
            description: prop.description
        }
    })
}