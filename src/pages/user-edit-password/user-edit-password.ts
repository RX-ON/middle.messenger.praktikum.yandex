import Block from "../../common/scripts/modules/Block";
import { compile } from "pug";
import template from "./user-edit-password.template"
import './user-edit-password.scss';

// input: inputList, src, btn
export default class UserEditPasswordPage extends Block {
    constructor(props: Record<string, any>) {
        super("section", {...props, className: "info"});
    };
    render() {
        return compile(template)(this.props);
    };
};