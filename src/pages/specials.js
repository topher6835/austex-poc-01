import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import Layout from '../components/layout';
import PromoItem from '../components/promoItem';
import SpecialsItem from '../components/specialsItem';
import SpecialsLeftNav from '../components/specialsLeftNav';
import CustomQuoteBlock from '../components/customQuoteBlock';

import "../style/specialsPage.css";

let leftNavItems = [];

// PROMO
// const promoImageTest = 'mugs-camp.png';
import promoImage from '../images/products/Mugs-Main.jpg';
import promoPriceChartImage from '../images/temp/Price-Chart-Mugs.png';
const promoHeadline = '13oz. Campfire Mugs';
const promoText = 'This 13 oz. ceramic coffee mug is great for drinking hot cocoa by the campfire! A very useful promotional item, this mug features a speckled design, flared lip and a comfortable thick handle. Perfect for trade shows, gift shops and lodges, this mug holds well and is ideal for everyday use with your favorite coffee or tea. Available in several different colors to choose from, have your company name or logo imprinted on the surface for brand awareness. Price includes one-color imprint.';
//const promoTextTemp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam. Tempus quam pellentesque nec nam. Sit amet mauris commodo quis imperdiet massa. Tempor orci dapibus ultrices in iaculis nunc sed. Libero justo laoreet sit amet cursus sit amet dictum. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Orci dapibus ultrices in iaculis nunc sed augue lacus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Feugiat pretium nibh ipsum consequat. Imperdiet proin fermentum leo vel.';
leftNavItems.push('Promotional Items');

// SPECIALS
import dimmerImage from '../images/products/static-dimmer.jpg';
const dimmerHeadline = 'Colorful Static-Dimmer™';
const dimmerText = 'Static clinging, perforated, see‐thru shade. Easily peels and re‐adheres to window, doesn’t interfere with the operation of the window. Protects and shields infants from harmful sun rays. Rolls up and down with window. Reduces temperate inside vehicle, blocks sun rays from baby’s face, adding safety and comfort to infant and driver. Build public awareness and consumer appreciation with your message boldly displayed on the sunshade. Price includes one-color imprint.';
leftNavItems.push('Static Dimmers');
//
import pizzaCutterImage from '../images/products/pizza-cutter.jpg';
const pizzaCutterHeadline = 'World’s Best Pizza Cutter™';
const pizzaCutterText = 'This pizza cutter impresses everyone who uses it! The World’s Best Pizza Cutter™features an FDA approved and BPA free removable plastic blade for easy cleanup. This top rack dishwasher safe pizza cutter offers durable, sturdy and American made construction. Cutting everything from pizza to pancakes and brownies to bread dough, but never cutting you, this best-selling safe pizza cutter blade has stood the promotional product test of time! More than a standard kitchen tool, this cutting device works quickly, easily and never fails to be the primary kitchen utensil used. This pizza cutter is available in in 26 colors so your logo is sure to be complimented and seen every single day. U.S. Patents 7,134,209 and D652,271S. This Cutter is a Patented Design.  Price Includes 1‐color/1‐location standard decoration.';
leftNavItems.push('Pizza Cutters');
//
import envelopeImage from '../images/products/env2.png';
const envelopeHeadline = 'Printed Envelopes';
const envelopeText = 'Give your company an engaging brand identity and professional image with custom printed business envelopes. Add your logo to your professionally printed company stationary and see the difference it makes.';
leftNavItems.push('Printed Envelopes');

const SpecialsPage = () => {
  return (
    <>
      <Layout>
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
                                <PromoItem promoImage={promoImage} promoItemHeadline={promoHeadline} promoItemText={promoText} promoPriceChart={promoPriceChartImage} /> {/* promoImage={promoImage} */}

                                <SpecialsItem specialsItemImage={pizzaCutterImage} specialsItemHeadline={pizzaCutterHeadline} specialsItemText={pizzaCutterText} />
                                <SpecialsItem specialsItemImage={dimmerImage} specialsItemHeadline={dimmerHeadline} specialsItemText={dimmerText} />
                                <SpecialsItem specialsItemImage={envelopeImage} specialsItemHeadline={envelopeHeadline} specialsItemText={envelopeText} />
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
