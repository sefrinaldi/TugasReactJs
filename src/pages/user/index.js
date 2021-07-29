import React, { Component } from 'react';
// import Edit from '../edit';
import './user.css';

class User extends Component {
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
                            <td>{user.jabatan}</td>                            
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="detailbtn" onClick={() => this.detailForm(user)}>Detail</button>                                
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
                            <td>{user.jabatan}</td>                            
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="detailbtn" onClick={() => this.detailForm(user)}>Detail</button>                                
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
                            <td>{user.jabatan}</td>                            
                            <td>{user.gaji}</td>
                            <td align="center" width="200px">                                
                                <button className="detailbtn" onClick={() => this.detailForm(user)}>Detail</button>                                
                            </td>
                        </tr>
                    )
                })
        }
    }

    detailForm = data => {
        // console.log("detail in list",data);
        const { detailUser } = this.props
        detailUser(data)
    }

    editForm = data => {
        console.log(data.fullname);
        const { editData } = this.props
        editData(data)
        // this.props.redirect("edit")
    }

    render() {
        // console.log("from body", this.props.userList);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Fullname</td>                            
                            <td>Jabatan</td>                            
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

export default User;