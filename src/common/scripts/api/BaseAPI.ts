import HTTPTransport, { Option } from '../v2/HTTP';

const chatAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2');


export class BaseAPI {
    constructor() {
        return;
    }

    protected ErrorHandler = (e: Error) => {
        throw new Error(`Transport error ${e}`);
    }

    protected get = (url: string, options?: Option) => {
        try {
            return chatAPIInstance.get(url, options);
        }
        catch (e) {
            this.ErrorHandler(e as Error);
        }
    }

    protected post = (url: string, options?: Option) => {
        try {
            return chatAPIInstance.post(url, options);
        }
        catch (e) {
            this.ErrorHandler(e as Error);
        }
    }

    protected put = (url: string, options?: Option) => {
        try {
            return chatAPIInstance.put(url, options);
        }
        catch (e) {
            this.ErrorHandler(e as Error);
        }
    }

    protected delete = (url: string, options?: Option) => {
        try {
            return chatAPIInstance.delete(url, options);
        }
        catch (e) {
            this.ErrorHandler(e as Error);
        }
    }
}