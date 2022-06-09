import React from 'react'

import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function FormData() {
  const navigate = useNavigate();
  const [firstname,setFirstName] = useState('')
  const [last,setLast] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [password,setPassword] = useState('')

  const handleClick = ()=>{    
    const UserData = {
      firstname,
      last,
      email,
      address,
      password
    }
    navigate('/')
      console.log(UserData);
  }
  return (
    
        <div className="App">
      <Container>
    <Form style={{width:'40rem',marginLeft:'15rem'}} className="mt-5" >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="first name" placeholder="Enter first name" onChange={(e)=>setFirstName(e.target.value)} />    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="lastname" placeholder="lastname"onChange={(e)=>setLast(e.target.value)} />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
  </Button>
</Form>
</Container>
    </div>
  )
}

export default FormData