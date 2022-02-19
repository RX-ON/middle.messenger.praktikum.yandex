type Callback = (...args: any) => void


export default class EventBus {
    protected listeners: Record<string, Array<(...args: any) => void>>;
    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Callback): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
    
        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}