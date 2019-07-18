import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import "../style/promoItem.css";

const PromoItem = (props) => {
    return (
      <div className="promo-item">
        <MDBRow>
          <div className="specials-page-headline-bar">
            <h2 className="promo-headline">Promotional Item of the Month!</h2>
            <h2 className="promo-headline-month">Month</h2>
          </div>
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
          <MDBCol className="promo-catalog-col" style={{minWidth: '350px'}}>
            <div className="promo-catalog-image" >
                
                <table className="promo-catalog-image-wrapper">
                    <tr>
                        <td>
                            <img src={props.promoPriceChart}  /> {/* style={{minWidth: '350px'}} */}
                            <br />
                            *prices shown are per piece
                        </td>
                    </tr>
                    
                    <tr >
                        <MDBBtn className="browse-catalog-button text-capitalize" style={{backgroundColor: '#ea1d2e !important'}}>Browse Catalog</MDBBtn>
                    </tr>
                </table>
                
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
}

export default PromoItem;