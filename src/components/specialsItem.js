import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import "../style/specialsItem.css";

const SpecialsItem = (props) => {
    return (
        <div className="specials-item">
            <MDBRow className="d-none d-md-block"> {/* DESKTOP */}
                <MDBCol md="12">
                    <div className="specials-page-headline-bar">
                        <MDBRow>
                            <MDBCol md="7">
                                <h2 className="promo-headline">{props.specialsItemHeadline}</h2>
                            </MDBCol>
                            <MDBCol md="5">
                                <h2>Design, Print, Mail</h2> {/* className="promo-headline-month" */}
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow className="d-block d-md-none">  {/* MOBILE */}
                <div className="specials-page-headline-bar">
                    <h2 className="promo-headline responsive-title-bar-text-mobile">{props.specialsItemHeadline}</h2>
                    {/* <h2 className="promo-headline-month">Design, Print, Mail</h2> */}
                </div>
            </MDBRow>


            <MDBRow className="specials-item-content-row">
                <MDBCol className="specials-item-img-col" md="5">
                    <div className="specials-item-img">
                        <table className="specials-item-img-wrapper">
                            <tr>
                                <td>
                                    <img src={props.specialsItemImage} />
                                </td>
                            </tr>
                        </table>
                    </div>
                </MDBCol>
                <MDBCol className="specials-description-col" md="7">
                    <MDBRow>
                        <p>
                            {props.specialsItemText}
                        </p>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default SpecialsItem;