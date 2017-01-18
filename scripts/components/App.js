/**
 * components/App.js
 * アプリ component
 */

import React from "react";

import PlusButton from "./PlusButton"
import HsaTable from "./HsaTable"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <PlusButton />
                <HsaTable data={ this.props.data } />
            </div>
        );
    }
}