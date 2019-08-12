import React from 'react';
import { Link } from "gatsby";
import { MDBBtn } from 'mdbreact';

import "../style/specialsPage.css";

const CustomQuoteBlock = props => {
    return (
        <div className="left-custom-quote">
            <h2 className="text-center">Need a Custom Quote?</h2>
            <Link to="/request-a-custom-quote">
                <MDBBtn  className="left-custom-quote-button text-capitalize" style={{backgroundColor: '#ea1d2e !important'}}>
                    Click
                </MDBBtn>
            </Link>
            <h2 className="text-center">or Call 512.476.7581</h2>
        </div>
    )
  }
  
  export default CustomQuoteBlock;

  // href="http://austex.com/request-a-custom-quote/"