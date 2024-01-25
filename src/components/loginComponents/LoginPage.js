import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate   } from "react-router-dom"; 
import LandingPage from '../LandingPage';

export default function LoginPage() {
const [users, setusers] = useState([]) 
let usernameRef = useRef();
let passwordRef = useRef();
const navigate = useNavigate();

const usercheck = (event) =>{   
  let authenticated = false;
  users.forEach(user => {
    //console.log(user.username + user.password)
    if(user.username === usernameRef.current.value)
    {
      if(user.password === passwordRef.current.value)
      {
        alert("Login successful");
        authenticated = true;
        navigate('/seller')
      }
    }
  });
  if(authenticated === false)
  {
    let errormsg = document.getElementById('mauthorised')
    errormsg.style.display = "flex";
    event.preventDefault();
  }
}

function fetchUsers() {
  fetch("http://localhost:3000/user").then(response => response.json()).then(response =>setusers(response))
}

useEffect(()=>fetchUsers(),[])

  return (
    <Form onSubmit={usercheck}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" ref={usernameRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" ref={passwordRef} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Stay signed in" />
      </Form.Group>
      <Button variant="primary" type="sumbit" >
        Submit
      </Button>
      <Form.Group>
      <Form.Label className='text-danger' id = "mauthorised" style = {{ display: "none" }}> Login Unsucessful Invalid User</Form.Label>
      </Form.Group>
    </Form>
  );
}

