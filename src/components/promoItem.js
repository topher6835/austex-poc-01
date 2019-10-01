import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import "../style/promoItem.css";
//import promoImage from "../images/products/mugs-camp-copy.jpg";

// PROMO

const PromoItem = (props) => {
    return (
      <div className="promo-item">  {/* promo-item feature */}

        <MDBRow className="">
            <MDBCol size="12">
                <MDBRow className="banner-row">
                    <MDBCol className="d-none d-md-block" md="12">

                        <div className="specials-page-headline-bar">
                            <MDBRow>
                                <MDBCol md="10">
                                <h2 className="promo-headline ">Promotional Item of the Month!</h2>  {/* promo-headline responsive-title-bar-text*/}
                                </MDBCol>
                                <MDBCol md="2">
                                <h2 className="">Month</h2> {/* promo-headline-month responsive-title-bar-text*/}
                                </MDBCol>
                            </MDBRow>
                        </div>

                    </MDBCol>
                    <MDBCol className="d-block d-md-none banner-bar-mobile" md="12">
                        <h3 className="responsive-banner-bar-title-text-mobile">Promotional Item of the Month!</h3>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>

        <MDBRow className="promo-content-row">
          <MDBCol className="promo-img-col" md="4"> {/* 3 */}
            <div className="promo-img">
                <table className="promo-img-wrapper">
                    <tr>
                        <td>
                            {/* <img src={require("../images/products/" + props.promoImage) } />   */}
                            <img src={props.promoImage} />
                        </td>
                    </tr>
                </table>
            </div>
          </MDBCol>
          <MDBCol className="promo-description-col" md="8"> {/* 5 */}
            <MDBRow className="promo-item-title">
              <h3 style={{paddingLeft: '30px', marginBottom: '5px'}}>{props.promoItemHeadline}</h3>
            </MDBRow>
            <MDBRow>
              <div className="content-description">
                {props.promoItemText}
              </div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
          
        <MDBRow>
          <MDBCol className="promo-catalog-col"> 
            <div className="promo-catalog-image" >
                
                <table className="promo-catalog-image-wrapper" >
                    <tr>
                        <td>
                            <img src={props.promoPriceChart} style={{}}/>
                            <br />
                            *prices shown are per piece
                        </td>
                    </tr>
                    <tr>
                        <MDBBtn href="https://austex.logomall.com/" className="browse-catalog-button text-capitalize" style={{backgroundColor: '#ea1d2e !important'}}>Browse Catalog</MDBBtn>
                    </tr>
                </table>
                
            </div>
          </MDBCol>
        </MDBRow>
        
      </div>
    )
}

export default PromoItem;