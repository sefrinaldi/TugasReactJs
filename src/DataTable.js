import React, { Component } from 'react'

export default class DataTable extends Component {
    // getUsers = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(json => {
    //             users = json.map(user => {
    //                 return {
    //                     userId: user.id,
    //                     username: user.name
    //                 }
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //         .then(
    //             setTimeout(() => {
    //                 console.log(photoUsers);
    //             }, 2000)
    //         )
    //         .then(
    //             setTimeout(() => {
    //                 generateTable()
    //             }, 2000)
    //         )
    // }

    // generateTable = (data = newDatas) => {
    //     let tbody = document.querySelector("table > tbody")
    //     let rows = ""

    //     let startIndex = (pageConfig.currentPage - 1) * pageConfig.showData
    //     let endIndex = startIndex + pageConfig.showData

    //     // console.log(`${startIndex} dan ${endIndex}`);

    //     for (let i = startIndex; i < endIndex && i < data.length; i++) {
    //         const user = data[i];

    //         rows += `
    //         <tr>
    //           <td align = "center">${user.id}</td>
    //           <td>${user.photoName}</td>
    //           <td>${user.albumName}</td>
    //           <td>${user.username}</td>
    //           <td>        
    //             <img src="${user.thumbnail}" onclick="imgView('${user.url}')" alt="Forest"/>
    //           </td>
    //         </tr>
    //       `
    //     }

    //     tbody.innerHTML = rows
    //     generatePagination(newDatas)
    // }

    render() {
        console.log("isi data");
        return (
            <div>

            </div>
        )
    }
}
