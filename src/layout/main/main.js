import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./main.template.js"
import './main.scss';
import getFormData from "/src/common/scripts/utils/getFormData.js";
import checkValid from "/src/common/scripts/utils/checkValid.js";

// input: content
export default class MainLayout extends Block {
    constructor(props) {
        let { handlers = {} } = props;
        super("main", {...props, handlers: {...handlers, getFormData, checkValid}});
    };
    render() {
        return compile(template)(this.props);
    };
};