import React from "react";
import { connect } from "react-redux"

import IndexReducerAction from "../reducerActions/index"

/**
 * Template
 */
class Template extends React.Component {
    /**
     * React.Component renderメソッド
     */
    render() {
        return (
            <div></div>
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
    
    /**
     * アクションをディスパッチする
     * @param {function} dispatch - reducerのdispatcher
     * @returns {object} ディスパッチの内容
     */
    static mapDispatchToProps(dispatch) {
        return {};
    }
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    Template.mapStateToProps,
    Template.mapDispatchToProps
)(Template);