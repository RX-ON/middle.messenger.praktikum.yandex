import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./login.template.js"
import './login.scss';

// input: inputList, btn
export default class LoginPage extends Block {
    constructor(props) {
        super("form", {...props, className: "login"});
    };
    render() {
        return compile(template)(this.props);
    };
};