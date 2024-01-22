import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

export default function AddSellerForm({ refreshSellers }) {
  const firstnameRef = useRef()
  const surnameRef = useRef()
  const addressRef = useRef()
  const postcodeRef = useRef()
  const phoneRef = useRef()
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      handleAddSeller()

    }
    setValidated(true)
  };



  
  async function handleAddSeller() {
    
    try {
      const response = await fetch(`http://localhost:3000/seller`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstnameRef.current.value,
          surname: surnameRef.current.value,
          address: addressRef.current.value,
          postcode: postcodeRef.current.value,
          phone: phoneRef.current.value,
        })
      })
      if (response.ok) {
        alert("Seller added successfully")
        refreshSellers()
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <div>
      {/* <section id='addSeller'>
        First Name:<input type='text' ref={firstnameRef}></input><br />
        Surname:<input type='text' ref={surnameRef}></input><br />
        Address:<input type='text' ref={addressRef}></input><br />
        Postcode:<input type='text' ref={postcodeRef}></input><br />
        Phone:<input type='text' ref={phoneRef}></input><br />
        <input type='button' value="submit" onClick={handleAddSeller} />
      </section> */}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            ref={firstnameRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            ref={surnameRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
              ref={phoneRef}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" ref={addressRef} required />
          <Form.Control.Feedback type="invalid">
            Please enter the Address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Post Code</Form.Label>
          <Form.Control type="text" placeholder="Post Code" ref={postcodeRef} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Post Code.
          </Form.Control.Feedback>
        </Form.Group>
    
      </Row>
      <Button type="submit" className='float-end'>Add seller</Button>
    </Form>
    </div>


  )
}
