import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./input.template.js"
import './input.scss';

// input: inputList[] -> data -> name, attributes, text, errorText, errorClassName, fieldClassName
export default class Input extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};