import EventBus from "./EventBus.js";

export default class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
   
    _element = null;
    _meta = null;
    _handlers = {};
   
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
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

    _addHandlers() {
        const { handlers = {} } = this.props;
        this._handlers = handlers;

		Object.keys(handlers).forEach((handler) => {
            console.log('add handler', handler)
			this._element.addEventListener(handler, handlers[handler])
		})

    }

    _removeHandlers() {
		Object.keys(this._handlers).forEach((handler) => {
			this._element.removeEventListener(handler, this._handlers[handler])
		});
		this._handlers = {};
	}

    getHandlers() {
        return this._handlers;
    }

   
    _registerEvents(eventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
   
    _createResources() {
      const { tagName, props } = this._meta;
      this._element = this._createDocumentElement(tagName);
      if(props.className) {
        this._element.classList.add(props.className);
      };
    };
   
    init() {
      this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
   
    _componentDidMount() {
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
   
    componentDidMount(oldProps) {}
   
    _componentDidUpdate(oldProps, newProps) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (!response) {
        return;
      }
      this._render();
    }
   
    componentDidUpdate(oldProps, newProps) {
      return true;
    }
   
    setProps = nextProps => {
      if (!nextProps) {
        return;
      }
   
      Object.assign(this.props, nextProps);
    };
   
    get element() {
      return this._element;
    }
   
    _render() {
        const block = this.render();
        this._removeHandlers();
        this._addHandlers();
        this._element.innerHTML = block;
    }
   
    render() {}
   
    getContent() {
      return this.element;
    }

    getContentString() {
        return this.element.outerHTML;
    }
   
    _makePropsProxy(props) {
      const self = this;
      return new Proxy(props, {
        get(target, prop) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop, value) {
          target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
          return true;
        },
        deleteProperty() {
          throw new Error("Нет доступа");
        }
      });
    }
   
    _createDocumentElement(tagName) {
      return document.createElement(tagName);
    }
   
    show() {
      this.getContent().style.display = "block";
    }
   
    hide() {
      this.getContent().style.display = "none";
    }
  }