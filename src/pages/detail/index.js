import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderUserList = () => {
        const { userList, idLog } = this.props

        const cekId = userList.filter(user => user.id === idLog)
        const userRule = cekId[0].jabatan

        console.log("data user di detail", userList);

        if (userRule === "karyawan") {
            return userList
                .filter(user => user.jabatan === "karyawan")
                .map((user, index) => {
                    return (
                        <tr key={index}>
                            <td align="center">{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.username}</td>
                            <td>{user.jabatan}</td>
                            <td>{user.address}</td>
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="editbtn" onClick={() => this.editForm(user)}>Edit</button>                                
                            </td>
                        </tr>
                    )
                })
        }
        else if (userRule === "manager"){            
            return userList
                .filter(user => user.jabatan !== "hrd")
                .map((user, index) => {
                    return (
                        <tr key={index}>
                            <td align="center">{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.username}</td>
                            <td>{user.jabatan}</td>
                            <td>{user.address}</td>
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="editbtn" onClick={() => this.editForm(user)}>Edit</button>                                
                            </td>
                        </tr>
                    )
                })
        }
        else {
            return userList                
                .map((user, index) => {
                    return (
                        <tr key={index}>
                            <td align="center">{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.username}</td>
                            <td>{user.jabatan}</td>
                            <td>{user.address}</td>
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="editbtn" onClick={() => this.editForm(user)}>Edit</button>                                
                            </td>
                        </tr>
                    )
                })
        }
    }

    editForm = data => {
        console.log(data.fullname);
        const { editData } = this.props
        editData(data)
        // this.props.redirect("edit")
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Fullname</td>
                            <td>Username</td>
                            <td>Jabatan</td>
                            <td>Address</td>
                            <td>Gaji</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Detail;
