import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./error-page.template.js"
import './error-page.scss';
import historyBack from '/src/common/scripts/utils/historyBack.js';

// input: data -> code, description, back-link
export default class ErrorPage extends Block {
    constructor(props) {
        let { handlers = {} } = props;
        const backButton = historyBack('.blue-arrow-back');
        super("section", {...props, className: "error", handlers: {...handlers, backButton}});
    };
    render() {
        return compile(template)(this.props);
    };
};