import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import Map from '../components/gMap';
// import "../style/gallery.css";

const Directions = () => {
  return (
      <Layout>
          <h2 style={{textAlign: 'center'}}>Directions Page</h2>
          <MDBRow className="my-5" style={{margin: '5px'}}>
            <MDBCol size="12">
              <MDBRow>
                <h4 style={{textAlign: 'center', width: '100%'}}>2431 Forbes Drive</h4>
                <h4 style={{textAlign: 'center', width: '100%'}}>Austin, Texas 78754</h4>
              </MDBRow>
              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  <Map />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
      </Layout>
  )
}
export default Directions;