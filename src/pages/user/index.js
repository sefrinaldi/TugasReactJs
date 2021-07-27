import React, { Component } from 'react';
// import Edit from '../edit';
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
                            <td>id</td>
                            <td>Fullname</td>
                            <td>Username</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userList.map((userlist, index) => {
                            let button;
                            
                            if (userlist.id === this.props.idLog)
                                button = <button className="editbtn" onClick={()=> this.editForm(userlist)}>Edit</button>;
                            else
                                button = <button className="deletebtn" onClick={()=> this.props.deleteUser(userlist.id)}>Delete</button>
                            return (
                                <tr key={index}>
                                    <td align="center">{userlist.id}</td>
                                    <td>{userlist.fullname}</td>
                                    <td>{userlist.username}</td>
                                    <td>{userlist.address}</td>                                    
                                    <td align="center" width="200px">
                                        {/* <button>Edit</button>                                       
                                        <button onClick={()=> this.props.deleteUser(userlist.id)}>Delete</button> */}
                                        {button}
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