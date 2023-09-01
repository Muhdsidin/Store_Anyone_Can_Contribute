import React from 'react'
import { Link } from 'react-router-dom'
import  { useState } from 'react'
import {Button} from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap/";
import { useNavigate } from "react-router-dom"
import { Axios } from '../../../utils/Inherits';

function Adduser() {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = {
          email,
          password,
          username,
          mobile,
          address,
          isChecked,
        };
        const response = await Axios("/user/admin-add-user",{
          method:"POST",
          data:formData
        })
  
        console.log(response.data)
  
        setEmail('');
        setPassword('');
        setUsername('');
        setMobile('');
        setAddress('');
        setIsChecked(false);
        
      };
    
  return (
    <div>
      <Container className="mt-5">
      <Row className="mt-3">

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Text className="text-muted">
          Pincode / street address / nearby / state / country
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Add User
      </Button>
    </Form>
  </Row>
  <br />
 </Container>
    </div>
  )
}

export default Adduser
