import React from 'react';
//import { StaticQuery, graphql } from 'gatsby';
import { MDBRow, MDBCol } from 'mdbreact';
// import Gallery from '../src/Gallery';

import Layout from '../components/layout';
import GridGallery from '../components/gridGallery';
import Comments from '../components/comments';
import Equipment from '../components/equipmentList';
//import GalleryImg from "../components/galleryImg";
import "../style/gallery.css";

const GalleryPage = () => {
  return (
      <Layout>
        <MDBRow className="my-5 gallery-main-row" style={{ margin: '0px' }}>
          <MDBCol size="12" >
            <MDBRow>
              <MDBCol className="left-comments-column" md="3" style={{backgroundColor: '#203e7c', color: 'white'}}>
                <MDBRow>
                    <MDBCol>
                        <Comments />
                    </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="9">
                <Equipment />
                <GridGallery />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </Layout>
  )
}
export default GalleryPage
