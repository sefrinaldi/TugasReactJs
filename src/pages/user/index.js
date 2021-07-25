import React, { Component } from 'react';
import './user.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderUserList = () => {
        const userData = this.props.userList

        // let rows = ""

        console.log("userdata", userData.length);
        for (let i = 0; i < userData.length; i++) {

            // const id = userData[i].id
            // const fullname = userData[i].fullname
            // const username = userData[i].username
            // rows +=
            //     <tr>
            //         <td>{id}</td>
            //         <td>{fullname}</td>
            //         <td>{username}</td>
            //         <td></td>
            //     </tr>
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Fullname</td>
                            <td>Username</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userList.map((userlist, index) => {
                            return (
                                <tr key={index}>
                                    <td align="center">{userlist.id}</td>
                                    <td>{userlist.fullname}</td>
                                    <td>{userlist.username}</td>
                                    <td align="center" width="200px">
                                        <button>Edit</button>
                                        <button onClick={()=> this.props.deleteUser(userlist.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default User;