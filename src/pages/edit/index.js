import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            // username: "",
            // password: "",
            jabatan: "",
            address: "",
            gaji: ""
        }
    }

    componentDidMount = () => {
        const { editData } = this.props

        this.setState({
            fullname: editData.fullname,
            jabatan: editData.jabatan,
            address: editData.address,
            gaji: editData.gaji
        })
    }

    editUser = data => {
        // data.preventDefault()

        // const newFullname = data.target.fullname.value
        // const newUsername = data.target.username.value
        // const newPassword = data.target.password.value
        // const newAddress = data.target.address.value

        const newGaji = data.target.gaji.value

        const user = {
            id: this.props.editData.id,
            fullname: this.props.editData.fullname,
            username: this.props.editData.username,
            password: this.props.editData.password,
            jabatan: this.props.editData.jabatan,
            address: this.props.editData.address,
            gaji: newGaji
        }            

        if (newGaji) {

            const { updateUser } = this.props

            // alert("Edit data berhasil")
            console.log(newGaji);

            updateUser(user)

            // data.target.fullname.value = ""
            // data.target.username.value = ""
            // data.target.password.value = ""
            // data.target.address.value = ""

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
            // username: "",
            // password: "",
            jabatan: "",
            address: "",
            gaji: ""
        })
    }

    render() {
        // const { editData } = this.props
        // console.log("in edit form", this.state.fullname);
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
                                    {/* <input type="text" name="fullname" defaultValue={editData.fullname} onChange={this.setValue} /> */}
                                    {/* <input type="text" name="fullname" /> */}
                                    {/* {editData.fullname} */}
                                    {this.state.fullname}
                                </td>
                            </tr>
                            <tr>
                                {/* <td>Username</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="username" defaultValue={editData.username} onChange={this.setValue} />
                                </td> */}
                                <td>Jabatan</td>
                                <td>:</td>
                                <td>
                                    {/* {editData.jabatan} */}
                                    {this.state.jabatan}
                                </td>
                            </tr>
                            {/* <tr>
                                <td>Password</td>
                                <td>:</td>
                                <td>
                                    <input type="password" name="password" onChange={this.setValue} />
                                </td>
                            </tr> */}
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td>
                                    {/* <input type="text" name="address" defaultValue={editData.address} onChange={this.setValue} /> */}
                                    {/* {editData.address} */}
                                    {this.state.address}
                                </td>
                            </tr>
                            <tr>
                                <td>Gaji</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="gaji" value={this.state.gaji} onChange={this.setValue} />
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