/**
 * containres/HsaTable.js
 */

import React from 'react'
import { connect } from 'react-redux'

import HsaTable from '../components/HsaTable'
import HsaTableAction from '../actions/HsaTable'

/**
 * グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
 * 今回はいずれにしろstateのプロパティには{fuga}しか無いので、stateをまるごと返してます
 */
function mapStateToProps(state) {
    let props = {};
    props.hsaTableModels = state.hsaTableModels;
    return props;
}

function mapDispatchToProps(dispatch) {
    return {};
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HsaTable);