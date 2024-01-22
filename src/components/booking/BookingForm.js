import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useLocation } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import { Table } from 'react-bootstrap'

export default function BookingForm() {
    const { state } = useLocation()
    const { p } = state || {}
    const buyerURL = "http://localhost:3000/buyer"
    const [buyer, setBuyers] = useState([])
    const bookingURL = "http://localhost:3000/booking"
    const [bookings, setBookings] = useState([])
    const buyerRef = useRef()
    const dateRef = useRef()
    const slotRef = useRef()
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    function fetchBuyers() {
        fetch(buyerURL).then(response => response.json()).then(data => setBuyers(data))
    }

    useEffect(() => (fetchBuyers), [])

    function fetchBookings() {
        fetch(bookingURL).then(response => response.json()).then(data => setBookings(data))
    }

    useEffect(() => (fetchBookings), [])

    async function handleOnBook() {
        try {
            const response = await fetch(`http://localhost:3000/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // buyerId: buyerRef.current.value.id,
                    propertyId: p.id,
                    propertyAddress: p.address,
                    date: selectedDate.toISOString().substring(0, 10),
                    time: slotRef.current.value,
                    buyerName: buyerRef.current.value,
                })
            })
            if (response.ok) {
                alert("Slot booked successfully")
                refreshSlots()
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

    function refreshSlots() {
        fetch(bookingURL).then(response => response.json()).then(data => setBookings(data))
    }

    function handleDelete(deleteId) {
        fetch(`http://localhost:3000/booking/${deleteId}`, {
            method: "DELETE"
        }).then(response => {

            if (response.ok) {
                // alert("Slot cancelled!")
                refreshSlots()
            }
        })
    }


    return (
        <div>

            <Accordion >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header className='panel-heading'>Booking slot</Accordion.Header>
                    <Accordion.Body>



                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Date</Form.Label>
                                <DatePicker ref={dateRef} defaultValue={new Date()} selected={selectedDate} onChange={handleDateChange} required />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Slot</Form.Label>
                                <Form.Select ref={slotRef} defaultValue="09:00">
                                    <option value="09:00 AM-10:00 AM">09:00 AM-10:00 AM</option>
                                    <option value="10:00 AM-11:00 AM">10:00 AM-11:00 AM</option>
                                    <option value="11:00 AM-12:00 PM">11:00 AM-12:00 PM</option>
                                    <option value="12:00 PM-01:00 PM">12:00 PM-01:00 PM</option>
                                    <option value="01:00 PM-02:00 PM">01:00 PM-02:00 PM</option>
                                    <option value="02:00 PM-03:00 PM">02:00 PM-03:00 PM</option>
                                    <option value="03:00 PM-04:00 PM">03:00 PM-04:00 PM</option>
                                    <option value="04:00 PM-05:00 PM">04:00 PM-05:00 PM</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Buyer</Form.Label>
                                <Form.Select ref={buyerRef} name="Buyer">
                                    {/* <option value="" disabled>Select a buyer</option> */}
                                    {buyer.map((b) => (
                                        <option value={b.firstName + ' ' + b.surname}>{b.firstName + ' ' + b.surname}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Button type="button" onClick={handleOnBook} className='float-end'>
                                    Book slot
                                </Button>
                            </Col>
                        </Row>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table className="fl-table">
                <thead>
                    <tr>
                        <th>Property ID</th>
                        <th>Property Address</th>
                        <th>Buyer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.propertyId}</td>
                            <td>{booking.propertyAddress}</td>
                            <td>{booking.buyerName}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>
                                {/* <input type='button' value="delete"  /> */}
                                <Button variant="secondary" size="lg" onClick={() => handleDelete(booking.id)}>
                                    Cancel
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
