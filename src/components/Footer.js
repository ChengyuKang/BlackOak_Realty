import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';

export default function Footer() {
  return (
    <div>
      <MDBFooter bgColor='warning' className='text-center text-lg-start text-muted'>
      <section className=''>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Black Oak Realty
              </h6>
              <p>
              Your Trusted Partner in Real Estate. Exceptional service, market expertise, and personalized attention for your property needs.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='http://localhost:3001/property' className='text-reset'>
                  Property
                </a>
              </p>
              <p>
                <a href='http://localhost:3001/seller' className='text-reset'>
                  Seller
                </a>
              </p>
              <p>
                <a href='http://localhost:3001/buyer' className='text-reset'>
                  Buyer
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <MDBIcon icon="home" className="me-2" /> */}
                DUNDEE, SCOTLAND, UK
              </p>
              <p>
                {/* <MDBIcon icon="envelope" className="me-3" /> */}
                info@blackoak.com
              </p>
              <p>
                {/* <MDBIcon icon="phone" className="me-3" /> */}
                 + 44 234 567 88
              </p>
              <p>
                {/* <MDBIcon icon="print" className="me-3" />  */}
                + 44 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3001/'>
          www.blackoak.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}
