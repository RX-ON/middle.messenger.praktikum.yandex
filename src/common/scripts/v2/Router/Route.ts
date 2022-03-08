import { default as renderDOM } from '../utils/renderDOM';

export default class Route {
	
	component;
	path;
	block: any;
	props: any;
	tag;

	constructor(path: string, component: any, tag = 'div', props = {}) {
		this.path = path;
		this.component = component;
		this.block = null;
		this.props = props;
		this.tag = tag;
	}

	render() {

		if(!this.block)
		{
			this.block = new this.component(this.tag, this.props);
			renderDOM(this.props.rootQuery, this.block);
			return;
		}

		this.block.show();
	}

	navigate(path: string) {
		if (this.match(path))
			this.render();
	}

	leave(){
		if(this.block)
			this.block.hide();
	}

	match(path: string) {
		if(this.props.withId)
			return path.includes(this.path);
		return path == this.path;
	}
}
