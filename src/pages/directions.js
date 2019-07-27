import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import Map from '../components/gMap';
import "../style/gallery.css";

const Directions = () => {
  return (
      <Layout>
          <h3>Map Page</h3>
          {/* <MDBContainer> */}
          <MDBRow >
            <MDBCol size="12">
              <MDBRow><h3>Map Page</h3></MDBRow>
              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  <Map />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          {/* </MDBContainer> */}
      </Layout>
  )
}
export default Directions;