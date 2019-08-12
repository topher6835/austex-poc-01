import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import "../style/feature.css";

const Feature = (props) => {

  return (
    <div className="feature">
      <MDBRow className="my-5 feature-row" id={props.id}>
        <MDBCol size="12">

          <MDBRow className="banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={props.icon}
                  alt=""
                  className="img-fluid rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <h2 className="responsive-banner-bar-title-text-desktop">{props.title}</h2>
              </div>
            </MDBCol>

            <MDBCol
              className="d-block d-md-none banner-bar-mobile"
              md="5"
            >
              <h3 className="responsive-banner-bar-title-text-mobile">
                {props.title}
              </h3>
            </MDBCol>
          </MDBRow>

          <MDBRow className="feature-content" style={{ marginTop: '35px' }}>
            <MDBCol className="d-none d-md-block" md="4">
              <img
                className="img-fluid"
                style={{ height: '320px', width: '320px' }}
                src={props.leftImage}
                alt=""
              />
            </MDBCol>

            <MDBCol className="d-none d-md-block" md="8">
              <MDBRow className="mb-3 ">
                <MDBCol className="" xl="10" md="11" size="10">
                  <div className="content-description">
                    {props.textBlock}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol className="d-block d-md-none" md="4">
              <MDBRow className="mb-3 ">
                <MDBCol className=""  size="12"> {/* xl="10" md="11" */}
                  <div className="content-description content-description-mobile">
                    {props.textBlock}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

          </MDBRow>

        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Feature;
