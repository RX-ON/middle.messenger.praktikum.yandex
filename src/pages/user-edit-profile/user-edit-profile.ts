import Block from "../../common/scripts/modules/Block";
import { compile } from "pug";
import template from "./user-edit-profile.template"
import './user-edit-profile.scss';

// input: inputList, src, btn
export default class UserEditProfilePage extends Block {
    constructor(props: Record<string, any>) {
        super("section", {...props, className: "info"});
    };
    render() {
        return compile(template)(this.props);
    };
};