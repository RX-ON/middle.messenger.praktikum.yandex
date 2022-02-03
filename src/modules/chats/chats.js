import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./chats.template.js"
import './chats.scss';

// input: content
export default class ChatCollection extends Block {
    constructor(props) {
        super("section", {...props, className: 'chats'});
    };
    render() {
        return compile(template)(this.props);
    };
};