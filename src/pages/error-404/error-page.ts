import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./error-page.pug');
import './error-page.scss';
import ErrorComponent from '../../components/error/error';

export default class ErrorPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            error: new ErrorComponent(
                'section',
                {
                    className: 'error',
                data: {
                    code: 404,
                    description: 'Не туда попали'
                }
            }),
            ...props
        });
    }
    render() {
        return this.compile(template);
    }
}