import React from "react";
import {  MDBRow, MDBCol, MDBContainer } from "mdbreact";

import icon05 from "../images/icons/icon05.png"
import icon01 from "../images/icons/icon01.png"
import icon04 from "../images/icons/icon04.png"

const FeaturesSection = () => {
    return (
      <div>
        <div className="my-5" id="feature1">

            <MDBRow className="feature-banner-row">
                <MDBCol className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half" md="7">
                    <div className="feature-bar-img z-depth-1-half">
                        <img src={icon05} alt="" className="img-fluid z-depth-1-half rounded-circle feature-image"/>
                    </div>
                    <div className="feature-bar-title">
                        <h2>Superb Offset Printing</h2>
                    </div>
                </MDBCol>
                <MDBCol className="d-block d-md-none feature-banner-bar-mobile" md="5">
                    <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Superb Offset Printing</h3>
                </MDBCol>
            </MDBRow>

          {/* <MDBRow className="feature-title-row">
            <MDBCol size="2" className="feature-title-image z-depth-1">
              <span className="font-weight-bold">
                <img src={icon05} alt="" className="img-fluid z-depth-1-half rounded-circle feature-image"/>
              </span>
            </MDBCol>
            <MDBCol size="4" className="feature-title-text z-depth-1">
              <span className="font-weight-bold float-right">
                Superb Offset Printing
              </span>
            </MDBCol>
          </MDBRow> */}

          <MDBContainer>
            <MDBRow style={{ height: '200px', marginTop: '35px' }}>
              <MDBCol md="4">
                <img
                  className="img-fluid"
                  style={{ height: '200px', width: '200px' }}
                  src="https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg"
                  alt=""
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBRow className="mb-3 ">
                  <MDBCol xl="10" md="11" size="10">
                    <div className="feature-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        enim ad minima veniam, quis nostrum exercitationem
                        ullam. Reprehenderit maiores aperiam assumenda deleniti
                        hic.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        enim ad minima veniam, quis nostrum exercitationem
                        ullam. Reprehenderit maiores aperiam assumenda deleniti
                        hic.
                      </p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="my-5" id="feature2">
            <MDBRow className="feature-banner-row">
                <MDBCol className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half" md="7">
                    <div className="feature-bar-img z-depth-1-half">
                        <img src={icon01} alt="" className="img-fluid z-depth-1-half rounded-circle feature-image"/>
                    </div>
                    <div className="feature-bar-title">
                        <h2>Digital Printing</h2>
                    </div>
                </MDBCol>
                <MDBCol className="d-block d-md-none feature-banner-bar-mobile" md="5">
                    <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Digital Printing</h3>
                </MDBCol>
            </MDBRow>

          <MDBContainer>
            <MDBRow style={{ height: '200px', marginTop: '35px' }}>
              <MDBCol md="4">
                <img
                  className="img-fluid"
                  style={{ height: '200px', width: '200px' }}
                  src="https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg"
                  alt=""
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBRow className="mb-3 ">
                  <MDBCol xl="10" md="11" size="10">
                    <div className="feature-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        enim ad minima veniam, quis nostrum exercitationem
                        ullam. Reprehenderit maiores aperiam assumenda deleniti
                        hic.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        enim ad minima veniam, quis nostrum exercitationem
                        ullam. Reprehenderit maiores aperiam assumenda deleniti
                        hic.
                      </p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="my-5" id="feature3">
            <MDBRow className="feature-banner-row">
                <MDBCol className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half" md="7">
                    <div className="feature-bar-img z-depth-1-half">
                        <img src={icon05} alt="" className="img-fluid z-depth-1-half rounded-circle feature-image"/>
                    </div>
                    <div className="feature-bar-title">
                        <h2>Mailing {'\&'} Fulfillment</h2>
                    </div>
                </MDBCol>
                <MDBCol className="d-block d-md-none feature-banner-bar-mobile" md="5">
                    <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Mailing {'\&'} Fulfillment</h3>
                </MDBCol>
            </MDBRow>

          <MDBRow style={{ height: '200px', marginTop: '35px' }}>
            <MDBCol md="4">
              {' '}
              {/* className="text-lg-left" */}
              <img
                className="img-fluid"
                style={{ height: '180px', width: '320px' }}
                src="https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg"
                alt=""
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBRow className="mb-3 ">
                <MDBCol xl="10" md="11" size="10">
                  <div className="feature-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      enim ad minima veniam, quis nostrum exercitationem ullam.
                      Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      enim ad minima veniam, quis nostrum exercitationem ullam.
                      Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    )
}

export default FeaturesSection;