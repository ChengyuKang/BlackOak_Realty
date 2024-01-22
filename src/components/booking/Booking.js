import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import BookingForm from './BookingForm'
import { Card,Row,Col } from 'react-bootstrap'

export default function Booking() {
  const { propertyId } = useParams()
  const { state } = useLocation()
  const { p } = state || {}


  console.log(p)
  // alert(property)

  return (
    <div>
      
      <h2>Booking</h2>

      <Card>
  <Card.Body>
    <Row>
      <Col xs={12} md={6}>
        {/* Image on the left */}
        <Card.Img src={p.img} alt="Property Image" />
      </Col>
      <Col xs={12} md={6}>
        {/* Title on top */}
        <Card.Title>Booking Details for Property ID: {p.id}</Card.Title>
        {/* Two pieces of information in a row */}
        <Row>
          <Col xs={6}>
            <Card.Text>Address: {p.address}</Card.Text>
            <Card.Text>Postcode: {p.postcode}</Card.Text>
            <Card.Text>Type: {p.type}</Card.Text>
            <Card.Text>Bathroom: {p.bathroom}</Card.Text>
          </Col>
          <Col xs={6}>
            <Card.Text>Bedroom: {p.bedroom}</Card.Text>
            <Card.Text>Garden: {p.garden}</Card.Text>
            <Card.Text>Price: {p.price}</Card.Text>
            <Card.Text>Status: {p.status}</Card.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card.Body>
</Card>




      <BookingForm />


    </div>
  )
}
