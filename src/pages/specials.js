import React from 'react';
import { Link } from "gatsby";
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/titleBar';
import PromoItem from '../components/promoItem';
//import SpecialsItem from '../components/specialsItem';

import "../style/specialsPage.css";

let leftNavItems = [];

// PROMO //
// const promoImageTest = 'mugs-camp.png';
import campFireMugImage from '../images/products/Mugs-Main.jpg';
import campFireMugPriceChartImage from '../images/products/Price-Chart-Mugs.png';
const campFireMugHeadline = '13oz. Campfire Mugs';
const campFireMugText = 'This 13 oz. ceramic coffee mug is great for drinking hot cocoa by the campfire! A very useful promotional item, this mug features a speckled design, flared lip and a comfortable thick handle. Perfect for trade shows, gift shops and lodges, this mug holds well and is ideal for everyday use with your favorite coffee or tea. Available in several different colors to choose from, have your company name or logo imprinted on the surface for brand awareness. Price includes one-color imprint.';
leftNavItems.push(campFireMugHeadline);

// SPECIALS //
// import dimmerImage from '../images/products/static-dimmer.jpg';
// const dimmerHeadline = 'Colorful Static-Dimmer™';
// const dimmerText = 'Static clinging, perforated, see‐thru shade. Easily peels and re‐adheres to window, doesn’t interfere with the operation of the window. Protects and shields infants from harmful sun rays. Rolls up and down with window. Reduces temperate inside vehicle, blocks sun rays from baby’s face, adding safety and comfort to infant and driver. Build public awareness and consumer appreciation with your message boldly displayed on the sunshade. Price includes one-color imprint.';
// leftNavItems.push('Static Dimmers');

// import pizzaCutterImage from '../images/products/pizza-cutter.jpg';
// const pizzaCutterHeadline = 'World’s Best Pizza Cutter™';
// const pizzaCutterText = 'This pizza cutter impresses everyone who uses it! The World’s Best Pizza Cutter™features an FDA approved and BPA free removable plastic blade for easy cleanup. This top rack dishwasher safe pizza cutter offers durable, sturdy and American made construction. Cutting everything from pizza to pancakes and brownies to bread dough, but never cutting you, this best-selling safe pizza cutter blade has stood the promotional product test of time! More than a standard kitchen tool, this cutting device works quickly, easily and never fails to be the primary kitchen utensil used. This pizza cutter is available in in 26 colors so your logo is sure to be complimented and seen every single day. U.S. Patents 7,134,209 and D652,271S. This Cutter is a Patented Design.  Price Includes 1‐color/1‐location standard decoration.';
// leftNavItems.push('Pizza Cutters');

// import envelopeImage from '../images/products/env2.png';
// const envelopeHeadline = 'Printed Envelopes';
// const envelopeText = 'Give your company an engaging brand identity and professional image with custom printed business envelopes. Add your logo to your professionally printed company stationary and see the difference it makes.';
// leftNavItems.push('Printed Envelopes');

const SpecialsLeftNav = props => {
    return (
      <div className="left-specials-nav">
        <h3>Shop Our Specials</h3>
        <ul>
          {(props.navItems).map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
}

const CustomQuoteBlock = props => {
    return (
        <div className="left-custom-quote">
            <h2 className="text-center">Need a Custom Quote?</h2>
            <Link to="/request-a-custom-quote">
                <MDBBtn  className="left-custom-quote-button text-capitalize" style={{backgroundColor: '#ea1d2e !important'}}>
                    Click
                </MDBBtn>
            </Link>
            <h2 className="text-center">or Call 512.476.7581</h2>
        </div>
    )
}

const SpecialsPage = () => {
  return (
    <>
      <Layout>
        <SEO
            title="Specials"
        />
        <div style={{marginTop: "100px"}}>
            <TitleBar title={"Latest Promotional Item!"} />
        </div>
            <MDBRow className="my-5 specials-main-row" style={{}}>
                <MDBCol size="12">

                    <MDBRow>
                        <MDBCol className="left-nav-column" md="3">
                            <MDBRow className="d-none d-md-block">       {/* className="d-none d-md-block" */}
                                <MDBCol>
                                    <SpecialsLeftNav navItems={leftNavItems} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <CustomQuoteBlock />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md="9" className="">
                            <div>
                                <PromoItem promoImage={campFireMugImage} promoItemHeadline={campFireMugHeadline} promoItemText={campFireMugText} promoPriceChart={campFireMugPriceChartImage} /> {/* promoImage={promoImage} */}

                                {/* <SpecialsItem specialsItemImage={pizzaCutterImage} specialsItemHeadline={pizzaCutterHeadline} specialsItemText={pizzaCutterText} />
                                <SpecialsItem specialsItemImage={dimmerImage} specialsItemHeadline={dimmerHeadline} specialsItemText={dimmerText} />
                                <SpecialsItem specialsItemImage={envelopeImage} specialsItemHeadline={envelopeHeadline} specialsItemText={envelopeText} /> */}
                            </div>
                        </MDBCol>
                    </MDBRow>

                </MDBCol>
            </MDBRow>
      </Layout>
    </>
  )
}

export default SpecialsPage;
