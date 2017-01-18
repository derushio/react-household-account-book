/**
 * index.js
 * index.htmlのコントローラー
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './../store/configureStore';
import Part from './../containers/part';

const store = ConfigureStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Part />
    </Provider>,
    rootEl
);