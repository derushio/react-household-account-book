/**
 * index.js
 * index.htmlのコントローラー
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './../store/configureStore';
import HsaTable from './../containers/HsaTable';

const store = ConfigureStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <HsaTable />
    </Provider>,
    rootEl
);