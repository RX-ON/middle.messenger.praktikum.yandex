import Block from "../../common/scripts/modules/Block.js";
import { compile } from "pug";
import { readFileSync } from "fs";
import './main.scss';

let template = readFileSync('./main.pug', 'utf8');

// input: content
export default class MainLayout extends Block {
    constructor(props) {
        super("main", props);
    };
    render() {
        return compile(template)(this.props);
    };
};