import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./chat.template.js"
import './chat.scss';

// input: chatsList[] -> data -> id, src, lable, date, text, count
export default class Chat extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};