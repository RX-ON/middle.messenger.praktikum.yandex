const jsdom = require('jsdom');
global.window = new jsdom.JSDOM(`<!DOCTYPE html><div id="app"></div>`).window;
global.document = window.document;
global.HTMLElement = window.HTMLElement; 