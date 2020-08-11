import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/titleBar';

const OurStory = () => {
  return (
      <Layout>
          <SEO title="Testimonials" />
          <div style={{marginTop: "100px"}}>
            <TitleBar title={"72 Years of Quality"} />
          </div>
          
          <MDBRow className="my-5" style={{margin: '5px'}}>
            <MDBCol size="12">

              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10" className="content-description">
                    <p>Aus-Tex opened our doors in 1946 in downtown Austin’s warehouse district. The company’s name is not only inspired by our great city, but Aus-Tex also holds a place in history as one of Austin’s original printing plants. In 2002, Aus-Tex purchased the decommissioned Celis Brewery in northeast Austin and continued to grow, expand capabilities, and upgrade equipment.</p>
                    <p>Over the decades, Aus-Tex established our position as a high-volume, big-press printing plant by committing ourselves to quality, speed, and price. Today, Aus-Tex honors this commitment by utilizing the latest digital technologies and environmentally sound practices. Maintaining our forward momentum, Aus-Tex partners with clients to develop strategies around your goals. What our customers love even more than the work we do are the results we deliver.</p>
                    <p>We invite you to stop by any time to meet our team or tour our facilities. We want to hear about your goals and your ideas, so that we can best align our capabilities and expertise to drive your communications.</p>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>

              {/* <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  <p>text</p>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow> */}

            </MDBCol>
          </MDBRow>
      </Layout>
  )
}
export default OurStory;