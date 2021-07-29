import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderUserList = () => {
        const { userList, detailData } = this.props

        return userList
            .filter(user => user.id === detailData.id)
            .map((user, index) => {
                return (
                    <tr key={index}>
                        <td align="center">{user.id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.username}</td>
                        <td>{user.jabatan}</td>
                        <td>{user.address}</td>
                        <td>{user.gaji}</td>                        
                    </tr>
                )
            })        
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
