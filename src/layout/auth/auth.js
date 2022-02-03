import Block from "../../common/scripts/modules/Block.js";
import { compile } from "pug";
import { readFileSync } from "fs";
import './auth.css';

let template = readFileSync('./auth.pug', 'utf8');

// input: content
export default class AuthLayout extends Block {
    constructor(props) {
        super("section", props.className = 'auth');
    };
    render() {
        return compile(template)(this.props);
    };
};