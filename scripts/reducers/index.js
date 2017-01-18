/**
 * reducers/index.js
 * index.html ステート管理スクリプト
 */

import HsaTableModels from './../models/HsaTableModel';

// 初期ステート設定
const initialState = {
    hsaTableModels: [new HsaTableModels(null, "aiueo")]
}

// actionに応じてステート変更
export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}