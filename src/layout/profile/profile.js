import Block from "../../common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./profile.template.js"
import './profile.scss';

// input: content + backLink
export default class ProfileLayout extends Block {
    constructor(props) {
        super("div", {...props, className: "wrapper"});
    };
    render() {
        return compile(template)(this.props);
    };
};