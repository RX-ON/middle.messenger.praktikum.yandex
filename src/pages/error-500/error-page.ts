import Block from '../../common/scripts/v2/Block';
import template from './error-page.template';
import './error-page.scss';
import ErrorComponent from '../../components/error/error';

// input: data -> code, description, back-link
export default class ErrorPage extends Block {
    constructor(tag: string, props: any) {
        super(tag, {
            error: new ErrorComponent(
                'section',
                {
                    className: 'error',
                data: {
                    code: 500,
                    description: 'Упс, уже исправляем'
                }
            }),
            ...props
        });
    }
    render() {
        return this.compile(template);
    }
}