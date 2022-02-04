import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./user-profile.template.js"
import './user-profile.scss';

// input: inputList, data -> src, first_name
export default class UserProfilePage extends Block {
    constructor(props) {
        super("section", {...props, className: "info"});
    };
    render() {
        return compile(template)(this.props);
    };
};