import React, { useState, useEffect } from 'react'
import PropertySearchForm from './PropertySearchForm'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import '../hover.css'


export default function Property() {
  const propertyURL = "http://localhost:3000/property"
  const [properties, setProperties] = useState([])
  const [propertiesAll, setAllProperties] = useState([])
  const [propertyDetail, setpropertyDetail] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (property) => {
    setpropertyDetail(property);
    setShow(true);
  }

  useEffect(() => {
    fetchProperties()
  }, [])


  async function fetchProperties() {
    try {
      // await fetch(propertyURL).then(response=>response.json()).then(data=>setProperties(data))
      const data = await fetch(propertyURL).then(response => response.json())
      setProperties(data)
      setAllProperties(data)
    }
    catch (error) {
      console.error("Error fetching properties")
    }
  }

  function filterProperties(filterParams) {
    setProperties(propertiesAll.filter(p => (
      (filterParams.type === "Any" || p.type == filterParams.type) &&
      (p.price >= Number(filterParams.price_min)) &&
      (p.price <= Number(filterParams.price_max)) &&
      (p.bedroom >= Number(filterParams.bedroom)) &&
      (p.bathroom >= Number(filterParams.bathroom)) &&
      (p.garden >= Number(filterParams.garden)) &&
      (p.status.length >= filterParams.status.length)
    )
    ))
    console.log(filterParams.type)
    console.log(propertiesAll)


  }

  return (
    <div>
      <PropertySearchForm submitFilter={filterProperties} />

      <Container>
        <Row>
          <Col className='h5 bg-warning text-center'>{properties.length} properties found</Col>
        </Row>
      </Container>

      <div className="row">
        {properties.map((p) => (
          <div className="col-md-6 mb-3 " key={p.id}>
            <Card className="mx-auto my-3">
              <div className="row g-0 m-auto">
                <div className="col-md-5">
                  <div className="zoom">
                    <Card.Img src={p.img} style={{ maxHeight:"600px", height:"100%", width:"100%"}} alt="Property Image" />
                  </div>
                </div>
                <div className="col-md-7">
                  <Card.Body>
                    <Card.Header className='bg-primary text-white fw-bold'>{p.type}</Card.Header>
                    <Card.Title>{p.address}</Card.Title>
                    <Card.Text>
                      {`Price: ${p.price}, Bedrooms: ${p.bedroom}, Bathrooms: ${p.bathroom}`}<br/>
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                      {`${p.status}`}
                    </Card.Text>
                    <Button variant="warning" className='float-end'>
                      <Link to={`/property/${p.id}/booking`} state={{ p }} className='text-dark text-decoration-none'>Manage booking</Link>
                    </Button>
                    <Button variant="primary" onClick={()=>handleShow(p)} >
                      View details
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <>


        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Property Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {propertyDetail && (
            <>
              <p>{`Type: ${propertyDetail.type}`}</p>
              <p>{`Address: ${propertyDetail.address}`}</p>
              <p>{`Price: ${propertyDetail.price}`}</p>
              <p>{`Bedrooms: ${propertyDetail.bedroom}`}</p>
              <p>{`Bathrooms: ${propertyDetail.bathroom}`}</p>
              <p>{`Description: ${propertyDetail.description}`}</p>
              {/* Add more details as needed */}
            </>
          )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>

      <br />
    </div>
  )
}
