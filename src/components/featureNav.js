import React from "react";
import { Link } from "gatsby"
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";

import icon01 from "../images/icons/icon01.png"
import icon02 from "../images/icons/icon02.png"
import icon03 from "../images/icons/icon03.png"
import icon04 from "../images/icons/icon04.png"
import icon05 from "../images/icons/icon05.png"
import icon06 from "../images/icons/icon06.png"
import icon07 from "../images/icons/icon07.png"
import quickTour from "../images/quick-tour.png"

const FeaturesNav = () => {
    return (
        <MDBContainer style={{marginTop: '20px'}}>
            <MDBRow>
                <MDBCol size="12">
                    <MDBRow className="feature-nav-row">

                        <MDBCol>
                            <Link to="/#feature1">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon05} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    OFFSET PRINTING
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature2">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon01} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    DIGITAL PRINTING
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature3">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon04} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    MAILING {'\&'} FULFILLMENT
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature4">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon02} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    EMBOSSING, FOILING {'\&'} DIE CUTTING
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature5">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon06} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    PROMOTIONAL {'\&'} SPECIALTY ITEMS
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature6">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon07} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    WIDE FORMAT
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol>
                            <Link to="/#feature7">
                                <div className="feature-nav-img z-depth-1-half">
                                    <img src={icon03} alt="" />
                                </div>
                                <div className="feature-nav-name">
                                    GRAPHIC DESIGN {'\&'} ONLINE MARKETING
                                </div>
                            </Link>
                        </MDBCol>

                        {/* <MDBCol style={{ }}>
                            <div className="feature-nav-tour">
                                <img src={quickTour} alt="quick tour" style={{height: '293px', width: '392px'}} />
                                <div style={{height: '37px', lineHeight: '37px'}}>Quick Tour</div>
                            </div>
                        </MDBCol> */}
                        
                    </MDBRow>

                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
    );
}

export default FeaturesNav;
