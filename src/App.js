import './App.css';
import React, { Component } from 'react';
// import { Register, Login } from './pages';
import { Body, Navbar } from './templates'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "login",
      userLogin: {
        id: "",
        fullname: "",
        username: "",
        password: "",
        address: "",
        loginStatus: false
      }
    }
  }

  changePage = page => {
    console.log("in App", page)
    this.setState({
      currentPage: page
    })
  }

  checkUserLogin = data => {
    this.setState({
      userLogin: data
    })
  }

  updateLogin = data => {
    this.setState({
      userLogin: {
        id: data.id,
        fullname: data.fullname,
        username: data.username,
        password: data.password,
        address: data.address,
        loginStatus: true
      }
    })    
  }

  userLogout = () => {
    this.setState({
      currentPage: "login",
      userLogin : {
        id: "",
        fullname: "",
        username: "",
        password: "",
        address: "",
        loginStatus: false
      }
    })
    alert("Logout berhasil")
  }

  render() {
    console.log("data app", this.state.userLogin);
    return (
      <>
        <Navbar
          userLogout={this.userLogout}
          page={this.state.currentPage}
          goToPage={this.changePage}
          checkUser={this.state.userLogin.loginStatus}
        />
        <Body
          page={this.state.currentPage}
          goToPage={this.changePage}
          updateLogin={this.updateLogin}
        />
        <br />

      </>
    );
  }
}

export default App;
