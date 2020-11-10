import React from 'react';
// import { StaticQuery, graphql } from "gatsby";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Gallery from 'react-grid-gallery';

import image01 from '../images/gallery/2.jpg';
import image02 from '../images/gallery/3.jpg';
import image03 from '../images/gallery/bagworld.png';
import image04 from '../images/gallery/qualtry.png';
import image05 from '../images/gallery/safetymade.png';

const IMAGES = [
  // {
  //   src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
  //   thumbnail:
  //     'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   caption: 'After Rain (Jeshu John - designerspics.com)',
  // },
  // {
  //   src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  //   thumbnail:
  //     'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   caption: 'Boats (Jeshu John - designerspics.com)',
  // },
  {
    src: image01,
    thumbnail: image01,
    thumbnailWidth: 245,
    thumbnailHeight: 320,
  },
  {
    src: image02,
    thumbnail: image02,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: image03,
    thumbnail: image03,
    thumbnailWidth: 1091,
    thumbnailHeight: 1411,
  },

  {
    src: image04,
    thumbnail: image04,
    thumbnailWidth: 1098,
    thumbnailHeight: 1269,
  },
  {
    src: image05,
    thumbnail: image05,
    thumbnailWidth: 1110,
    thumbnailHeight: 1290,
  }

  ,
  {
    src: image05,
    thumbnail: image05,
    thumbnailWidth: 1110,
    thumbnailHeight: 1290,
  }
  ,
  {
    src: image05,
    thumbnail: image05,
    thumbnailWidth: 1110,
    thumbnailHeight: 1290,
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
]

const GridGallery = () => {
  return (
    <MDBContainer>
      <MDBRow style={{border: '1px solid red', width: '100%', display: 'flex', justifyContent: 'center'}}> {/* width: '100%', display: 'flex', justifyContent: 'center' */}
        <MDBCol md="8" style={{border: '1px solid yellow'}}>
          <Gallery images={IMAGES} enableImageSelection={false} margin={5} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
export default GridGallery;
