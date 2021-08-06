import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {    
    
    onCheckLogin = data => {
        data.preventDefault()
        const newUser = {
            dataUser : data.target.username.value,
            dataPass : data.target.password.value
        }

        // data.target.username.value = ""
        // data.target.password.value = ""

        // this.props.logUser(user)

        const dataAllUser = this.props.isLogedIn.dataUser
        
        const dataFilter = dataAllUser.filter(user=> user.username === newUser.dataUser && user.password === newUser.dataPass)    
        
        if (newUser.dataUser === "")
            return alert("Username Kosong")
        else if (newUser.dataPass === "")
            return alert("Password Kosong")
        else if (dataFilter.length > 0){   
            
            console.log("user yg login :", dataFilter[0]);
    
            // if (dataFilter.dataUser === "")
            //     return alert("Username Kosong")
            // else if (data.dataPass === "")
            //     return alert("Password Kosong")
            // else if (dataLogin.length > 0) {
                alert("Login Berhasil")
            //     const { goToPage, updateLogin } = this.props
                const { redirect } = this.props
            //     this.updateStatus(dataLogin[0])
            //     // console.log("import app", dataLogin[0]);
            //     updateLogin(dataLogin[0])
            //     console.log("jabatan login", dataLogin[0].jabatan);
    
            //     if (dataLogin[0].jabatan !== "karyawan")
            //         return goToPage("home")
            //     else 
                    return redirect("detail")
            // }
            // else
            //     alert("Login Gagal")

        }
        else{
            alert("data not found!!!")
        } 
    }

    render() {

        console.log("data redux in login: ", this.props.isLogedIn.dataUser);
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

const mapStateToProps = state => ({
    isLogedIn: state.Auth
})

const mapDispatchToProps = dispatch => ({
    doLogin: (user) => dispatch({ type: "LOGIN", payload: { user }})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
