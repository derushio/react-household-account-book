/**
 * components/PlusButton.js
 * プラスボタン component
 */

import React from "react";
import { connect } from "react-redux"

class PlusButton extends React.Component {
    render() {
        return (
            <button onClick={ () => this.props.addTableAction() }>+</button>
        );
    }

    static getActions() {
        return {
            addTableAction: {type: "ADD_TABLE_ACTION"}
        };
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
            addTableAction: () => { dispatch(PlusButton.getActions().addTableAction); }
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