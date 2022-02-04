import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./user-edit-profile.template.js"
import './user-edit-profile.scss';

// input: inputList, src, btn
export default class UserEditProfilePage extends Block {
    constructor(props) {
        super("section", {...props, className: "info"});
    };
    render() {
        return compile(template)(this.props);
    };
};