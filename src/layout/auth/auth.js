import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./auth.template.js"
import './auth.scss';
import getFormData from "/src/common/scripts/utils/getFormData.js";

// input: content
export default class AuthLayout extends Block {
    constructor(props) {
        let { handlers = {} } = props;
        super("section", {...props, className: 'auth', handlers: {...handlers, getFormData}});
    };
    render() {
        return compile(template)(this.props);
    };
};