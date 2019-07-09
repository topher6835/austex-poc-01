import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

import icon05 from '../images/icons/icon05.png'
import icon01 from '../images/icons/icon01.png'
import icon04 from '../images/icons/icon04.png'
import icon02 from '../images/icons/icon02.png'

const FeaturesSection = () => {
  return (
    <div>
      <MDBRow className="my-5" id="feature1">
        <MDBCol size="12">
          <MDBRow className="feature-banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={icon05}
                  alt=""
                  className="img-fluid z-depth-1-half rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <h2>Superb Offset Printing</h2>
              </div>
            </MDBCol>
            <MDBCol
              className="d-block d-md-none feature-banner-bar-mobile"
              md="5"
            >
              <h3 style={{ lineHeight: '45px', fontWeight: '500' }}>
                Offset Printing
              </h3>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ marginTop: '35px' }}>
            <MDBCol md="4">
              <img
                className="img-fluid"
                style={{ height: '180px', width: '320px' }}
                src="https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBRow className="mb-3 ">
                <MDBCol xl="10" md="11" size="10">
                  <div className="feature-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Nulla posuere sollicitudin aliquam ultrices
                      sagittis orci a. Netus et malesuada fames ac turpis
                      egestas integer. Mauris vitae ultricies leo integer
                      malesuada nunc. Lobortis feugiat vivamus at augue eget
                      arcu dictum. Sit amet massa vitae tortor condimentum
                      lacinia quis vel. Platea dictumst vestibulum rhoncus est.
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
        </MDBCol>
      </MDBRow>

      <MDBRow className="my-5" id="feature2">
        <MDBCol size="12">
          <MDBRow className="feature-banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={icon01}
                  alt=""
                  className="img-fluid z-depth-1-half rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <h2>Digital Printing</h2>
              </div>
            </MDBCol>
            <MDBCol
              className="d-block d-md-none feature-banner-bar-mobile"
              md="5"
            >
              <h3 style={{ lineHeight: '45px', fontWeight: '500' }}>
                Digital Printing
              </h3>
            </MDBCol>
          </MDBRow>

          {/* <MDBContainer> */}
          <MDBRow style={{ marginTop: '35px' }}>
            <MDBCol md="4">
              <img
                className="img-fluid"
                style={{ height: '180px', width: '320px' }}
                src="https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBRow className="mb-3 ">
                <MDBCol xl="10" md="11" size="10">
                  <div className="feature-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Nulla posuere sollicitudin aliquam ultrices
                      sagittis orci a. Netus et malesuada fames ac turpis
                      egestas integer. Mauris vitae ultricies leo integer
                      malesuada nunc. Lobortis feugiat vivamus at augue eget
                      arcu dictum. Sit amet massa vitae tortor condimentum
                      lacinia quis vel. Platea dictumst vestibulum rhoncus est.
                      Integer quis auctor elit sed vulputate mi sit amet. Id
                      nibh tortor id aliquet lectus proin.
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
          {/* </MDBContainer> */}
        </MDBCol>
      </MDBRow>

      <MDBRow className="my-5" id="feature3">
        <MDBCol size="12">
          <MDBRow className="feature-banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={icon04}
                  alt=""
                  className="img-fluid z-depth-1-half rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <h2>Mailing {'&'} Fulfillment</h2>
              </div>
            </MDBCol>
            <MDBCol
              className="d-block d-md-none feature-banner-bar-mobile"
              md="5"
            >
              <h3 style={{ lineHeight: '45px', fontWeight: '500' }}>
                Mailing {'&'} Fulfillment
              </h3>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ marginTop: '35px' }}>
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
            <MDBCol md="8">
              <MDBRow className="mb-3 ">
                <MDBCol xl="10" md="11" size="10">
                  <div className="feature-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Nulla posuere sollicitudin aliquam ultrices
                      sagittis orci a. Netus et malesuada fames ac turpis
                      egestas integer. Mauris vitae ultricies leo integer
                      malesuada nunc. Lobortis feugiat vivamus at augue eget
                      arcu dictum. Sit amet massa vitae tortor condimentum
                      lacinia quis vel. Platea dictumst vestibulum rhoncus est.
                      Integer quis auctor elit sed vulputate mi sit amet. Id
                      nibh tortor id aliquet lectus proin.
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
        </MDBCol>
      </MDBRow>

      <MDBRow className="my-5" id="feature4">
        <MDBCol size="12">
          <MDBRow className="feature-banner-row">
            <MDBCol
              className="d-none d-md-block feature-banner-bar-desktop z-depth-1-half"
              md="7"
            >
              <div className="feature-bar-img z-depth-1-half">
                <img
                  src={icon02}
                  alt=""
                  className="img-fluid z-depth-1-half rounded-circle feature-image"
                />
              </div>
              <div className="feature-bar-title">
                <h2>Embossing, Foiling {'&'} Die Cutting</h2>
              </div>
            </MDBCol>
            <MDBCol
              className="d-block d-md-none feature-banner-bar-mobile"
              md="5"
            >
              <h3 style={{ lineHeight: '45px', fontWeight: '500' }}>
                Embossing, Foiling {'&'} Die Cutting
              </h3>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ marginTop: '35px' }}>
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
            <MDBCol md="8">
              <MDBRow className="mb-3 ">
                <MDBCol xl="10" md="11" size="10">
                  <div className="feature-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Nulla posuere sollicitudin aliquam ultrices
                      sagittis orci a. Netus et malesuada fames ac turpis
                      egestas integer. Mauris vitae ultricies leo integer
                      malesuada nunc. Lobortis feugiat vivamus at augue eget
                      arcu dictum. Sit amet massa vitae tortor condimentum
                      lacinia quis vel. Platea dictumst vestibulum rhoncus est.
                      Integer quis auctor elit sed vulputate mi sit amet. Id
                      nibh tortor id aliquet lectus proin.
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
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default FeaturesSection
