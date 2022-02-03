import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./button.template.js"
import './button.scss';

// input: btnName
export default class Button extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};