import React, { Component } from 'react'

export default class Register extends Component {

    registerUser = data => {
        data.preventDefault()

        const dataName = data.target[0].value
        const dataUser = data.target[1].value
        const dataPass = data.target[2].value
        const dataAdrs = data.target[3].value

        console.log(dataName);
        console.log(dataUser);
        console.log(dataPass);
        console.log(dataAdrs);
        
        const user = {
            fullname : dataName,
            username : dataUser,
            password : dataPass ? dataPass : "12345",
            address : dataAdrs
        } 
        
        if (dataName && 
        dataUser &&  
        dataAdrs){

            this.props.regis(user)  
            
            alert("Registrasi berhasil")
    
            this.props.redirect("login")
    
            data.target.fullname.value = ""
            data.target.username.value = ""
            data.target.password.value = ""  
            data.target.address.value = ""   
        } else {
            alert("Data Kosong")
        }

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
                                <td>Address</td>
                                <td>:</td>
                                <td>
                                    <input type="text" name="address" />
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
