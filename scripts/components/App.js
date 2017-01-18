/**
 * components/App.js
 * アプリ component
 */

import React from "react";
import { connect } from "react-redux"

import PlusButton from "./PlusButton"
import HsaTable from "./HsaTable"

/**
 * App
 */
class App extends React.Component {
    /**
     * React.Component renderメソッド
     */
    render() {
        return (
            <div>
                <PlusButton />
                <HsaTable data={ this.props.data } />
            </div>
        );
    }

    static getActions() {
        return {};
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

        props.data.hsaTableModels = state.hsaTableModels;
        return props;
    }
    
    static mapDispatchToProps(dispatch) {
        return {
            handleClick: () => { console.log("aiueo"); }
        };
    }
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    App.mapStateToProps,
    App.mapDispatchToProps
)(App);