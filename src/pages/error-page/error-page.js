import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./error-page.template.js"
import './error-page.scss';

// input: data -> code, description, back-link
export default class ErrorPage extends Block {
    constructor(props) {
        super("section", {...props, className: "error"});
    };
    render() {
        return compile(template)(this.props);
    };
};