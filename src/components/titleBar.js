import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const TitleBar = (props) => {
  let titleBarOpacity = "rgba(31, 63, 124, 1)";

  if(props.carousel) {
    titleBarOpacity = "rgba(31, 63, 124, 0.5)";
  } else{
    titleBarOpacity = "rgba(31, 63, 124, 1)";
  }

  return (
    <div>
          <MDBRow className="banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop"
              md="7"
              style={{backgroundColor: titleBarOpacity}}
            >
              {/* <div className="feature-bar-img z-depth-1-half">
                <img
                  src={props.icon}
                  alt=""
                  className="img-fluid rounded-circle feature-image"
                />
              </div> */}
              <div className="feature-bar-title">
                <h2 className="responsive-banner-bar-title-text-desktop" style={{}}>{props.title}</h2>
              </div>
            </MDBCol>

            <MDBCol
              className="d-block d-md-none banner-bar-mobile"
              md="5"
              style={{backgroundColor: titleBarOpacity}}
            >
              <h3 className="responsive-banner-bar-title-text-mobile">
                {props.title}
              </h3>
            </MDBCol>
          </MDBRow>
    </div>
  )
}

export default TitleBar;
