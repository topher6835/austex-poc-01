import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const SpecialsItem = (props) => {
    return (
        <div className="specials-item">

            <MDBRow className="my-5 feature-row">
                <MDBCol size="12">
                    <MDBRow className="banner-row">
                        <MDBCol className="d-none d-md-block" md="12">

                            <div className="specials-page-headline-bar">
                                <MDBRow>
                                    <MDBCol md="7">
                                        <h2 className="promo-headline ">{props.specialsItemHeadline}</h2>  {/* promo-headline responsive-title-bar-text*/}
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <h2 className="">Design, Print, Mail</h2> {/* promo-headline-month responsive-title-bar-text*/}
                                    </MDBCol>
                                </MDBRow>
                            </div>

                        </MDBCol>
                        <MDBCol className="d-block d-md-none banner-bar-mobile" md="12">
                            <h3 className="responsive-banner-bar-title-text-mobile">{props.specialsItemHeadline}</h3>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
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
                        {/* <p> */}
                        <div className="content-description">
                            {props.specialsItemText}
                        </div>
                        {/* </p> */}
                    </MDBRow>
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default SpecialsItem;