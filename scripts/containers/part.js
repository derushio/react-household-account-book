/**
 * containres/part.js
 * トップ画面 action dispatcher
 */

import React from 'react'
import { connect } from 'react-redux'

import Part from '../components/part'
import PartActions from '../actions/part'

/**
 * グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
 * 今回はいずれにしろstateのプロパティには{fuga}しか無いので、stateをまるごと返してます
 */
function mapStateToProps(state) {
    return state;
}

/**
 * clickでactionを飛ばす
 */
function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => { dispatch(PartActions.increment()); }
    }
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Part);