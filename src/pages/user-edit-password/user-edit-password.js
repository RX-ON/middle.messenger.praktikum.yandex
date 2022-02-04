import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./user-edit-password.template.js"
import './user-edit-password.scss';

// input: inputList, src, btn
export default class UserEditPasswordPage extends Block {
    constructor(props) {
        super("section", {...props, className: "info"});
    };
    render() {
        return compile(template)(this.props);
    };
};