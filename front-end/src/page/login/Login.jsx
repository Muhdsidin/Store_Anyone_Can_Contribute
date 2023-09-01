import React from 'react'
import  { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Axios } from '../../utils/Inherits';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap/";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };
    const response = await Axios("/user/login",{
      method:"POST",
      data:formData
    })

    console.log(response.data)

    setEmail('');
    setPassword('');
    localStorage.setItem("token", response.data.Token)
    navigate("/")
  };
  return (

    <>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <span><Link to="/signup" className='btn btn-dark'>Signup</Link></span>
    </Form>
  </Row>
  <br />
 </Container>
    </>
  )
}

export default Login
