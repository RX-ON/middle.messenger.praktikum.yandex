import {assert} from 'chai';
import Block from '../Block';
import Route from './Route';
import Router from './Router';

class BlockLike extends Block {
    constructor(props?: any) {
        super(props);
    }
}

describe('Инициализация Router: ', () => {
    it('Синглтон', () => {
        const router1 = new Router('#app');
        const router2 = new Router('#app');
        assert.equal(router1 instanceof Router, true, 'Экземпляр создан');
        assert.equal(router1, router2, 'Возвращён существующий экземпляр');
    });

    it('Bнициализация Router: ', () => {
        const router = new Router('#app');
        assert.equal(router.rootQuery, '#app', 'Экземпляр проинициализирован');
        new Router('.application');
        assert.equal(router.rootQuery, '#app', 'Повторная инициализация проигнорирована');
    });
});

describe('Роутинг Router: ', () => {
    before(() => {
        const router = new Router('#app');
        router.use('/path', BlockLike, 'div',{})
        router.use('/another/path', BlockLike, 'div', {});
    })

    it('Чейнинг в методе use()', () => {
        const router = new Router('#app');
        const chainLink = router.use('/path', BlockLike,'div', {});
        assert.equal(router, chainLink, 'Возвращается экземпляр роутера');
    });

    it('Метод getRoute()', () => {
        const router = new Router('#app');
        const existedRoute = router.getRoute('/path');
        const undefinedRoute = router.getRoute('/undefined/path');
        assert.equal(existedRoute instanceof Route, true, 'Метод возвращает существующий роут');
        assert.equal(undefinedRoute, undefined, 'Метод возвращает undefined');
    });
});