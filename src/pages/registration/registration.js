import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./registration.template.js"
import './registration.scss';

// input: inputList, btn
export default class RegistrationPage extends Block {
    constructor(props) {
        super("form", {...props, className: "registration"});
    };
    render() {
        return compile(template)(this.props);
    };
};