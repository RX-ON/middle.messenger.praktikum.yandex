import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./auth.template.js"
import './auth.scss';

// input: content
export default class AuthLayout extends Block {
    constructor(props) {
        super("section", {...props, className: 'auth'});
    };
    render() {
        return compile(template)(this.props);
    };
};