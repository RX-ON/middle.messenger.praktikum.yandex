import Block from '../../common/scripts/modules/Block';
import { compile } from 'pug';
import template from './error-page.template';
import './error-page.scss';
// import historyBack from '../../common/scripts/utils/historyBack';
import ErrorComponent from '../../components/error/error';

// input: data -> code, description, back-link
export default class ErrorPage extends Block {
    constructor(props: Record<string, any>) {
        super('div', {
            error: new ErrorComponent({
                data: {
                    code: 500,
                    description: 'Упс, уже исправляем'
                }
            }).getContentString(),
            ...props
        });
    }
    render() {
        return compile(template)(this.props);
    }
}