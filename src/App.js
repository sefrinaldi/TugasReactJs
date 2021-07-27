import './App.css';
import React, { Component } from 'react';
// import { Register, Login } from './pages';
import { Body, Navbar } from './templates'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage : "login"
    }
  }

  changePage = page => {
    console.log("in App", page)
    this.setState ({
      currentPage : page
    })
  }

  render() {
    return (
      <>
        <Navbar page={this.state.currentPage} goToPage={this.changePage} />
        <Body page={this.state.currentPage} goToPage={this.changePage}/>
        <br/>
               
      </>
    );
  }
}

export default App;
