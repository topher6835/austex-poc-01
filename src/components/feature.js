import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import TitleBar from './titleBar';

const Feature = (props) => {

  return (
    <div className="feature">
      <MDBRow className="my-5 feature-row" id={props.id}>
        <MDBCol size="12">

          <TitleBar title={props.title} />

          <MDBRow className="feature-content" style={{ marginTop: '35px' }}>
            <MDBCol className="d-none d-md-block" md="4">
              <img
                className="img-fluid feature-large-img"
                style={{ height: '320px', width: '320px' }}
                src={props.leftImage}
                alt=""
              />
            </MDBCol>

            <MDBCol className="d-none d-md-block" md="8">
              <MDBRow className="mb-3">
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
