import { v4 as makeUUID } from 'uuid';
// import Handlebars from 'handlebars';
import { compile } from 'pug';
import EventBus from './EventBus';

export default class Block {
	
	static EVENT_INIT 		= 'init';
    static EVENT_FLOW_CDM 	= 'flow:component-did-mount';
    static EVENT_FLOW_CDU	= 'flow:component-did-update';
    static EVENT_FLOW_RENDER= 'flow:render';

	_props;
	_children;
	_id;
	_element: any;
	_meta;
	_eventBus;

	constructor(tag = 'div', propsAndChilds = {}) {

		const { children, props } = this.getChildren(propsAndChilds);
		
		this._eventBus = new EventBus()
		this._id = makeUUID();
		//this._children = children;
		this._children = this.makePropsProxy(children);
		this._props = this.makePropsProxy({ ...props, __id: this._id });
		this._meta = { tag, props };

		this.registerEvents();
		this._eventBus.emit(Block.EVENT_INIT);
	}

	registerEvents() {
		this._eventBus.attach(Block.EVENT_INIT, this.init.bind(this));
		this._eventBus.attach(Block.EVENT_FLOW_CDM, this._componentDidMount.bind(this));
		this._eventBus.attach(Block.EVENT_FLOW_CDU, this._componentDidUpdate.bind(this));
		this._eventBus.attach(Block.EVENT_FLOW_RENDER, this._render.bind(this));
	}

	init() {
		this._element = this.createDocumentElement(this._meta?.tag);
		this._eventBus.emit(Block.EVENT_FLOW_RENDER);
	}

	createDocumentElement(tag: string) {
		const element = document.createElement(tag);
		if(this._meta.props.className) element.classList.add(this._meta.props.className);
		if (this._props.settings?.withInternalID) element.setAttribute('data-id', this._id);
		return element;
	}

	_render() {
		const block = this.render();
		this.removeEvents();
		this._element.innerHTML = '';
		this._element.appendChild(block);
		this.addEvents();
	}

	render() {
		return '';
	}

	addEvents() {
		
		const { events = {} } = this._props;

		Object.keys(events).forEach((eventName) => {
			this._element.addEventListener(eventName, events[eventName]);
		});
	}

	removeEvents() {
		const { events = {} } = this._props;

		Object.keys(events).forEach((eventName) => {
			this._element.removeEventListener(eventName, events[eventName]);
		});
	}

	getChildren(propsAndChilds: any) {
		
		const children: any = {};
		const props: any = {};

		Object.keys(propsAndChilds).forEach(key => {
			if (propsAndChilds[key] instanceof Block)
				children[key] = propsAndChilds[key];
			else 
				props[key] = propsAndChilds[key];
		});
		return { children, props };
	}

	compile(template: string, props?: Record<string, any>) {
		
		if(typeof(props) == 'undefined')
			props = this._props;

		const propsAndStubs = { ...props };

		Object.entries(this._children).forEach(([key, child]) => {
			propsAndStubs[key] = `<div data-id="${(child as any)._id}"></div>`;
		});

		const fragment: any = this.createDocumentElement('template');
		fragment.innerHTML = compile(template)(propsAndStubs);

		Object.values(this._children).forEach(child => {
			const stub = fragment.content.querySelector(`[data-id="${(child as any)._id}"]`);
			if(stub)
				stub.replaceWith((child as any).getContent());
		});
		return fragment.content;
	}

	_componentDidMount() {
		this.componentDidMount();
		Object.values(this._children).forEach(child => { (child as any).dispatchComponentDidMount() });
	}

	componentDidMount() {
		return '';
	}

	dispatchComponentDidMount() {
		this._eventBus.emit(Block.EVENT_FLOW_CDM);
		if (Object.keys(this._children).length)
			this._eventBus.emit(Block.EVENT_FLOW_RENDER);
	}

	_componentDidUpdate(oldProps: any, newProps: any) {
		const isReRender = this.componentDidUpdate(oldProps, newProps);
		if(isReRender)
			this._eventBus.emit(Block.EVENT_FLOW_RENDER);
	}

	componentDidUpdate(oldProps: any, newProps: any) {
		return true;
	}

	setProps(newProps: any) {

		if (!newProps)
			return;

		const { children, props } = this.getChildren(newProps);

		if(Object.values(children).length)
			Object.assign(this._children, children);

		if(Object.values(props).length)		
			Object.assign(this._props, props);
	}

	makePropsProxy(props: any) {
		
		return new Proxy(props, {
			
			get(target, prop) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			
			set: (target, prop, value) => {
				const oldValue = { ...target };
				target[prop] = value;
				this._eventBus.emit(Block.EVENT_FLOW_CDU, oldValue, target);
				return true;
			},

		});
	}

	show() {
		this.getContent().style.display = 'block';
	}

	hide() {
		this.getContent().style.display = 'none';
	}

	getContent() {
		return this._element;
	}
}
