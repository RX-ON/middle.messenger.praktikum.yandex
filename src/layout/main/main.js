import Block from "../../common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./main.template.js"
import './main.scss';

// input: content
export default class MainLayout extends Block {
    constructor(props) {
        super("main", props);
    };
    render() {
        return compile(template)(this.props);
    };
};