import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TitleBar from '../components/titleBar'

const PolicyItemBasic = props => (
  <div>
    <MDBListGroup style={{ width: '100%' }}>
      <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
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

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div style={{marginTop: "100px"}}>
        <TitleBar title={"Privacy Policy"} />
      </div>

      <MDBRow className="my-5" style={{ margin: '5px' }}>
        <MDBCol md="1"></MDBCol>
        <MDBCol md="10">
          <MDBRow className="content-description">
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
              <br />
              <PolicyItemBasic
                policyhead={'What personal information do we collect from the people that visit our blog, website or app?'}
                policybody={'When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.'}
              />
              <br />
              <PolicyItemBasic
                policyhead={'When do we collect information?'}
                policybody={'We collect information from you when you place an order or enter information on our site.'}
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
              <div>
                <MDBListGroup style={{ width: '100%' }}>
                  <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">Do we use 'cookies'?</h4>
                    </div>
                    <p className="mb-1">
                      Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                    </p>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">We use cookies to:</h4>
                    </div>
                    <ul>
                      <li>Understand and save user’s preferences for future visits.</li>
                    </ul>
                    <br/>
                    <p className="mb-1">
                      You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser’s Help Menu to learn the correct way to modify your cookies.
                      <br/><br/>
                      If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.It won’t affect the user’s experience that make your site experience more efficient and may not function properly.
                    </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
              <br />
              <PolicyItemBasic
                policyhead={'Third-party disclosure'}
                policybody={'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'}
              />
              <br />
              <PolicyItemBasic
                policyhead={'Third-party links'}
                policybody={'We do not include or offer third-party products or services on our website.'}
              />
              <br />
              <div >
                <MDBListGroup >
                  <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">Google</h4>
                    </div>
                    <p className="mb-1" style={{wordWrap: "break-word"}}>
                      Google’s advertising requirements can be summed up by Google’s Advertising Principles. They are put in place to provide a positive experience for users. <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a>
                      <br/><br/>
                      We have not enabled Google AdSense on our site but we may do so in the future.
                      </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
              <br />
              <PolicyItemBasic
                policyhead={'COPPA (Children Online Privacy Protection Act)'}
                policybody={
                  'When it comes to the collection of personal information from children under the age of 13 years old, the Children’s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States’ consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children’s privacy and safety online. \n \n We do not specifically market to children under the age of 13 years old.'
                }
              />
              <br />
              <div>
                <MDBListGroup style={{ width: '100%' }}>
                  <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">Fair Information Practices</h4>
                    </div>
                    <p className="mb-1">
                      The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
                    </p>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</h4>                      
                    </div>
                    <br />
                    <p className="mb-1">We will notify the users via in-site notification</p>
                    <ul>
                      <li>Within 7 business days</li>
                    </ul>
                    <br/>
                    <p className="mb-1">
                      We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.
                    </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
              <br />
              <div>
                <MDBListGroup style={{ width: '100%' }}>
                  <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">CAN SPAM Act</h4>
                    </div>
                    <p className="mb-1">
                      The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
                    </p>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">We collect your email address in order to:</h4>                      
                    </div>
                    <br />
                    <ul>
                      <li>Process orders and to send information and updates pertaining to orders.</li>
                      <li>Send you additional information related to your product and/or service.</li>
                      <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
                    </ul>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">To be in accordance with CANSPAM, we agree to the following:</h4>                      
                    </div>
                    <br />
                    <ul>
                      <li>Not use false or misleading subjects or email addresses.</li>
                      <li>Identify the message as an advertisement in some reasonable way.</li>
                      <li>Include the physical address of our business or site headquarters.</li>
                      <li>Monitor third-party email marketing services for compliance, if one is used.</li>
                      <li>Honor opt-out/unsubscribe requests quickly.</li>
                      <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
                    </ul>
                    <br/>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">If at any time you would like to unsubscribe from receiving future emails, you can email us at:</h4>                      
                    </div>
                    <p className="mb-1">
                      <a href="mailto:austex@austex.com">austex@austex.com</a> and we will promptly remove you from ALL correspondence.
                    </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
              <br />
              <div>
                <MDBListGroup style={{ width: '100%' }}>
                  <MDBListGroupItem style={{border: "2px solid #1f3f7c"}}>
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">Contacting Us</h4>
                    </div>
                    <p className="mb-1">
                      If there are any questions regarding this privacy policy, you may contact us using the information below.
                    </p>
                    <br/>
                    <p className="mb-1">
                      austex <br/>
                      2431 Forbes Dr. <br/>
                      Austin, TEXAS 78754 <br/>
                      United States
                    </p>
                    <br />
                    <p className="mb-1">
                      <a href="mailto:austex@austex.com">austex@austex.com</a>
                    </p>
                    <br />
                    <p className="mb-1">
                      <a href="tel:512-476-7581">(512) 476-7581</a>
                    </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
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
