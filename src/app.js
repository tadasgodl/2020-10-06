import {loginFromToken} from './utility/login';
import h from './library/hyperscript';
import {mount} from './library/mount';
import './scss/main.scss';

const root = document.getElementById('root');

// mount(h('div', {class: 'testing'}, 'complete'), root);