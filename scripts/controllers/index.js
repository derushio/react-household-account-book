/**
 * index.js
 * index.htmlのコントローラー
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './../store/configureStore';

import App from './../containers/App'

const store = ConfigureStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);