import {assert} from 'chai';
import Block from './Block';
import EventBus from './EventBus';

describe('Инициализация', () => {
    it('Инициализация по умолчанию (без входных аргументов)', () => {
        const block = new Block();
        assert.equal(block._meta.tag, 'div', 'Тег по молчанию: div');
        assert.equal(typeof block._meta.props, 'object', 'Свойства по умолчанию');
        assert.equal(block._eventBus instanceof EventBus, true, 'Шина событий');
    });

    it('Инициализация с входными аргументами', () => {
        const block = new Block('section', {prop: 'property 1'});
        assert.equal(block._meta.tag, 'section', 'Инициализация тега');
        assert.equal(block._meta.props.prop, 'property 1', 'Инициализация свойств');
        assert.equal(block._eventBus instanceof EventBus, true, 'Шина событий');
    });
});

describe('События жизненного цикла', () => {
    it('Обновление свойств', () => {
        const block = new Block('section' ,{prop: 'value'});
        const events: string[] = [];

        block._eventBus.attach(Block.EVENT_FLOW_CDU, (() => events.push('CDU')).bind(this));
        block.setProps({prop: 'newValue'});

        assert.equal(events[0], 'CDU');
    });
});

describe('Работа с элементом', () => {
    const block = new Block();

    it('Получение элемента', () => {
        const element = block._element;
        assert.equal(element instanceof HTMLElement, true, 'Возвращён DOM-объект');
    });

    it('Скрытие элемента', () => {
        block.show();
        block.hide();
        assert.equal(block._element.style.display, 'none');
    });

    it('Отображение элемента', () => {
        block.hide();
        block.show();
        assert.equal(block._element.style.display, 'block');
    });
});