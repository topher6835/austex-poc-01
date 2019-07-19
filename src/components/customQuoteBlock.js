import React from 'react';
import { MDBBtn } from 'mdbreact';

import "../style/specialsPage.css";

const CustomQuoteBlock = props => {
    return (
        <div className="left-custom-quote">
            <h2 className="text-center">Need a Custom Quote?</h2>
            <MDBBtn href="http://austex.com/request-a-custom-quote/" className="left-custom-quote-button text-capitalize" style={{backgroundColor: '#ea1d2e !important'}}>
                Click
            </MDBBtn>
            <h2 className="text-center">or Call 512.476.7581</h2>
        </div>
    )
  }
  
  export default CustomQuoteBlock;