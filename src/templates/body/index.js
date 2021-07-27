import React, { Component } from 'react'
import { Register, Login, User } from '../../pages'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // userList: [
            //     {           
            //         id : 1,         
            //         fullname: "Antoni",
            //         username: "toni",
            //         password: "password"
            //     },
            //     {          
            //         id : 2,          
            //         fullname : "Robi",
            //         username : "robi",
            //         password : "password"
            //     },
            //     {
            //         id : 3,
            //         fullname : "john",
            //         username : "john",
            //         password : "password"
            //     }        
            // ],
            userList: {}
        }
        // this.readApi = this.readApi.bind(this)
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    userList: json.map(user => {
                        return {
                            id: user.id,
                            fullname: user.name,
                            username: user.username,
                            password: "12345",
                            address: user.address.city,
                            loginStatus: false
                        }
                    })
                })
            })
    }

    // readApi = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //                 userList: json.map(user => {
    //                     return {
    //                         id: user.id,
    //                         fullname: user.name,
    //                         username: user.username,
    //                         password: "12345",
    //                         address: user.address.city,
    //                         loginStatus: false
    //                     }
    //                 })
    //             })
    //         }) 
    // }

    // componentDidUpdate = () => {
    //     const dataUser = this.state.userList
    //     .filter(users => users.loginStatus === true)
    //     .map(user => {
    //         return {
    //             id: user.id,
    //             fullname: user.name,
    //             username: user.username,
    //             password: user.password,
    //             address: user.address,
    //             loginStatus: user.loginStatus
    //         }
    //     })

    //     const { checkUser } = this.props

    //     checkUser(dataUser)
    // }

    // oncheckUser = () => {
    //     let dataUser = this.state.userList
    //         .filter(users => users.id === 1)
    //         .map(user => {
    //             return {
    //                 id: user.id,
    //                 fullname: user.name,
    //                 username: user.username,
    //                 password: user.password,
    //                 address: user.address,
    //                 loginStatus: user.loginStatus
    //             }
    //         })

    //     const { checkUser } = this.props

    //     checkUser(dataUser)
    //     console.log("masuk body");
    // }

    addUser = inputUser => {

        this.setState({
            userList: [...this.state.userList, {
                id: Math.max(
                    ...this.state.userList.map(user => {
                        return user.id + 1
                    })
                ),
                fullname: inputUser.fullname,
                username: inputUser.username,
                password: inputUser.password,
                address: inputUser.address
            }]
        })
        console.log("data regis", inputUser.fullname);
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
            userList: newUser
        })
    }

    loginUser = data => {
        console.log(data);

        const dataLogin = this.state.userList.filter(user => user.username === data.dataUser && user.password === data.dataPass)

        console.log("user yg log in", dataLogin);
        // console.log("ini index", this.state.userList.findIndex(user => user.id === 7));        

        if (data.dataUser === "")
            return alert("Username Kosong")
        else if (data.dataPass === "")
            return alert("Password Kosong")
        else if (dataLogin.length > 0) {
            alert("Login Berhasil")
            const { goToPage, updateLogin } = this.props
            this.updateStatus(dataLogin[0])
            console.log("import app", dataLogin[0]);
            updateLogin(dataLogin[0])
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

    updateStatus = data => {

        const indexUser = this.state.userList.findIndex(user => user.id === data.id)
        console.log("index", indexUser);

        const oldData = this.state.userList

        oldData.splice(indexUser, 1, {
            id: data.id,
            fullname: data.fullname,
            username: data.username,
            password: data.password,
            address: data.address,
            loginStatus: true
        })

        console.log("data body", this.state.userList);
    }

    renderPage = () => {
        const page = this.props.page


        if (page === "register")
            return <Register regis={this.addUser} redirect={this.props.goToPage} />
        else if (page === "home")
            return <User userList={this.state.userList} deleteUser={this.deleteUser} />
        else
            return <Login logUser={this.loginUser} />
    }

    renderUser = () => {
        const listUser = this.state.userList
        for (let i = 0; i < listUser.length; i++) {
            console.log(listUser[i].fullname);
        }
    }

    render() {

        console.log("data", this.state.userList);
        return (
            <div className="body">
                {this.renderPage()}

            </div>
        )
    }
}
