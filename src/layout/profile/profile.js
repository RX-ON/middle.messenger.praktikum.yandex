import Block from "/src/common/scripts/modules/Block.js";
import { compile } from "pug";
import template from "./profile.template.js"
import './profile.scss';
import historyBack from '/src/common/scripts/utils/historyBack.js';
import getFormData from "/src/common/scripts/utils/getFormData.js";
import checkValid from "/src/common/scripts/utils/checkValid.js";

// input: content + backLink
export default class ProfileLayout extends Block {
    constructor(props) {
        let { handlers = {} } = props;
        const backButton = historyBack('.blue-arrow-back');
        super("div", {...props, className: "wrapper", handlers: {...handlers, backButton, getFormData, checkValid}});
    };
    render() {
        return compile(template)(this.props);
    };
};