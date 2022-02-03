import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./message.template.js"
import './message.scss';

// input: data -> src, label
export default class MessageField extends Block {
    constructor(props) {
        super("div", {...props, className: "msg"});
    };
    render() {
        return compile(template)(this.props);
    };
};