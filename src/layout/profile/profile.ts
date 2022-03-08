import Block from '../../common/scripts/v2/Block';
import template from './profile.template';
import './profile.scss';
import Router from '../../common/scripts/v2/Router';
// import historyBack from '../../common/scripts/utils/historyBack';

// input: content + backLink
export default class ProfileLayout extends Block {
    // constructor(props: Record<string, any>) {
    //     const { handlers = {} } = props;
    //     const backButton = historyBack('.blue-arrow-back');
    //     super('div', {
    //         ...props,
    //         className: 'wrapper',
    //         handlers: {...handlers, backButton}
    //     });
    // }
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