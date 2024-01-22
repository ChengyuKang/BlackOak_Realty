import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'

export default function AddPropertyForm(props) {
  const propertyURL = "http://localhost:3000/property"
  const addressRef = useRef()
  const postcodeRef = useRef()
  const typeRef = useRef()
  const priceRef = useRef()
  const bedroomRef = useRef()
  const bathroomRef = useRef()
  const gardenRef = useRef()
  const urlRef = useRef()
  const refresh = props.refresh
  const seller = props.seller

  async function handleAddProperty() {
    try {
      const response = await fetch(propertyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: addressRef.current.value,
          postcode: postcodeRef.current.value,
          type: typeRef.current.value,
          price: priceRef.current.value,
          bedroom: bedroomRef.current.value,
          bathroom: bathroomRef.current.value,
          garden: gardenRef.current.value,
          sellerId: seller.id,
          status: "FOR SALE",
          buyerId: null,
          img: urlRef.current.value
        })
      })
      if (response.ok) {
        alert("property added successfully")
        refresh()
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

      <Row className="mb-3">
        <Col>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            ref={addressRef}
          />
        </Col>
        <Col>
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postcode"
            ref={postcodeRef}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Property Type</Form.Label>
          <Form.Select aria-label="Select Property Type" ref={typeRef}>
            <option value="SEMI">SEMI</option>
            <option value="APARTMENT">APARTMENT</option>
            <option value="DETACHED">DETACHED</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Number of Bedrooms</Form.Label>
          <Form.Select aria-label="Select Number of Bedrooms" ref={bedroomRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Number of Bathrooms</Form.Label>
          <Form.Select aria-label="Select Number of Bathrooms" ref={bathroomRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Garden Availability</Form.Label>
          <Form.Select aria-label="Select Garden Availability" ref={gardenRef}>
            <option value="1">YES</option>
            <option value="0">NO</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            step={10000}
            ref={priceRef}
          />
        </Col>
        <Col>
          <Form.Label>Image Ref</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add an image"
            ref={urlRef}
          />
        </Col>
      </Row>

      <Row className="mb-3">
       
        <Col>
          <Button type="submit" onClick={handleAddProperty} className="float-end">
            Add property
          </Button>
        </Col>
      </Row>

    </div>
  )
}
