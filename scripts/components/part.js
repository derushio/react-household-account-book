/**
 * components/part.js
 * トップ画面描画スクリプト
 */

import React from 'react';

export default class Part extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.fuga}</span><br/>
                <button onClick={ () => this.props.handleClick() }>＊増加＊</button>
            </div>
        );
    }
}