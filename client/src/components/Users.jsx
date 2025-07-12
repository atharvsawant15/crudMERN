import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
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
            </tr>
          </thead>
          <tbody>
            {
              users.map((users) => {
                return <tr>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.age}</td>
                  <td>
                    <Link to={`/update/${users._id}`} className='btn btn-success'>Edit</Link>
                    <button className='btn btn-danger' onClick={(e) => handleDelete(users._id)}>Delete</button>
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
