import React, { Component } from 'react'
import { Register, Login, User, Edit, Detail } from '../../pages'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {           
                    id : 1,         
                    fullname: "Antoni",
                    username: "toni",
                    password: "password",
                    jabatan : "hrd",
                    address : "Jakarta",
                    gaji : 7000000,
                    loginStatus: false
                },
                {          
                    id : 2,          
                    fullname : "Robi",
                    username : "robi",
                    password : "password",
                    jabatan : "manager",
                    address : "Karawang",
                    gaji : 10000000,
                    loginStatus: false
                },
                {
                    id : 3,
                    fullname : "john",
                    username : "john",
                    password : "password",
                    jabatan : "karyawan",
                    address : "Palembang",
                    gaji : 5000000,
                    loginStatus: false
                },
                {
                    id : 4,
                    fullname : "Lucy",
                    username : "lucy",
                    password : "password",
                    jabatan : "karyawan",
                    address : "Pekanbaru",
                    gaji : 5000000,
                    loginStatus: false
                },
                {
                    id : 5,
                    fullname : "Farhan",
                    username : "farhan",
                    password : "password",
                    jabatan : "karyawan",
                    address : "Jambi",
                    gaji : 5000000,
                    loginStatus: false
                }
            ],
            // userList: {},
            newEdit: {},
            newDetail: {}
        }
        // this.readApi = this.readApi.bind(this)
    }

    // componentDidMount = () => {
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
                jabatan: inputUser.jabatan,
                address: inputUser.address,                
                loginStatus: false
            }]
        })
        console.log("data regis", inputUser.fullname);
    }

    editUser = data => {
        console.log("edit id body", data);

        this.setState({
            newEdit : data
        })
        this.props.goToPage("edit")
    }

    updateUser = data => {
        console.log("update user in body", data);

        const indexEdit = this.state.userList.findIndex(user => user.id === data.id)
        console.log("index user in body", indexEdit);

        const oldData = this.state.userList

        oldData.splice(indexEdit, 1, {
            id: data.id,
            fullname: data.fullname,
            username: data.username,
            password: data.password,
            jabatan: data.jabatan,
            address: data.address,
            gaji: data.gaji,
            loginStatus: this.state.userList[indexEdit].loginStatus
        })

        alert("Gaji berhasil d update")

        console.log("data after update body", this.state.userList);
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

    detailUser = data => {
        // console.log("detail in body", data);

        this.setState({
            newDetail : data
        })

        this.props.goToPage("detail")
    }

    loginUser = data => {
        console.log("data input", data);

        const dataLogin = this.state.userList.filter(user => user.username === data.dataUser && user.password === data.dataPass)

        if (dataLogin.length > 0){
            const rule = dataLogin[0].jabatan;
            console.log("rule",rule);
    
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
                // console.log("import app", dataLogin[0]);
                updateLogin(dataLogin[0])
                console.log("jabatan login", dataLogin[0].jabatan);
    
                if (dataLogin[0].jabatan !== "karyawan")
                    return goToPage("home")
                else 
                    return goToPage("detail")
            }
            else
                alert("Login Gagal")

        }
        else{
            alert("data not found!!!")
        }

        // if (dataLogin.length > 0) {
        //     alert("Login Berhasil")
        // }
        // else
        //     alert("Login Gagal")
    }

    updateStatus = data => {

        const indexUser = this.state.userList.findIndex(user => user.id === data.id)
        // console.log("index", indexUser);

        const oldData = this.state.userList

        oldData.splice(indexUser, 1, {
            id: data.id,
            fullname: data.fullname,
            username: data.username,
            password: data.password,
            jabatan: data.jabatan,
            address: data.address,
            gaji: data.gaji,
            loginStatus: true
        })

        // console.log("data body", this.state.userList);
    }

    renderPage = () => {
        const { page, idLog } = this.props

        // console.log("send to user", this.state.userList);


        if (page === "register")
            return <Register regis={this.addUser} redirect={this.props.goToPage} />
        else if (page === "home")
            return <User
                redirect={this.props.goToPage}
                userList={this.state.userList}
                editData={this.editUser}
                idLog={idLog}
                detailUser={this.detailUser}
                deleteUser={this.deleteUser} />
        else if (page === "edit")
            return <Edit 
                updateUser={this.updateUser}
                redirect={this.props.goToPage}
                editData={this.state.newEdit}
                />
        else if (page === "detail")
            return <Detail 
                redirect={this.props.goToPage}
                userList={this.state.userList}
                detailData={this.state.newDetail}
                editData={this.editUser}
                idLog={idLog}/>
        else
            return <Login logUser={this.loginUser} />
    }

    renderUser = () => {
        const listUser = this.state.userList
        for (let i = 0; i < listUser.length; i++) {
            console.log(listUser[i].fullname);
        }
    }

    componentWillUnmount = () => {
        this.setState({
            newEdit : "",
            newDetail : ""
        })
    }

    render() {

        // console.log("data", this.state.userList);
        return (
            <div className="body">
                {this.renderPage()}

            </div>
        )
    }
}
