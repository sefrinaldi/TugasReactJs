import React, { Component } from 'react'

export default class Login extends Component {    
    
    onCheckLogin = data => {
        data.preventDefault()
        const user = {
            dataUser : data.target.username.value,
            dataPass : data.target.password.value
        }

        data.target.username.value = ""
        data.target.password.value = ""

        this.props.logUser(user)
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
