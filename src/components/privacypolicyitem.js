import React from 'react'
import { Link } from 'gatsby'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'

const PrivacyPolicyItem = props => {
    let tempprop = <b>bold</b>;

  return (
      
    <div>
      {/* <h2>{props.policyhead}</h2>
        <p>{props.policybody}</p>
        <br/>
        */}

      <MDBListGroup style={{ width: '100%' }}>
        <MDBListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{props.policyhead}</h4>
          </div>
          <p className="mb-1"> {props.policybody} </p>
          <p className="mb-1"> {props.policybodylist} </p>
          {/* <p className="mb-1"> {tempprop} </p> */}
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
  )
}
export default PrivacyPolicyItem
