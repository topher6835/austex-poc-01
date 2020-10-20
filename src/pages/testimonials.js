import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/titleBar';
import Comments from '../components/comments';


const Testimonials = () => {
  return (
      <Layout>
          <SEO
            title="Testimonials"
          />
          <div style={{marginTop: "100px"}}>
            <TitleBar title={"Testimonials"} />
          </div>
          
          <MDBRow className="my-5" style={{margin: '5px'}}>
            <MDBCol size="12">

              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                    <Comments />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>

            </MDBCol>
          </MDBRow>
      </Layout>
  )
}
export default Testimonials;