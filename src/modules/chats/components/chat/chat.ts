import Block from "../../../../common/scripts/modules/Block";
import { compile } from "pug";
import template from "./chat.template"
import './chat.scss';

// input: chatsList[] -> data -> id, src, lable, date, text, count
export default class Chat extends Block {
    constructor(props: Record<string, any>) {
        super("div", props);
    };
    render() {
        return compile(template)(this.props);
    };
};