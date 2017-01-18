/**
 * components/App.js
 * 表 component
 */

import React from 'react';

import PlusButton from './../containers/PlusButton'
import HsaTable from './../containers/HsaTable'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <PlusButton />
                <HsaTable />
            </div>
        );
    }
}