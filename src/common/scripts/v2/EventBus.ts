type Callback = (...args: any) => void


export default class EventBus {

	protected _events: Record<string, Array<(...args: any) => void>>;
    constructor() {
        this._events = {};
    }

	attach(event: string, callback: Callback) {
		if (!this._events[event])
			this._events[event] = [];
			
		this._events[event].push(callback);
	}

	emit(event: string, ...args: any) {

		if(!this._events[event])
			return ;

		this._events[event].forEach(cb => { cb(...args) });
	}

	detach(event: string, callback: Callback) {
		
		if (!this._events[event])
			return;

		this._events[event] = this._events[event].filter((item => item !== callback))
	}
}
