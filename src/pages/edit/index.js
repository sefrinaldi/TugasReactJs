import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            username: "",
            password: "",
            address: ""
        }
    }

    editUser = data => {
        data.preventDefault()

        const newFullname = data.target.fullname.value
        const newUsername = data.target.username.value
        const newPassword = data.target.password.value
        const newAddress = data.target.address.value

        const user = {
            id: this.props.editData.id,
            fullname: newFullname,
            username: newUsername,
            password: newPassword ? newPassword : "12345",
            address: newAddress
        }

        

        

        if (newFullname &&
            newUsername &&
            newAddress) {

            const { updateUser } = this.props

            alert("Edit data berhasil")

            updateUser(user)

            data.target.fullname.value = ""
            data.target.username.value = ""
            data.target.password.value = ""
            data.target.address.value = ""

            this.props.redirect('home')
        } else {
            alert("Data Kosong")
        }
    }

    setValue = data => {
        this.setState({
            [data.target.name]: data.target.value
        })
    }

    componentWillUnmount = () => {
        this.setState({
            fullname: "",
            username: "",
            password: "",
            address: ""
        })
    }

    render() {
        const { editData } = this.props
        console.log("in edit form", this.state.fullname);
        return (
            <div>
                <form onSubmit={this.editUser}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Edit Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fullname</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="fullname" defaultValue={editData.fullname} onChange={this.setValue} />
                                    {/* <input type="text" name="fullname" /> */}
                                </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="username" defaultValue={editData.username} onChange={this.setValue} />
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>:</td>
                                <td>
                                    <input type="password" name="password" onChange={this.setValue} />
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="address" defaultValue={editData.address} onChange={this.setValue} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3" align="center">
                                    <button>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Edit;