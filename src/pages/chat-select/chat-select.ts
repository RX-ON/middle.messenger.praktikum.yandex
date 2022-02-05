import Block from "../../common/scripts/modules/Block";
import { compile } from "pug";
import template from "./chat-select.template"
import './chat-select.scss';

// input: chatList, messageField
export default class ChatSelectPage extends Block {
    constructor(props: Record<string, any>) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};