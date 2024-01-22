import React, { useState, useEffect, useRef } from 'react'
import AddPropertyForm from './AddPropertyForm'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table';
import { Accordion } from 'react-bootstrap'

export default function SellerProperty() {
  const propertyURL = "http://localhost:3000/property"
  const [properties, setProperties] = useState([])
  const [propertiesAll, setAllProperties] = useState([])
  const [buyers, setBuyers] = useState([])
  const buyerURL = "http://localhost:3000/buyer"
  const [show, setShow] = useState(false);
  const [selectedBuyer, setSelectedBuyer] = useState({})
  const [tempPropertyId,setTempPropertyId] = useState("")
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function fetchBuyers() {
    fetch(buyerURL).then(response => response.json()).then(data => setBuyers(data))
  }

  useEffect(() => (fetchBuyers), [])

  const { state } = useLocation()
  const { s } = state || {}

  useEffect(() => {
    fetchProperties()
  }, [])



  async function fetchProperties() {
    try {
      // await fetch(propertyURL).then(response=>response.json()).then(data=>setProperties(data))
      const data = await fetch(propertyURL).then(response => response.json())
      setAllProperties(data)
      setProperties(
        data.filter(d => (d.sellerId == s.id))
      )
    }
    catch (error) {
      console.error("Error fetching properties")
    }
  }


  function handleChangeToSold(p) {
    handleShow()
    console.log(p)
    setTempPropertyId(p)
    console.log("tempPropertyId:"+tempPropertyId)
    
  }



  async function handleSetBuyer() {
    try {
      if (selectedBuyer) {
        const updateProperty = {
          status: "SOLD",
          buyerId: selectedBuyer.id,
        }

        const response = await fetch(`http://localhost:3000/property/${tempPropertyId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateProperty),
        })

        if (response.ok) {
          // Update the state with the modified properties
          fetchProperties()
        } else {
          console.error('Failed to update property');
        }
      }
      else {
        alert("selet buyer first")
      }

    } catch (error) {
      console.error('Error updating property', error);
    }
    // Close the modal
    handleClose();
  }

  function handleCheckboxChange(b) {
    setSelectedBuyer(b)
  }


  return (
    <div>
      <h2>Manage properties for {s.firstName} {s.surname}</h2>

      <Accordion >
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='panel-heading'>Add property</Accordion.Header>
        <Accordion.Body>
        <AddPropertyForm refresh={fetchProperties} seller={s} />
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>address</th>
            <th>postcode</th>
            <th>price</th>
            <th>type</th>
            <th>bedroom</th>
            <th>bathroom</th>
            <th>status</th>
            <th>garden</th>
            <th>buyerId</th>
            <th>sellerId</th>
            <th>status</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              {/* <td><img src='https://images.pexels.com/photos/19384411/pexels-photo-19384411/free-photo-of-early-sunrise-at-mesa-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='w-50' /></td> */}
              <td className='text-primary'>{p.address}</td>
              <td>{p.postcode}</td>
              <td>{p.price}</td>
              <td>{p.type}</td>
              <td>{p.bedroom}</td>
              <td>{p.bathroom}</td>
              <td>{p.status}</td>
              <td>{p.garden}</td>
              <td>{p.buyerId}</td>
              <td>{p.sellerId}</td>
              <td>{p.status}</td>
              <td>{p.id}</td>
              <td>
              <Button variant="warning" className='float-end'>
                      <Link to={`/property/${p.id}/booking`} state={{ p }} className='text-dark text-decoration-none'>Manage booking</Link>
                    </Button>
              </td>
              <td><Button variant="primary" onClick={()=>handleChangeToSold(p.id)}>
                change to sold
              </Button> </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please select a buyer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {buyers.map((b) => (
              <tr>
                <td><input
                  type="checkbox"
                  checked={selectedBuyer == b}
                  onChange={() => handleCheckboxChange(b)}
                /></td>
                <td>{b.id}</td>
                <td>{b.firstName}</td>
                <td>{b.surname}</td>
                <td>{b.id}</td>
              </tr>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSetBuyer()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>


    </div>
  )
}
