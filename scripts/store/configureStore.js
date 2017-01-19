/**
 * store/configureStore.js
 * 設定を保持する
 */

import { createStore } from "redux";
import IndexReducerAction from "./../reducerActions/index";

/**
 * ストアを生成
 */
function configureStore() {
    const store = createStore(IndexReducerAction.reducer);
    return store;
}

export default configureStore;