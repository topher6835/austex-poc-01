import React from "react";
import { Link } from "gatsby";
import { MDBRow, MDBCol } from "mdbreact";
import { Carousel } from "react-responsive-carousel";

import "../style/carousel.css";
import CarouselSlide from "./carouselSlide";
import image01 from "../images/carousel_image size_fpo.png";
import image02 from "../images/cats-q-c-640-480-1.jpg";
import image03 from "../images/carousel/Mailing_banner.png";
import image04 from "../images/carousel/Offset_banner.png";

//
const tempText = "LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.";
import tempImage from "../images/carousel/tempCarousel.png";

import offSetPrintingImg from "../images/carousel/Offset_banner.png";
const offSetPrintingBanner = "Superb Offset Printing";
const offsetPrintingText = "";
const offsetPrintingLink = "/#feature1";
//
//import digitalPrintingImg from "";
const digitalPrintingBanner = "Digital Printing";
const digitalPrintingText = "";
const digitalPrintingLink = "/#feature2";
//
import mailingImg from "../images/carousel/Mailing_banner.png";
const mailingBanner = "Mailing & Fulfillment";
const mailingText = "";
const mailingLink = "/#feature3";
//
//import embossingImg from "";
const embossingBanner = "Embossing, Foiling & Die Cutting";
const embossingText = "";
const embossingLink = "/#feature4";
//
//import promoSpecialtyImg from "";
const promoSpecialtyBanner = "Promotional & Specialty Items";
const promoSpecialtyText = "";
const promoSpecialtyLink = "/#feature5";
//
//import wideFormatImg from "";
const wideFormatBanner = "Wide Format";
const wideFormatText = "";
const wideFormatLink = "/#feature6";
//
//import designMarketingImg from "";
const designMarketingBanner = "Graphic Design & Online Marketing";
const designMarketingText = "";
const designMarketingLink = "/#feature7";

const CarouselPage3 = () => (
  <Carousel showThumbs={false} infiniteLoop={true} interval={5000} showStatus={false} swipeScrollTolerance={1} emulateTouch={true}>

    <CarouselSlide slideImage={offSetPrintingImg} banner={offSetPrintingBanner} text={tempText} link={offsetPrintingLink} />
    {/* <CarouselSlide slideImage={tempImage} banner={digitalPrintingBanner} text={tempText} link={digitalPrintingLink} />
    <CarouselSlide slideImage={mailingImg} banner={mailingBanner} text={tempText} link={mailingLink} />
    <CarouselSlide slideImage={tempImage} banner={embossingBanner} text={tempText} link={embossingLink} />
    <CarouselSlide slideImage={tempImage} banner={promoSpecialtyBanner} text={tempText} link={promoSpecialtyLink} />
    <CarouselSlide slideImage={tempImage} banner={wideFormatBanner} text={tempText} link={wideFormatLink} />
    <CarouselSlide slideImage={tempImage} banner={designMarketingBanner} text={tempText} link={designMarketingLink} /> */}

    {/* <div>
        <Link to="/#feature1">
            <img src={image04} />
            <div className="legend legend-override">
                
                <MDBRow className="legend-banner-row">
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7">
                        <h2>Superb Offset Printing</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5">
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Superb Offset Printing</h3>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="9" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="3">
                        <div className='carousel-text-box'>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                                
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>

    <div className="carousel-container">
        <Link to="/#feature2">
            <img src={image03} />
            <div className="legend legend-override">
                
                <MDBRow className="legend-banner-row" style={{ marginTop: '15px' }}>
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7" style={{ height: '55px', borderRadius: '0 50px 50px 0' }}>
                        <h2 style={{lineHeight: '55px', fontWeight: '500'}}>Digital Printing</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5" style={{ backgroundColor: '#1F3F7C', height: '45px' }}>
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>Digital Printing</h3>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="9" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="3">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>

    <div className="carousel-container">
        <Link to="/#feature3">
            <img src={tempImage} />
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
                    <MDBCol md="9" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="3">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>

    <div className="carousel-container">
        <Link to="/#feature4">
            <img src={tempImage} />
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
                    <MDBCol md="9" style={{paddingTop: '20px'}} ></MDBCol>
                    <MDBCol md="3">
                        <div className='carousel-text-box' style={{  }}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                LOREM Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div> */}

    
  </Carousel>
);

export default CarouselPage3;
