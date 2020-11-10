import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/titleBar';

const QuickTour = () => {
  return (
      <Layout>
          <SEO title="Quick Tour" />
          <div style={{marginTop: "100px"}}>
            <TitleBar title={"Quick Tour"} />
          </div>
          
          <MDBRow className="my-5" style={{margin: '5px'}}>
            <MDBCol size="12">

              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10" className="content-description">
                    <p style={{textAlign: "center"}}>Coming Soon!</p>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>

            </MDBCol>
          </MDBRow>
      </Layout>
  )
}
export default QuickTour;