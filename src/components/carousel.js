import React from "react";
import { Carousel } from "react-responsive-carousel";

import "../style/carousel.css";
import CarouselSlide from "./carouselSlide";

//
import tempImage from "../images/carousel/tempCarousel.png";

import offSetPrintingImg from "../images/carousel/Offset_banner.png";
const offSetPrintingBanner = "Superb Offset Printing";
const offsetPrintingText = "";
const offsetPrintingLink = "/#feature1";
//
import digitalPrintingImg from "../images/carousel/digital_banner.jpg";
const digitalPrintingBanner = "Digital Printing";
const digitalPrintingText = "";
const digitalPrintingLink = "/#feature2";
//
import mailingImg from "../images/carousel/Mailing_banner.png";
const mailingBanner = "Mailing & Fulfillment";
const mailingText = "";
const mailingLink = "/#feature3";
//
import embossingImg from "../images/carousel/embossing_banner.jpg";
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
const designMarketingBanner = "Pre-Press & Graphic Design";
const designMarketingText = "";
const designMarketingLink = "/#feature7";

const CarouselPage = () => (
  <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={5000} showStatus={false} swipeScrollTolerance={1} emulateTouch={true}>
    <CarouselSlide slideImage={offSetPrintingImg} banner={offSetPrintingBanner} link={offsetPrintingLink} />
    <CarouselSlide slideImage={digitalPrintingImg} banner={digitalPrintingBanner} link={digitalPrintingLink} />
    <CarouselSlide slideImage={mailingImg} banner={mailingBanner} link={mailingLink} />
    <CarouselSlide slideImage={embossingImg} banner={embossingBanner} link={embossingLink} />
    <CarouselSlide slideImage={tempImage} banner={promoSpecialtyBanner} link={promoSpecialtyLink} />
    <CarouselSlide slideImage={tempImage} banner={wideFormatBanner} link={wideFormatLink} />
    <CarouselSlide slideImage={tempImage} banner={designMarketingBanner} link={designMarketingLink} />
  </Carousel>
);

export default CarouselPage;
