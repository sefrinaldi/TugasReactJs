import React, { Component } from 'react'

export default class Register extends Component {

    registerUser = data => {
        data.preventDefault()

        const user = {
            fullname : data.target[0].value,
            username : data.target[1].value,
            password : data.target[2].value
        }    

        this.props.regis(user)  
        
        alert("Registrasi berhasil")

        data.target.fullname.value = ""
        data.target.username.value = ""
        data.target.password.value = ""     
    }

    render() {        
        return (
            <div>
                <form onSubmit={this.registerUser}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Register</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fullname</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="fullname" />
                                </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="username" />
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>:</td>
                                <td>
                                    <input type="password" name="password" />
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
        )
    }
}
