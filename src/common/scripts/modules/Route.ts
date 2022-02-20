import isEqual from '../utils/isEqual';
import renderPage from '../utils/renderPage';

export default class Route {
    protected _pathname: string;
	protected _blockClass: any;
	protected _block: any;
	protected _props: Record<string, any>;

    constructor(pathname: string, view: any, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props.forRender);
            renderPage(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}