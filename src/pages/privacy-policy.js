import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'

import Layout from '../components/layout'
import PrivacyPolicyItem from '../components/privacypolicyitem'

let testdata = { one: 'oneone', two: 'twotwo' }

const PolicyItemBasic = props => (
  <div>
    <MDBListGroup style={{ width: '100%' }}>
      <MDBListGroupItem>
        <div className="d-flex w-100 justify-content-between">
          <h4 className="mb-1">{props.policyhead}</h4>
        </div>

        {/* Body text with line breaks */}
        {props.policybody.split('\n').map(function(item, key) {
          return (
            <p className="mb-1" key={key}>
              {item}
              <br/>
            </p>
          )
        })}
        {/* /Body text with line breaks */}

        <p className="mb-1"> {props.policybodylist} </p>
        <ul>
          {props.listItem1 ? <li>{props.listItem1}</li> : ''}
          {props.listItem2 ? <li>{props.listItem2}</li> : ''}
        </ul>
      </MDBListGroupItem>
    </MDBListGroup>
  </div>
)

/*
  <PolicyItem1 policyhead="aaa" policybody="bbb" policybodylist="ccc" />"
  <PolicyItem1 policyhead="xxx" policybody="yyy" policybodylist="zzz" />"
*/

const PrivacyPolicy = () => {
  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>Privacy Policy Page</h2>

      <MDBRow className="my-5" style={{ margin: '5px' }}>
        <MDBCol md="1"></MDBCol>
        <MDBCol size="10">
          <MDBRow>
            <p style={{ textAlign: 'center', width: '100%' }}>
              This privacy policy has been compiled to better serve those who
              are concerned with how their ‘Personally Identifiable Information’
              (PII) is being used online. PII, as described in US privacy law
              and information security, is information that can be used on its
              own or with other information to identify, contact, or locate a
              single person, or to identify an individual in context. Please
              read our privacy policy carefully to get a clear understanding of
              how we collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>
          </MDBRow>
          <MDBRow>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              <p style={{ textAlign: 'center', width: '100%' }}>
                Privacy Content Here
              </p>

              <PolicyItemBasic
                policyhead="aaa"
                policybody="bbb"
                policybodylist="ccc"
                listItem1="ddd"
                listItem2="eee"
              />
              <br />
              <PrivacyPolicyItem
                policyhead={
                  'What personal information do we collect from the people that visit our blog, website or app?'
                }
                policybody={
                  'When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.'
                }
              />

              <br />
              <PrivacyPolicyItem
                policyhead={'When do we collect information?'}
                policybody={
                  'We collect information from you when you place an order or enter information on our site.'
                }
              />
              <br />
              <PolicyItemBasic
                policyhead={'How do we use your information?'}
                policybody={'We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:'}
                listItem1={'To quickly process your transactions.'}
                listItem2={'To follow up with them after correspondence (live chat, email or phone inquiries).'}
              />
              <br />
              <PolicyItemBasic
                policyhead={'How do we protect your information?'}
                policybody={
                  `Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
                  We use regular Malware Scanning.
                  Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
                  We implement a variety of security measures when a user places an order to maintain the safety of your personal information.
                  All transactions are processed through a gateway provider and are not stored or processed on our servers.`
                }
              />
              <br />
              <PrivacyPolicyItem
                policyhead={'Policy item heading'}
                policybody={
                  'Donec id elit non mi porta gravida at eget metus. Maecenas sed diameget risus varius blandit.'
                }
              />
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="1"></MDBCol>
      </MDBRow>
    </Layout>
  )
}
export default PrivacyPolicy
