import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./info-input.template.js"
import './info-input.scss';

// input: btnName
export default class InfoInput extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};