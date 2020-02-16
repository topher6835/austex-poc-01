import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

import Layout from '../components/layout'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>Privacy Policy Page</h2>
      <MDBRow className="my-5" style={{ margin: '5px' }}>
        <MDBCol md="1"></MDBCol>
        <MDBCol size="10">
          <MDBRow>
            {/* <h4 style={{ textAlign: 'center', width: '100%' }}>
              2431 Forbes Drive
            </h4>
            <h4 style={{ textAlign: 'center', width: '100%' }}>
              Austin, Texas 78754
            </h4> */}
            <p style={{ textAlign: 'center', width: '100%' }}>
              This privacy policy has been compiled to better serve those who
              are concerned with how their ‘Personally Identifiable Information’
              (PII) is being used online. PII, as described in US privacy law
              and information security, is information that can be used on its
              own or with other information to identify, contact, or locate a
              single person, or to identify an individual in context. Please
              read our privacy policy carefully to get a clear understanding of
              how we collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>
          </MDBRow>
          <MDBRow>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10"><p style={{ textAlign: 'center', width: '100%' }}>Privacy Content Here</p></MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="1"></MDBCol>
      </MDBRow>
    </Layout>
  )
}
export default PrivacyPolicy
