import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate   } from "react-router-dom"; 
export default function SignupPage() {
const navigate = useNavigate();
const [users, setusers] = useState([]) 

let usernameRef = useRef();
let passwordRef = useRef();
let passwordCheckRef = useRef();
let emailRef = useRef();

const [userFlag, setUserFlag] = useState(true);
let passwordMatch = false;
let userExists = false;

function usercheck()
{
  users.forEach(user => {
    console.log(user.username + user.password)
    if(user.username === usernameRef.current.value)
    {
       setUserFlag(false);
       userExists = true;
       console.log("user exists: " + userFlag);
    }
    // else{
    //   //setUserFlag(true);
    //   userExists = false;
    // }
    
  });

  if(userExists === true) //userFlag === false)
  {
    alert("User already exists");
       emailRef.current.value = "";
       usernameRef.current.value = "";
       passwordRef.current.value = "";
       passwordCheckRef.current.value = "";
  }
}

function passwordMatchFunc() {
  if(passwordRef.current.value === passwordCheckRef.current.value){
    passwordMatch = true;
  }
  else{
    alert("Password doesn't match");
    passwordRef.current.value = "";
    passwordCheckRef.current.value = "";
  }
}

function fetchUsers() {
  fetch("http://localhost:3000/user").then(response => response.json()).then(response =>setusers(response))
}

useEffect(()=>fetchUsers(),[])

function handleSubmit(){
  usercheck();  //checks if the user exists
  passwordMatchFunc();  //checks if the password matches

  let newUser = {
    username: usernameRef.current.value,
    password: passwordRef.current.value
  }

  if(userExists === false && passwordMatch === true){
    //fetchUsers();
    fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        .then(() => alert("User Added")).then(() => {navigate("/login")})  
  }
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" ref={emailRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" ref={usernameRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" ref={passwordCheckRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="*I agree to terms and conditions" required/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

