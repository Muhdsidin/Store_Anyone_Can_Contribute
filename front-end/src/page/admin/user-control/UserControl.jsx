import React, { useEffect, useState } from 'react'
import { Axios } from '../../../utils/Inherits'
import "./UserControl.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserControl() {
    const [user, setUser] = useState([])
    const FetchUserList = async()=>{
        const response = await Axios("/user/get-user")
        setUser(response.data)
        console.log(response.data)
    }
     useEffect(()=>{
        FetchUserList()
     },[])

     const deleteUser = async(userId)=>{
        console.log(userId)
        const response = await Axios("/user/delete-user",{
            method:"DELETE",
            data:{
                userId
            }
        })
        console.log(response.data)
        const deletedUser = response.data;
        setUser(deletedUser)
     }
    
    return (
    <div>
       <h4><Link to="/admin/user-control/add-user"><Button className='btn btn-dark m-3'>Add User</Button></Link></h4>
       
      <table>
  <tr>
    <th>User Name</th>
    <th>Mobile</th>
    <th>Email</th>
    <th>Adress</th>
  </tr>
    {user.map((val)=>(
    
            <tr key={val._id}>
         <td>{val.username}</td>
         <td>{val.Mobile}</td>
         <td>{val.Email}</td>
         <td>{val.address}</td>
         <td><Button className='btn btn-danger' onClick={()=> deleteUser(val._id)}>Delete</Button></td>
  </tr>
    ))}
   

</table>

    </div>
  )
}

export default UserControl
