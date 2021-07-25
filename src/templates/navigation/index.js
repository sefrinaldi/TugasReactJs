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

    render() {
        const { goToPage } = this.props
        return (
            <div className="navbar">
                <Menu isActivePage={this.checkActivePage("home")} redirect={() => goToPage("home")}>Home</Menu>
                <Menu isActivePage={this.checkActivePage("Login")} redirect={() => goToPage("Login")}>Login</Menu>
                <Menu isActivePage={this.checkActivePage("register")} redirect={() => goToPage("register")}>Register</Menu>
            </div>
        )
    }
}
