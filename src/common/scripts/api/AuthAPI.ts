import { BaseAPI } from './BaseAPI';

export interface RegisterFormData {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export interface LoginFormData {
    login: string,
    password: string
}

class AuthAPI extends BaseAPI {
    constructor() {
        super();
    }

    signUp(data: RegisterFormData) {
        return this.post('/auth/signup',{data});
    }

    signIn(data: LoginFormData) {
        return this.post('/auth/signin',{data});
    }

    getUserInfo() {
        return this.get('/auth/user');
    }

    logout() {
        return this.post('/auth/logout');
    }
}

export const authAPI = new AuthAPI();