/**
 * containres/PlusButton.js
 */

import React from 'react'
import { connect } from 'react-redux'

import PlusButton from './../components/PlusButton'
import PlusButtonAction from './../actions/PlusButton'

let mapStateToProps = (state) => {
    let props = {};
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
)(PlusButton);