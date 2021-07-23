import './App.css';
import Login from './Login.js'
import React, { Component } from 'react';
import Table from './Table';
import DataTable from './DataTable';

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <br/>
        <Table />
        <DataTable />
      </>
    );
  }
}

export default App;
