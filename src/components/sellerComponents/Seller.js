import React, { useEffect, useRef, useState } from 'react'
import AddSellerForm from './AddSellerForm'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
// import './sellerTable.css'
import './accordian.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Seller() {
  const sellerURL = "http://localhost:3000/seller"
  const [seller, setSellers] = useState([])
  const [editingSellerId, setEditingSellerId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');





  function fetchSellerData() {
    fetch(sellerURL).
      then(response => response.json()).then(data => setSellers(data))
  }

  useEffect(() => { fetchSellerData() }, [])


  function handleDelete(deleteId) {
    fetch(`http://localhost:3000/seller/${deleteId}`, {
      method: "DELETE"
    }).then(response => {

      if (response.ok) {
        alert("deleted!")
        setSellers((prevSellers) => prevSellers.filter((seller) => seller.id !== deleteId))
      }
    })
  }

  const handleEdit = sellerId => {
    setEditingSellerId(sellerId);
    const sellerToEdit = seller.find(seller => seller.id === sellerId);
    setEditedTitle(seller.title);
  }

  return (
    <div>
      
      <h2>Sellers</h2>

      <Accordion >
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='panel-heading'>Add Seller</Accordion.Header>
        <Accordion.Body>
      <AddSellerForm refreshSellers={fetchSellerData} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      <Table striped bordered hover className="fl-table">
        <thead>
          <tr>
          <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Post Code</th>
          </tr>
        </thead>
        <tbody>
          {seller.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.firstName}</td>
              <td>{s.surname}</td>
              <td>{s.phone}</td>
              <td>{s.postcode}</td>
              <td>
                <Button variant="warning" className='m-1 '>
                  <Link onClick={() => handleEdit(s.id)} state={{ s }} className='text-dark text-decoration-none'>Edit</Link>
                </Button>
                <Button variant="danger" className=' m-1'>
                  <Link onClick={() => handleDelete(s.id)} state={{ s }} className='text-dark text-decoration-none'>Delete</Link>
                </Button>
                <Button variant="info" className='m-1' >
                  <Link to={`/seller/${s.id}/property`} state={{ s }} className='text-dark text-decoration-none'>Manage Property</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
    </div>
  )

}
