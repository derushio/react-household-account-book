/**
 * components/PlusButton.js
 * プラスボタン component
 */

import React from "react";
import { connect } from "react-redux"

import IndexReducerAction from "../reducerActions/index"

/**
 * PlusButton
 */
class PlusButton extends React.Component {
    render() {
        return (
            <button onClick={ () => this.props.addTableAction() }>+</button>
        );
    }

    /**
     * ステートからプロパティを生成
     * @param {object} state - reduxから渡されるステート
     * @return {object} props - プロパティ
     */
    static mapStateToProps(state) {
        let props = {
            data: {}
        };

        return props;
    }
    
    static mapDispatchToProps(dispatch) {
        return {
            addTableAction: () => { dispatch(IndexReducerAction.getActions().addTableAction()); }
        };
    }
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    PlusButton.mapStateToProps,
    PlusButton.mapDispatchToProps
)(PlusButton);