import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import "../style/promoItem.css";

const PromoItem = (props) => {
    return (
      <div className="promo-item">
        <MDBRow className="d-none d-md-block">
          <MDBCol md="12">

            <div className="specials-page-headline-bar"> {/*  */}
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
        </MDBRow>
        <MDBRow className="d-block d-md-none">
          <MDBCol md="12">
            <div className="specials-page-headline-bar">
              <h2 className="promo-headline responsive-title-bar-text-mobile">Promotional Item of the Month!</h2>
              {/* <h2 className="promo-headline-month responsive-title-bar-text-mobile">Month</h2> */}
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className="promo-content-row">
          <MDBCol className="promo-img-col" md="3">
            <div className="promo-img">
                <table className="promo-img-wrapper">
                    <tr>
                        <td>
                            <img src={props.promoImage} />
                        </td>
                    </tr>
                </table>
            </div>
          </MDBCol>
          <MDBCol className="promo-description-col" md="5">
            <MDBRow className="promo-item-title">
              <h3>{props.promoItemHeadline}</h3>
            </MDBRow>
            <MDBRow>
              <p>
                {props.promoItemText}
              </p>
            </MDBRow>
          </MDBCol>
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