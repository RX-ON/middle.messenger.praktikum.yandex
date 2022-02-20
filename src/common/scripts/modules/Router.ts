import Route from './Route';

export default class Router {
    protected _rootQuery: string | undefined;
	protected _currentRoute: any;
	routes: Route[] = [];
	history: any;
    constructor(rootQuery?: string) {
        if ((Router as any).__instance) {
            return (Router as any).__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        (Router as any).__instance = this;
    }

    use(pathname: string, block: any, props: any) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery, forRender: props});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event: any) => {
            this._onRoute(event.currentTarget.location.pathname);
        }
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        if (route) {
            this._currentRoute = route;
            route.render();
        }
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname)
    }

    back() {
        window.history.back()
    }

    forward() {
        window.history.forward()
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}