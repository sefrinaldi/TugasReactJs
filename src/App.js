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
        jabatan: "",
        address: "",
        gaji: "",
        loginStatus: false
      }
    }
  }

  changePage = page => {
    // console.log("in App", page)
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
        jabatan: data.jabatan,
        address: data.address,
        gaji: data.gaji,
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
        jabatan: "",
        address: "",
        gaji: "",
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
          checkUser={this.state.userLogin}          
        />
        <Body
          idLog={this.state.userLogin.id}
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
