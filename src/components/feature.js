import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

import "../style/feature.css"

const Feature = (props) => {
  return (
    <div className="feature">
      <MDBRow className="my-5" id={props.id}> {/* id="feature1" */}
        <MDBCol size="12">

          <MDBRow className="feature-banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={props.icon}
                  alt=""
                  className="img-fluid z-depth-1-half rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <span className="feature-bar-titlex"><h2>{props.title}</h2></span>
              </div>
            </MDBCol>

            <MDBCol
              className="d-block d-md-none feature-banner-bar-mobile z-depth-1-half"
              md="5"
            >
              <h3 style={{ lineHeight: '45px', fontWeight: '500', textAlign: 'center' }}>
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
                  <div className="feature-description">
                    {props.textBlock}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol className="d-block d-md-none" md="4">
              <MDBRow className="mb-3 ">
                <MDBCol className=""  size="12"> {/* xl="10" md="11" */}
                  <div className="feature-description feature-description-mobile">
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
