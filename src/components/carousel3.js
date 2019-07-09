import React from "react";
import { Link } from "gatsby"
import { MDBRow, MDBCol } from "mdbreact";
import { Carousel } from "react-responsive-carousel";
import image01 from "../images/carousel_image size_fpo.png"
import image02 from "../images/cats-q-c-640-480-1.jpg"
import image03 from "../images/carousel/Mailing_banner.png"
import image04 from "../images/carousel/Offset_banner.png"

const CarouselPage3 = () => (
  <Carousel showThumbs={false} infiniteLoop={true} interval={5000} showStatus={false} swipeScrollTolerance={1} emulateTouch={true}>
    <div className="carousel-container">
        <Link to="/#feature1">
            <img src={image04} />
            <div className="legend legend-override">
                <MDBRow className="legend-banner-row" style={{ marginTop: '15px' }}>
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7" style={{ height: '55px', borderRadius: '0 50px 50px 0' }}>
                        <h2 style={{lineHeight: '55px', fontWeight: '500'}}>Banner Text</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5" style={{ backgroundColor: '#1F3F7C', height: '45px' }}>
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>MOBILE BANNER</h3>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="7" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="5">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                LOREM ipsum dolor sit amet sit amet.
                            </div>
                            {/* <p>LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet sit amet sit amet</p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet sit amet</p>
                            <p>LOREM ipsum dolor sit amet sit amet </p> */}
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>

    <div>
        <Link to="/#feature1">
            <img src={image03} />
            <div className="legend legend-override">
                <MDBRow className="legend-banner-row" style={{ marginTop: '15px' }}>
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7" style={{ height: '55px', borderRadius: '0 50px 50px 0' }}>
                        <h2 style={{lineHeight: '55px', fontWeight: '500'}}>Mailing Banner Text</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5" style={{ backgroundColor: '#1F3F7C', height: '45px' }}>
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>MOBILE BANNER</h3>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="7" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="5">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                LOREM ipsum dolor sit amet sit amet.
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>

    <div>
        <img src={image01} />
    </div>

    <div>
        <Link to="/#feature1">
            <img src={image02} />
            <div className="legend legend-override">
                <MDBRow className="legend-banner-row" style={{ marginTop: '15px' }}>
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7" style={{ height: '55px', borderRadius: '0 50px 50px 0' }}>
                        <h2 style={{lineHeight: '55px', fontWeight: '500'}}>Die Cutting, Foiling, {'\&'} Embossing</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5" style={{ backgroundColor: '#1F3F7C', height: '45px' }}>
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Die Cutting, Foiling, {'\&'} Embossing</h3>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="7" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="5">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet.
                                Lorem ipsum dolor sit amet sit amet sit amet.
                                LOREM ipsum dolor sit amet sit amet.
                            </div>
                            {/* <p>LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet sit amet sit amet</p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet </p>
                            <p>Lorem ipsum dolor sit amet sit amet sit amet</p>
                            <p>LOREM ipsum dolor sit amet sit amet </p> */}
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>
  </Carousel>
);

export default CarouselPage3;

