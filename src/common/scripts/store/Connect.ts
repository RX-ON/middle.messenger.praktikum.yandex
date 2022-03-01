import Store from './Store';

export default function connect(Block: any, mapStateToProps: any) {
	return class extends Block {
		constructor(props = {}) {
			
			const store = new Store();

			super({ ...props, ...mapStateToProps(store.getState()) });

			store.on(Store.EVENT_UPDATE, () => {
				this.setProps({ ...mapStateToProps(store.getState()) });
				// console.log(this)
				this.eventBus().emit('flow:render');
			});
		}
	};
}