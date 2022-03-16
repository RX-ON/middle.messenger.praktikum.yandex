import Block from '../../common/scripts/v2/Block';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./profile.pug');
import './profile.scss';
import Router from '../../common/scripts/v2/Router';
export default class ProfileLayout extends Block {
    constructor(tag: any, props: any) {
        super(tag, {
            events: {
                click: (e: any) => {

                    const t = e.target;
                    if(t && t.className && t.className.toString().toLowerCase() == 'blue-arrow-back')
                    {
                        (new Router('#app')).back();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            },
            ...props
        })
    }
    render() {
        return this.compile(template);
    }
    show(): void {
        this.getContent().style.display = 'flex';
    }
}