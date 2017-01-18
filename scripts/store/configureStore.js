/**
 * store/configureStore.js
 * 設定を保持する
 */

import { createStore } from 'redux';
import reducer from '../reducers/index';

export default function configureStore() {
    const store = createStore(reducer);
    return store;
}