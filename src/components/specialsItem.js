import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import "../style/specialsItem.css";

const SpecialsItem = (props) => {
    return (
        <div className="specials-item">
            <MDBRow>
                <div className="specials-page-headline-bar">
                    <h2 className="promo-headline">{props.specialsItemHeadline}</h2>
                    <h2 className="promo-headline-month">Design, Print, Mail</h2>
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