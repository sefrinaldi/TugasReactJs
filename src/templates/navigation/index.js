import React, { Component } from 'react'
import "./navbar.css"
import { Menu } from '../../components'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    checkActivePage = activePage => {
        const page = this.props.page
        // console.log("in nav", page);

        if (activePage === page) return "active"

        return ""
    }

    onCheckLogin = () => {
        // const statusUser = this.props.checkUser.loginStatus
        const { checkUser,goToPage } = this.props

        console.log("cek status");

        return (            
            <Menu
            isActivePage={this.checkActivePage("home")}
            redirect={() => checkUser ? goToPage("home") : alert("Silahkan login dulu")}>
                Home                
            </Menu>
        )
    }

    onCheckLogout = () => {
        const { checkUser,goToPage, userLogout } = this.props

        if (checkUser) 
            return (
                <>
                    <Menu redirect={()=> userLogout()}>Logout</Menu>
                    <Menu isActivePage={this.checkActivePage("edit")} redirect={() => goToPage("edit")}>Form</Menu>
                </>
            )
        return (
            <>
                <Menu isActivePage={this.checkActivePage("Login")} redirect={() => goToPage("Login")}>Login</Menu>
                <Menu isActivePage={this.checkActivePage("register")} redirect={() => goToPage("register")}>Register</Menu>
            </>
        )
    }

    render() {
        // const { goToPage } = this.props
        return (
            <div className="navbar">
                {/* <Menu 
                isActivePage={this.checkActivePage("home")} 
                redirect={() => goToPage("home")}>
                    Home
                </Menu> */}
                {this.onCheckLogin()}
                {this.onCheckLogout()}
                {/* <Menu isActivePage={this.checkActivePage("Login")} redirect={() => goToPage("Login")}>Login</Menu> */}
                {/* <Menu isActivePage={this.checkActivePage("register")} redirect={() => goToPage("register")}>Register</Menu> */}
            </div>
        )
    }
}
