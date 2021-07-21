import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <table width="80%" border="1" cellpadding="5px">
          <thead>
            <tr>
              <th width="30px">No</th>
              <th>Title</th>
              <th>Nama Album</th>
              <th>User</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Title</td>
              <td>Album</td>
              <td>User</td>
              <td>
                <img src="https://via.placeholder.com/150/92c952"></img>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Title2</td>
              <td>Album2</td>
              <td>User2</td>
              <td>
                <img src="https://via.placeholder.com/150/771796"></img>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <span>Prev</span>
          <span>1</span>
          <span>2</span>
          <span className="active">3</span>
          <span>4</span>
          <span>5</span>
          <span>Next</span>
        </div>
       
        <div class="modal">
          <span class="close" onclick='modalClose()'>&times;</span>
          <img class="modalImg" />
        </div>
      </>
    );
  }
}

export default App;
