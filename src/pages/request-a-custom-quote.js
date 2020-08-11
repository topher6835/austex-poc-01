import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/titleBar';
import "../style/requestQuote.css";

class CustomQuote extends Component {
  state = {
    firstName: '',
    lastName: '',
    radio: 1
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }

  handleSubmit = event => {
    //event.preventDefault()
    //alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <SEO title="Request A Quote" />
        <div style={{marginTop: "100px"}}>
            <TitleBar title={"Request A Quote"} />
        </div>
        <MDBContainer>
          <MDBRow><h1 className="request-quote-title">Request a Custom Quote</h1></MDBRow>
          <MDBRow className="request-quote-main-row content-description">
            <form name="get-quote" method="POST">
            {/* <form name="get-quote" method="POST" netlify-honeypot="bot-field" data-netlify="true">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="get-quote" /> */}
              <div className="quote-form-basic-info-section">
                <MDBRow>
                  <MDBCol md="4">
                    <label htmlFor="firstName" className="">
                      First Name
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="lastName" className="">
                      Last Name
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      required

                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="company" className="">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-control"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4">
                    <label htmlFor="email" className="">
                      Email Address
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="phoneNumber" className="">
                      Phone Number
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="tel"
                      pattern="((\+\d{1,3}(-|.| )?\(?\d\)?(-| |.)?\d{1,5})|(\(?\d{2,6}\)?))(-|.| )?(\d{3,4})(-|.| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="salesRep" className="">
                      Your Sales Rep
                      <span className="frm_required"> *</span>
                    </label>
                    <select
                      className="browser-default custom-select"
                      name="salesRep"
                      id="salesRep"
                      data-placeholder="Select an option"
                      required
                    >
                      <option value="" selected="selected" className=""></option>
                      <option value="Becky Harper" className="">
                        Becky Harper
                      </option>
                      <option value="Derek Eastty" className="">
                        Derek Eastty
                      </option>
                      <option value="Marie Eastty" className="">
                        Marie Eastty
                      </option>
                      <option value="Mike Roman" className="">
                        Mike Roman
                      </option>
                      <option value="Mitzi Stiles" className="">
                        Mitzi Stiles
                      </option>
                      <option value="Paul Montoya" className="">
                        Paul Montoya
                      </option>
                      <option value="Richard Arzola" className="">
                        Richard Arzola
                      </option>
                      <option value="Rick Muriello" className="">
                        Rick Muriello{' '}
                      </option>
                      <option value="Teri Lint" className="">
                        Teri Lint
                      </option>
                      <option value="Tish Bender" className="">
                        Tish Bender
                      </option>
                      <option value="- I don&#039;t have a Sales Rep - " className="">
                        - I don&#039;t have a Sales Rep -
                      </option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <label htmlFor="jobDescription" className="">
                      Description of job
                      <span className="frm_required"></span>
                    </label>
                    <textarea
                      type="text"
                      name="jobDescription"
                      id="jobDescription"
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4">
                    <label htmlFor="jobType" className="">
                      Type of job
                      <span class="frm_required"> *</span>
                    </label>
                    <select
                      className="browser-default custom-select"
                      name="jobType"
                      id="jobType"
                      data-placeholder="Select an option"
                      required
                    >
                      <option value="" selected="selected" className=""></option>
                      <option value="Postcard" className="">
                        Postcard
                      </option>
                      <option value="Leaflet or mailer" className="">
                        Leaflet or mailer
                      </option>
                      <option value="Booklet or multi page leaflet" className="">
                        Booklet or multi page leaflet
                      </option>
                      <option value="Business card" className="">
                        Business card
                      </option>
                      <option value="Envelope" className="">
                        Envelope
                      </option>
                      <option value="Carbonless pads" className="">
                        Carbonless pads
                      </option>
                      <option value="Hard back book" className="">
                        Hard back book
                      </option>
                      <option value="Other" className="">
                        Other{' '}
                      </option>
                    </select>
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="pageSize" className="">
                      Page size (eg: 8.5 x 11")
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="text"
                      id="pageSize"
                      name="pageSize"
                      className="form-control"
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <label htmlFor="#ofPages" className="">
                      # of pages (printed sides)
                      <span className="frm_required"> *</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="#ofPages"
                      name="#ofPages"
                      required
                      min="0"
                      max="9999999"
                      step="1"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="3">
                        <label htmlFor="bleed" className="">Do any pages have bleed?
                            <span className="frm_required"></span>
                        </label>
                        <select className="browser-default custom-select" name="bleed" id="bleed" data-placeholder="Select an option">
                            <option value=""  selected="selected" className="">
                            </option>
                            <option value="Yes"  className="">
                            Yes</option>
                            <option value="No"  className="">
                            No</option>
                        </select>
                    </MDBCol>
                    <MDBCol md="3">
                        <label htmlFor="perforations" className="">Do you require perforations?
                            <span className="frm_required"></span>
                        </label>
                        <select className="browser-default custom-select" name="perforations" id="perforations" data-placeholder="Select an option">
                            <option value=""  selected="selected" className="">
                            </option>
                            <option value="Yes" className="">
                            Yes</option>
                            <option value="No" className="">
                            No</option>
                        </select>
                    </MDBCol>
                    <MDBCol md="3">
                        <label htmlFor="printingType" className="">What kind of printing do you require?
                            <span className="frm_required"></span>
                        </label>
                        <select className="browser-default custom-select" name="printingType" id="printingType" data-placeholder="Select an option">
                            <option value=""  selected="selected" className="">
                            </option>
                            <option value="Digital Printing / Copy Job" className="">
                            Digital Printing / Copy Job</option>
                            <option value="Offset Printing" className="">
                            Offset Printing</option>
                        </select>
                    </MDBCol>
                    <MDBCol md="3">
                        <label htmlFor="quantity" className="">Total Finished Quantity
                            <span className="frm_required"></span>
                        </label>
                        <input className="form-control" type="number" id="quantity" name="quantity" value=""min="0" max="9999999" step="1"/>
                    </MDBCol>
                </MDBRow>
              </div>
              <div className="quote-form-color-section">
                  <h3 className="">Colors &amp; Finish</h3>
                  <MDBRow>
                      <MDBCol md="3">
                          <label htmlFor="processColors" className="">Process colors
                              <span className="frm_required"></span>
                          </label>
                          <select className="browser-default custom-select" name="processColors" id="processColors" data-placeholder="Select an option">
                              <option value="" selected="selected" className=""></option>
                              <option value="None" className="">
                              None</option>
                              <option value="One" className="">
                              One</option>
                              <option value="Two" className="">
                              Two</option>
                              <option value="Three" className="">
                              Three</option>
                              <option value="Four" className="">
                              Four</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="3">
                          <label htmlFor="spotColors" className="">Spot colors
                              <span className="frm_required"></span>
                          </label>
                          <select className="browser-default custom-select" name="spotColors" id="spotColors" data-placeholder="Select an option">
                              <option value=""  selected="selected" className=""></option>
                              <option value="None" className="">
                              None</option>
                              <option value="One" className="">
                              One</option>
                              <option value="Two" className="">
                              Two</option>
                              <option value="Three" className="">
                              Three</option>
                              <option value="Four" className="">
                              Four</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="3">
                          <label htmlFor="foilEmboss" className="">Foil or Emboss?
                              <span class="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="foilEmboss" id="foilEmboss" data-placeholder="Select an option" required>
                              <option value="" selected="selected" classNamelass="">
                              </option>
                              <option value="None" className="">
                              None</option>
                              <option value="Foil Only" className="">
                              Foil Only</option>
                              <option value="Emboss Only" className="">
                              Emboss Only</option>
                              <option value="Foil &amp; Emboss" className="">
                              Foil &amp; Emboss</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="3">
                          <label htmlFor="varnish" className="">Varnish
                              <span className="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="varnish" id="varnish" data-placeholder="Select an option" required>
                              <option value="" selected="selected" className=""></option>
                              <option value="None" className="">
                              None</option>
                              <option value="All Over" className="">
                              All Over</option>
                              <option value="Spot" className="">
                              Spot</option>
                          </select>
                      </MDBCol>
                  </MDBRow>
              </div>
              <div className="quote-form-paper-bindery-section">
                  <h3 className="">Paper &amp; Bindery</h3>
                  <MDBRow>
                      <MDBCol md="4">
                          <label htmlFor="coverPaper" className="">Cover Paper
                              <span className="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="coverPaper" id="coverPaper" data-placeholder="Select an option" required>
                              <option value=""  selected="selected" className=""></option>
                              <option value="80# Gloss Cover" className="">
                              80# Gloss Cover</option>
                              <option value="80# Dull Cover" className="">
                              80# Dull Cover</option>
                              <option value="100# Gloss Cover" className="">
                              100# Gloss Cover</option>
                              <option value="100# Dull Cover" className="">
                              100# Dull Cover</option>
                              <option value="80# Uncoated Cover" className="">
                              80# Uncoated Cover</option>
                              <option value="Same as Text" className="">
                              Same as Text</option>
                              <option value="Other" className="">
                              Other</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="4">
                          <label htmlFor="textPaper" className="">Text Paper
                              <span className="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="textPaper" id="textPaper" data-placeholder="Select an option" required>
                              <option value=""  selected="selected" className="">
                              </option>
                              <option value="80# Gloss Text" className="">
                              80# Gloss Text</option>
                              <option value="80# Dull Text" className="">
                              80# Dull Text</option>
                              <option value="100# Gloss Text" className="">
                              100# Gloss Text</option>
                              <option value="100# Dull Text" className="">
                              100# Dull Text</option>
                              <option value="70# Offset Text" className="">
                              70# Offset Text</option>
                              <option value="Same as cover" className="">
                              Same as cover</option>
                              <option value="Other" className="">
                              Other</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="4">
                          <label htmlFor="folding" className="">Folding
                              <span class="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="folding" id="folding" data-placeholder="Select an option" required>
                              <option value=""  selected="selected" className="">
                              </option>
                              <option value="Single fold" className="">
                              Single fold</option>
                              <option value="Folds twice" className="">
                              Folds twice</option>
                              <option value="Folds three times" className="">
                              Folds three times</option>
                              <option value="Folds four times" className="">
                              Folds four times</option>
                              <option value="Map - muliple folds" className="">
                              Map - muliple folds</option>
                              <option value="Other" className="">
                              Other</option>
                          </select>
                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol md="4">
                          <label htmlFor="finishedPageSize" className="">Finished Page Size
                              <span className="frm_required"></span>
                          </label>
                          <input className="form-control" type="text" id="finishedPageSize" name="finishedPageSize"/>
                      </MDBCol>
                      <MDBCol md="4">
                          <label htmlFor="dieCut" className="">Die Cut
                              <span className="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="dieCut" id="dieCut" data-placeholder="Select an option" required>
                              <option value=""  selected="selected" className="">
                              </option>
                              <option value="Yes" className="">
                              Yes</option>
                              <option value="No" className="">
                              No</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="4">
                          <label htmlFor="bindery" className="">Bindery
                              <span className="frm_required"> *</span>
                          </label>
                      <select className="browser-default custom-select" name="bindery" id="bindery" data-placeholder="Select an option" required>
                      <option value="" selected="selected" className=""></option>
                              <option value="Leave flat - no trim" className="">
                              Leave flat - no trim</option>
                              <option value="Trim and box" className="">
                              Trim and box</option>
                              <option value="Fold and trim" className="">
                              Fold and trim</option>
                              <option value="Saddle stitch and trim" className="">
                              Saddle stitch and trim</option>
                              <option value="Perfect bound and trim" className="">
                              Perfect bound and trim</option>
                              <option value="Coil bound" className="">
                              Coil bound</option>
                              <option value="Assemble loose sheets" className="">
                              Assemble loose sheets</option>
                      </select>
                      </MDBCol>
                  </MDBRow>
              </div>
              <div className="quote-form-delivery-section">
                  <MDBRow>
                      <MDBCol md="6">
                          <label htmlFor="shipping" className="">Shipping
                              <span className="frm_required"> *</span>
                          </label>
                          <select className="browser-default custom-select" name="shipping" id="shipping" data-placeholder="Select an option" required>
                          <option value="" selected="selected" className=""></option>
                              <option value="Pick up from Austex" className="">
                              Pick up from Austex</option>
                              <option value="Deliver to address supplied" className="">
                              Deliver to address supplied</option>
                              <option value="This is a direct mail piece" className="">
                              This is a direct mail piece</option>
                              <option value="Ship via carrier" className="">
                              Ship via carrier</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="6">
                          <label htmlFor="packaging" className="">Packaging
                              <span className="frm_required"></span>
                          </label>
                          <select className="browser-default custom-select" name="packaging" id="packaging" data-placeholder="Select an option">
                          <option value=""  selected="selected" className=""></option>
                              <option value="Box" className="">
                              Box</option>
                              <option value="Box in quantities" className="">
                              Box in quantities</option>
                              <option value="Plastic wrap" className="">
                              Plastic wrap</option>
                              <option value="Band in quantities" className="">
                              Band in quantities</option>
                          </select>
                      </MDBCol>
                  </MDBRow>
              </div>
              <div className="quote-form-design-files-section">
                  <h3 class="">Design/Data Files</h3>
                  <MDBRow>
                      <MDBCol md="6">
                          <label htmlFor="fileFormat" className="">File Format
                              <span className="frm_required"></span>
                          </label>
                          <select className="browser-default custom-select" name="fileFormat" id="fileFormat" data-placeholder="Select an option">
                              <option value=""  selected="selected" className=""></option>
                              <option value="PDF" className="">
                              PDF</option>
                              <option value="Adobe InDesign" className="">
                              Adobe InDesign</option>
                              <option value="Quark Express" className="">
                              Quark Express</option>
                              <option value="Adobe Illustrator" className="">
                              Adobe Illustrator</option>
                              <option value="Adobe Photoshop" className="">
                              Adobe Photoshop</option>
                              <option value="Microsoft Publisher" className="">
                              Microsoft Publisher</option>
                              <option value="Microsoft Word" className="">
                              Microsoft Word</option>
                              <option value="Other" className="">
                              Other</option>
                          </select>
                      </MDBCol>
                      <MDBCol md="6">
                          <label htmlFor="sendingVia" className="">Sending via
                              <span className="frm_required"></span>
                          </label>
                          <select className="browser-default custom-select" name="sendingVia" id="sendingVia" data-placeholder="Select an option">
                              <option value=""  selected="selected" className=""></option>
                              <option value="Austex website" className="">
                              Austex website</option>
                              <option value="Other FTP" className="">
                              Other FTP</option>
                              <option value="Email" className="">
                              Email</option>
                              <option value="Disk or Thumb Drive" className="">
                              Disk or Thumb Drive</option>
                          </select>
                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                      <MDBCol md="12">
                          <label htmlFor="additionalInfo" className="">Additional Information
                              <span className="frm_required"></span>
                          </label>
                          <textarea type="text" className="form-control" name="additionalInfo" id="additionalInfo" rows="3"></textarea>
                      </MDBCol>
                  </MDBRow>
              </div>
              <div className="quote-form-receive-info-section">
                  <MDBRow>
                      <MDBCol md="4">
                          <label className="">Receive occasional news &amp; offers from Aus-Tex
                              <span className="frm_required"> *</span>
                          </label>
                        <MDBRow>
                          <MDBCol md="6">
                            <input type="radio" id="receiveNewsYes" name="receiveNews" value="Yes" label="Yes, please!" checked /> <label for="receiveNewsYes">Yes, please!</label>
                          </MDBCol>
                          <MDBCol md="6">
                            <input type="radio" id="receiveNewsNo" name="receiveNews" value="No" /> <label for="receiveNewsNo">No thanks.</label>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                  </MDBRow>
              </div>
              <div className="mt-4">  {/* text-center */}
                <MDBBtn className="quote-submit-button"  type="submit">Submit</MDBBtn>
              </div>
            </form>
          </MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
}

export default CustomQuote
