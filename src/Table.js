import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>                
                <table width="80%" border="1" cellPadding="5px">
                    <thead>
                        <tr>
                            <th width="30px">No</th>
                            <th>Title</th>
                            <th>Nama Album</th>
                            <th>User</th>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Title</td>
                            <td>Album</td>
                            <td>User</td>
                            <td>
                                <img src="https://via.placeholder.com/150/92c952" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Title2</td>
                            <td>Album2</td>
                            <td>User2</td>
                            <td>
                                <img src="https://via.placeholder.com/150/771796" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <span>Prev</span>
                    <span>1</span>
                    <span>2</span>
                    <span className="active">3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>Next</span>
                </div>

                {/* <div className="modal">
                    <span className="close" onClick='modalClose()'>&times;</span>
                    <img className="modalImg" alt="" />
                </div> */}
            </div>
        )
    }
}
