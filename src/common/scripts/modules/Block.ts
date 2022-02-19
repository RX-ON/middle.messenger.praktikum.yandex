import EventBus from './EventBus';

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };
   
    _element: HTMLElement = document.createElement('template');
    _meta: {
        tagName: string
        props: Record<string, any>
    }
    _handlers: Record<string, () => void> = {};
    props: Record<string, any>;
    eventBus: () => EventBus;
   
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = 'div', props: Record<string, any> = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
   
        this.props = this._makePropsProxy(props);
    
        this.eventBus = () => eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _addHandlers(): void {
        const { handlers = {} } = this.props;
        this._handlers = handlers;

        Object.keys(handlers).forEach((handler) => {
            this._element.addEventListener(handler, handlers[handler])
        })
    }

    _removeHandlers(): void {
		Object.keys(this._handlers).forEach((handler) => {
			this._element.removeEventListener(handler, this._handlers[handler])
		});
		this._handlers = {};
	}

    getHandlers(): Record<string, () => void> {
        return this._handlers;
    }

   
    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
   
    _createResources(): void {
        const { tagName, props } = this._meta;
        this._element = this._createDocumentElement(tagName);
        if(props.className) {
            this._element.classList.add(props.className);
        }
    }
   
    init(): void {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
   
    _componentDidMount(): void {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
   
    componentDidMount(): boolean {
        const notEmpty = true;
        return notEmpty;
    }
   
    _componentDidUpdate(oldProps: any, newProps: any): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }
   
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        return true;
    }
   
    setProps(nextProps: Record<string, any>): void {
        if (!nextProps) {
            return;
        }
    
        Object.assign(this.props, nextProps);
    }
   
    get element() {
        return this._element;
    }
   
    _render(): void {
        const block = this.render();
        this._removeHandlers();
        this._addHandlers();
        this._element.innerHTML = block;
    }
   
    render(): string {
        return '';
    }
   
    getContent(): HTMLElement {
        return this.element;
    }

    getContentString(): string {
        return this.element.outerHTML;
    }
   
    _makePropsProxy(props: Record<string, any>) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return new Proxy(props, {
            get(target: Record<string, any>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, any>, prop: string, value: any) {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
   
    _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }
   
    show(): void {
        this.getContent().style.display = 'block';
    }
   
    hide(): void {
        this.getContent().style.display = 'none';
    }
  }