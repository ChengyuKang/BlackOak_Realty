import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Property from './propertyComponent/Property'
import LandingPage from './LandingPage'
import Booking from './booking/Booking'
import Seller from './sellerComponents/Seller'
import SellerProperty from './sellerComponents/SellerProperty'
import Buyer from './buyerComponents/Buyer'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import CarouselFade from './CarouselFade'
import Footer from './Footer'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'

export default function AppRouter() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://png2.cleanpng.com/sh/28b7f1a0449cae53297302077e9d6b07/L0KzQYm3V8ExN5N7R91yc4Pzfri0gvxia5wyh9N0LYfsfra0gBFjbaNzfeY2c3H4hrrujv9vNaV3fdc2bHBqf377iPlzfKoyh9DuLXzyd7E0lQJidqR1eeRuboSwRbO7VcI3bWFpfdNuNUmxRYiBVsc2Pmc2TaU6MkW7RYq5WcEzOV91htk=/kisspng-black-oak-wine-cabernet-sauvignon-tree-logo-thirty-one-logo-transparent-5b4526e0deae59.5786756615312585929121.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Black Oak Realty
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/property' className='fw-bold'>Property</Nav.Link>
            <Nav.Link href='/seller' className='fw-bold'>Seller</Nav.Link>
            <Nav.Link href='/buyer' className='fw-bold'>Buyer</Nav.Link>
            
          
          </Nav>
          <Button variant="outline-dark" className='float-end'>LOGIN</Button>
        </Container>
      </Navbar>


      {/* <nav>
        <ul>
          <li><Link to={}>Property</Link></li>
          <li><Link to={}>Seller</Link></li>
          <li><Link to={}>Buyer</Link></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<CarouselFade />} />
        </Route>
        <Route path='/property' element={<Property />} />
        <Route path='/property/:propertyId/booking' element={<Booking />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/seller/:sellerId/property' element={<SellerProperty />} />
        <Route path='/buyer' element={<Buyer />} />

      </Routes>

      {/* <Routes>
        <Route path="/" element={<LandingPage/>}> 
          <Route index element={<Property/>}/> 
          <Route path="property" element={<Property/>}/>
          <Route path="seller" element={<Seller/>}/>
          <Route path="seller/:sellerId/property" element={<SellerProperty/>}/>
          <Route path="buyer" element={<Buyer/>}/>
          <Route path="property/:propertyId/booking" element={<Booking/>}/>
        </Route>
        </Routes> */}


<Footer className="footer--pin"/>



    </div>
  )
}
