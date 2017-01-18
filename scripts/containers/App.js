/**
 * containres/App.js
 */

import React from 'react'
import { connect } from 'react-redux'

import App from './../components/App'
import AppAction from './../actions/App'

let mapStateToProps = (state) => {
    let props = {};
    props.hsaTableModels = state.hsaTableModels;
    return props;
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);