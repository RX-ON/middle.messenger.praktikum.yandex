import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./chat-select.template.js"
import './chat-select.scss';

// input: chatList, messageField
export default class ChatSelectPage extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};