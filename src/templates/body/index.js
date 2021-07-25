import React, { Component } from 'react'
import { Register, Login, User } from '../../pages'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {           
                    id : 1,         
                    fullname: "Antoni",
                    username: "toni",
                    password: "password"
                },
                {          
                    id : 2,          
                    fullname : "Robi",
                    username : "robi",
                    password : "password"
                },
                {
                    id : 3,
                    fullname : "john",
                    username : "john",
                    password : "password"
                }        
            ],
            data: [1, 2]
        }
    }

    addUser = inputUser => {
        
        this.setState({
            userList: [...this.state.userList, {
                id : Math.max(
                    ...this.state.userList.map(user => {
                        return user.id + 1
                    })
                ),
                fullname : inputUser.fullname,
                username : inputUser.username,
                password : inputUser.password
            }]
        })
        console.log("data regis",inputUser.fullname);
    }

    editUser = (id, fullname, username) => {
        
    }

    deleteUser = id => {
        const newUser = this.state.userList
        .filter(user => user.id !== id)
        .map(filterUser => {
            return filterUser
        })

        this.setState({
            userList : newUser
        })
    }

    loginUser = data => {
        console.log(data);

        const dataLogin = this.state.userList.filter(user => user.username === data.dataUser && user.password === data.dataPass)                  

        console.log(dataLogin);        

        if (data.dataUser === "")
            return alert("Username Kosong")
        else if (data.dataPass === "")
            return alert("Password Kosong")
        else if (dataLogin.length > 0) {
            alert("Login Berhasil")
            const { goToPage } = this.props
            return goToPage("home")
        }
        else
            alert("Login Gagal")

        // if (dataLogin.length > 0) {
        //     alert("Login Berhasil")
        // }
        // else
        //     alert("Login Gagal")
    }

    renderPage = () => {
        const page = this.props.page  
              

        if (page === "register") 
            return <Register regis={this.addUser} redirect={this.props.goToPage}/>
        else if (page === "home")
            return <User userList={this.state.userList} deleteUser={this.deleteUser}/>
        else
            return <Login logUser={this.loginUser}/>
    }
    
    renderUser = () => {
        const listUser = this.state.userList
        for (let i = 0; i < listUser.length; i++) {
            console.log(listUser[i].fullname);            
        }        
    }

    render() {
        
        return (
            <div className="body">
                {this.renderPage()}                               
            </div>
        )
    }
}
