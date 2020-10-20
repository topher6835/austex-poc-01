import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import "../style/promoItem.css";

// PROMO

const PromoItem = (props) => {
    return (
      <div className="promo-item">

        <MDBRow className="promo-content-row">
          <MDBCol className="promo-img-col" md="4">
            <div className="promo-img">
                <table className="promo-img-wrapper">
                    <tr>
                        <td>
                            {/* <img src={require("../images/products/" + props.promoImage) } /> */}
                            <img src={props.promoImage} />
                        </td>
                    </tr>
                </table>
            </div>
          </MDBCol>
          <MDBCol className="promo-description-col" md="8">
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
                            <img src={props.promoPriceChart} />
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