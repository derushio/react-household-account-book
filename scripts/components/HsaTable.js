/**
 * components/HsaTable.js
 * 表 component
 */

import React from "react";

/**
 * HsaTable
 */
class HsaTable extends React.Component {
    render() {
        let tableModels = this.props.data.hsaTableModels;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{ tableModels[0].title }</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default HsaTable;