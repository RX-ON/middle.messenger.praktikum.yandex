import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./chat-list.template.js"
import './chat-list.scss';

// input: chatList
export default class ChatListPage extends Block {
    constructor(props) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};