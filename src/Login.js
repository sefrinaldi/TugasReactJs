import React, { Component } from 'react'

export default class Login extends Component {

    onCheckLogin = (text) => {
        text.preventDefault()
        const dataUser = text.target.username.value
        const dataPass = text.target.password.value

        if (!dataUser)
            alert("Username Kosong")
        else if (!dataPass)
            alert("Password Kosong")
        else if (dataUser === "admin" && dataPass === "password") {
            alert("Login Berhasil")
            text.target.username.value = ""
            text.target.password.value = ""
        }
        else
            alert("Login Gagal")

    }

    render() {
        return (
            <>
                <form onSubmit={this.onCheckLogin}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Login</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                    <button>Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </>
        )
    }
}
