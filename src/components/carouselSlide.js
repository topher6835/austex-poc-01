import React from "react";
import { Link } from "gatsby";
import { MDBRow, MDBCol } from "mdbreact";

import TitleBar from './titleBar';

const CarouselSlide = (props) => {
    return (
        <div>
        <Link to={props.link}>
            <img src={props.slideImage} />
            <div className="legend legend-override">

            <div style={{marginTop: "15px"}}>
                <TitleBar title={props.banner} carousel={true} />
            </div>
                
                {/* <MDBRow className="legend-banner-row">
                    <MDBCol className="d-none d-md-block legend-banner-bar-desktop" md="7">
                        <h2>{props.banner}</h2>
                    </MDBCol>
                    <MDBCol className="d-block d-md-none legend-banner-bar-mobile" md="5">
                        <h3 style={{lineHeight: '45px', fontWeight: '500'}}>{props.banner}</h3>
                    </MDBCol>
                </MDBRow> */}

                <MDBRow>
                    <MDBCol md="9" style={{paddingTop: '20px'}} ></MDBCol> {/* previous Cols: 7/5*/}
                    <MDBCol md="3">
                        <div className='carousel-text-box'>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '60px' }}>
                                {/* {props.text} */}
                            </div>
                        </div>
                    </MDBCol>
            </MDBRow>
        </div>
        </Link>
    </div>
    )
}
export default CarouselSlide;