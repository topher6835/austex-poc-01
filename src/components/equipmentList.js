import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Equipment = props => {
  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol md="12">
                <h3>Equipment list here.</h3>
                <ul>
                    <li>Equipment 1</li>
                    <li>Equipment 2</li>
                    <li>Equipment 3</li>
                    <li>etc</li>
                </ul>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}

export default Equipment;