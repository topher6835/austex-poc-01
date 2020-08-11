import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GridGallery from '../components/gridGallery'
import TitleBar from '../components/titleBar'
import Comments from '../components/comments'
import Equipment from '../components/equipmentList'
//import GalleryImg from "../components/galleryImg";
import '../style/gallery.css'

const GalleryPage = () => {
  return (
    <Layout>
      <SEO
        title="Gallery"
      />
      <div style={{marginTop: "100px"}}>
        <TitleBar title={"Gallery"} />
      </div>
      <MDBRow className="my-5 gallery-main-row" style={{ margin: '0px' }}>
        <MDBCol size="12">
          {/* <MDBRow> */}

          <GridGallery />
            {/* <MDBCol md="1" />
            <MDBCol md="10">
              <GridGallery />
            </MDBCol>
            <MDBCol md="1" /> */}

          {/* </MDBRow> */}
        </MDBCol>
      </MDBRow>
    </Layout>
  )
}
export default GalleryPage
