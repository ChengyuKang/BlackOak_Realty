import React, { useEffect, useState } from 'react'
import AddBuyerForm from './AddBuyerForm'
import PopupWindow from '../PopupWindow'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

export default function Buyer() {
  const [buyers, setBuyers] = useState([])
  const buyerURL = "http://localhost:3000/buyer"

  function fetchBuyers() {
    fetch(buyerURL).then(response => response.json()).then(data => setBuyers(data))
  }

  useEffect(() => (fetchBuyers), [])

  function handleDelete(deleteId) {
    fetch(`http://localhost:3000/buyer/${deleteId}`, {
      method: "DELETE"
    }).then(response => {

      if (response.ok) {
        alert("deleted!")
        setBuyers(buyers.filter(b => b.id !== deleteId))
      }
    })
  }

  function handleEdit() {

  }

  return (
    <div>
      <h2>Buyers</h2>

      <Accordion >
        <Accordion.Item eventKey="0" >
          <Accordion.Header className='panel-heading'>Add buyer</Accordion.Header>
          <Accordion.Body>
            <AddBuyerForm refreshBuyers={fetchBuyers} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Table striped bordered hover className="fl-table">
        <thead>
          <tr>
          <th>ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Phone Number</th>
            <th>Post Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.firstName}</td>
              <td>{b.surname}</td>
              <td>{b.phone}</td>
              <td>{b.postcode}</td>
              
              <td>
                {/* <input type='button' value="delete" onClick={() => handleDelete(b.id)} /> */}
                {/* <input type='button' value="edit" onClick={() => handleEdit(p.id)} /> */}
                <Button variant="warning" className='m-1'>
                  <Link onClick={() => handleEdit(b.id)} className='text-dark text-decoration-none'>Edit</Link>
                </Button>
                <Button variant="danger" className='m-1'>
                  <Link onClick={() => handleDelete(b.id)} className='text-dark text-decoration-none'>Delete</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <PopupWindow /> */}

    </div>
  )
}
