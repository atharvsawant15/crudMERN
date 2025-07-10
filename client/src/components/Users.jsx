import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([{
    Name: "Atharv", Email: "atharv@gamil.com", Age: 20
  }])
  return (
    <div className='d-flex bg-primary justify-content-center algin-items-center py-5'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((users) => {
                return <tr>
                  <td>{users.Name}</td>
                  <td>{users.Email}</td>
                  <td>{users.Age}</td>
                  <td>
                    <Link to="/update" className='btn btn-success'>Edit</Link>
                    <button>Delete</button>
                  </td>
                </tr>
              })
            }


          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((users) => {
                return <tr>
                  <td>{users.Name}</td>
                  <td>{users.Email}</td>
                  <td>{users.Age}</td>
                  <td>
                    <Link to="/update" className='btn btn-success'>Edit</Link>
                    <button>Delete</button>
                  </td>
                </tr>
              })
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
