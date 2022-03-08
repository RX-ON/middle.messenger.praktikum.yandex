import Store from './Store';

export default function connect(Block: any, mapStateToProps: any) {
	return class extends Block {
		constructor(tag: string, props: any = {}) {
			
			const store = new Store();
			
			// const state = store.getState();
			// const newProps = state.length ? mapStateToProps(state) : {}
			// super(tag, { ...props, ...newProps });

			super(tag, { ...props, ...mapStateToProps(store.getState()) });

			store.attach(Store.EVENT_UPDATE, () => {
				this.setProps({ ...mapStateToProps(store.getState()) });
			});
		}
	};
}