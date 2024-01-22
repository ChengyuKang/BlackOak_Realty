import React, { useEffect, useRef, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export default function PropertySearchForm({ submitFilter }) {
  const typeRef = useRef()
  const priceMaxRef = useRef()
  const priceMinRef = useRef()
  const bedroomRef = useRef()
  const bathroomRef = useRef()
  const gardenRef = useRef()
  const statusRef = useRef()

  function doSearch() {
    submitFilter(
      {
        type: typeRef.current.value,
        price_min: priceMinRef.current.value,
        price_max: priceMaxRef.current.value,
        bedroom: bedroomRef.current.value,
        bathroom: bathroomRef.current.value,
        garden: gardenRef.current.value,
        status: statusRef.current.checked ? "FOR SALE" : "SOLD"
      }
    )
  }

  function doClear() {
    typeRef.current.value = "Any"
    priceMinRef.current.value = Number.MIN_VALUE
    priceMaxRef.current.value = Number.MAX_VALUE
    bedroomRef.current.value = 0
    bathroomRef.current.value = 0
    gardenRef.current.value = 0
    statusRef.current.checked = false
  }

  return (

    // ...

    <div>
      <section>
        <Form>
          <Row>


            <Col>
              <div>Type</div>
              <Form.Select ref={typeRef} aria-label="Property Type">
                <option value="Any">Any</option>
                <option value="SEMI">Semi</option>
                <option value="DETACHED">Detached</option>
                <option value="APARTMENT">Apartment</option>
              </Form.Select>
            </Col>

            <Col>
              <div>Min Price</div>
              <Form.Select ref={priceMinRef} aria-label="Minimum Price">
                <option value="0">0</option>
                <option value="50000">50,000 £</option>
                <option value="100000">100,000 £</option>
                <option value="200000">200,000 £</option>
                <option value="300000">300,000 £</option>
                <option value="400000">400,000 £</option>
                <option value="500000">500,000 £</option>
              </Form.Select>
            </Col>

            <Col>
              <div>Max Price</div>
              <Form.Select ref={priceMaxRef} aria-label="Maximum Price">
                <option value={Number.MAX_VALUE}>MAX PRICE</option>
                <option value="50000">50,000 £</option>
                <option value="100000">100,000 £</option>
                <option value="200000">200,000 £</option>
                <option value="300000">300,000 £</option>
                <option value="400000">400,000 £</option>
                <option value="500000">500,000 £</option>
              </Form.Select>
            </Col>

            <Col>
              <div>Bedrooms</div>
              <Form.Select ref={bedroomRef} aria-label="Number of Bedrooms">
                <option value="0">Any</option>
                <option value="1">minimum 1</option>
                <option value="2">minimum 2</option>
                <option value="3">minimum 3</option>
                <option value="4">minimum 4</option>
                <option value="5">5 and more</option>
              </Form.Select>
            </Col>

            <Col>
              <div>Bathrooms</div>
              <Form.Select ref={bathroomRef} aria-label="Number of Bathrooms">
                <option value="0">Any</option>
                <option value="1">minimum 1</option>
                <option value="2">minimum 2</option>
                <option value="3">3+</option>
              </Form.Select>
            </Col>

            <Col>
              <div>Garden</div>
              <Form.Select ref={gardenRef} aria-label="Garden">
                <option value="0">Any</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Form.Select><br />
            </Col>


          </Row>
          <Row>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="For sale only"
                ref={statusRef}
              />
            </Col>
            <Col>
              <div className="mb-2 float-sm-end">
                <Button variant="primary" size="lg" onClick={doSearch}>
                  Search
                </Button>{' '}
                <Button variant="secondary" size="lg" onClick={doClear}>
                  Clear
                </Button>

              </div>
            </Col>
          </Row>


        </Form>
      </section>



    </div>

  )
}
