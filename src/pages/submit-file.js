import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TitleBar from '../components/titleBar'
import "../style/submitFile.css"

const SubmitFile = () => {
  return (
    <Layout>
        <SEO title="Submit A File" />
        <div style={{marginTop: "100px"}}>
            <TitleBar title={"Submit A File"} />
        </div>
        <MDBContainer>
            <MDBRow className="my-5 justify-content-center file-transfer-main-row">
                <MDBCol lg="5" className="content-description">
                    <MDBRow>
                        <h4><MDBIcon icon="lock" /> Private FTP Accounts</h4>
                        <p>Aus-Tex is pleased to establish safe and secure FTP accounts for our customers.</p>
                        <p>If you would like us to set up a new account or change the settings on an existing account, simply email or call our Imaging Director. Once your account has been set up, our Imaging Director will contact you with your log-in information.</p>
                        <p>Imaging Director email address is <a href="mailto:imaging@austex.com">imaging@austex.com</a> Or, contact our Imaging Director by phone at <a href="tel:+1-512-476-7581">(512) 476-7581</a>.</p>
                        <ul>
                            <li>For PC users we recommend CoreFTPLite as a FTP software client Download CoreFTPLite here: <a href="http://coreftp.com/download.html" target="_blank">coreftp.com</a></li>
                            <li>For Mac users we recommend Filezilla for Mac as a FTP software client Download Filezilla here: <a href="https://filezilla-project.org/download.php?type=client" target="_blank">filezilla-project.com</a></li>
                        </ul>
                    </MDBRow>
                    <MDBRow>
                        <h4><MDBIcon icon="file-archive" /> File Compression</h4>
                        <p>Aus-Tex recommends the use of WinZip, 7-Zip, or WinRAR to consolidate and compress your print-ready files. Consolidation means all your files will be in one place, and file compression makes for a quicker transfer.</p>
                        <ul>
                            <li>Download WinZip here: <a href="http://www.winzip.com/prod_down.htm" target="_blank">WinZip.com</a></li>
                            <li>Download 7-Zip here: <a href="http://www.7-zip.org/" target="_blank">7-zip.org</a></li>
                            <li>Learn more about WinRAR here: <a href="http://www.rarlab.com/" target="_blank">RARLAB.com</a></li>
                        </ul>
                    </MDBRow>
                    <MDBRow>
                        <h4><MDBIcon icon="save" /> Naming Your Files</h4>
                        <p>To expedite the process, please include the following in your file’s name:</p>
                        <ul>
                            <li>sales representative’s name</li>
                            <li>your company’s name</li>
                            <li>one word description (eg: brochure, booklet, flyer)</li>
                        </ul>
                        <p>For example: “Marie_CityofAustin_Booket.sit”</p>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg="7" className="content-description">
                    <MDBRow className="justify-content-center">
                        <span ><h4 style={{fontSize: '2rem', marginBottom: '0'}}><MDBIcon icon="file-upload" />  File Upload</h4></span>
                    </MDBRow>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="12" className="send-file-col form-descrip" >
                            <p>Please use the form below to send us a file. If you have large or multiple files, please compress them using WinZip, 7Zip, or WinRar before uploading.</p>
                            <p>If you have any issues uploading, or if your file is over 50MB in size, please contact our Imaging Director at <a href="tel:+1-512-476-7581">(512) 476-7581</a> to get instructions for sending through our FTP instead.</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="justify-content-center" >
                        <MDBCol md="12" className="send-file-col">
                            <div className="send-file-div">
                                <form className="send-file-form" name="file-submit" method="POST">
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <label htmlFor="yourName" className="">
                                                Your Name <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="yourName" name="yourName" className="form-control" required />
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <label htmlFor="company" className="">
                                                Your Company <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="company" name="company" className="form-control" required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <label htmlFor="email" className="">
                                                Email Address <span className="frm_required"> *</span>
                                            </label>
                                            <input type="email" id="email" name="email" className="form-control" required />
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <label htmlFor="phoneNumber" className="">
                                                Phone Number <span className="frm_required"> *</span>
                                            </label>
                                            <input 
                                                type="tel" 
                                                pattern="((\+\d{1,3}(-|.| )?\(?\d\)?(-| |.)?\d{1,5})|(\(?\d{2,6}\)?))(-|.| )?(\d{3,4})(-|.| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                                                id="phoneNumber" 
                                                name="phoneNumber" 
                                                className="form-control" 
                                                required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label htmlFor="salesRep" className="">Your Sales Representative
                                                <span className="frm_required"> *</span>
                                            </label>
                                            <select name="salesRep" id="salesRep" className="browser-default custom-select" required>
                                                <option value="" selected="selected" className="">
                                                </option>
                                                <option value="Becky Harper" className="">
                                                Becky Harper</option>
                                                <option value="Betty Armstrong" className="">
                                                Betty Armstrong</option>
                                                <option value="Derek Eastty" className="">
                                                Derek Eastty</option>
                                                <option value="Marie Eastty" className="">
                                                Marie Eastty</option>
                                                <option value="Mitzi Stiles" className="">
                                                Mitzi Stiles</option>
                                                <option value="Paul Montoya" className="">
                                                Paul Montoya</option>
                                                <option value="Richard Arzola" className="">
                                                Richard Arzola</option>
                                                <option value="Rick Murielo" className="">
                                                Rick Murielo</option>
                                                <option value="Teri Lint" className="">
                                                Teri Lint</option>
                                                <option value="- I don&#039;t have a Sales Rep -" className="">
                                                - I don&#039;t have a Sales Rep -</option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label htmlFor="additionInfo" className="">
                                                Message or Additional Information
                                                <span className="frm_required"></span>
                                            </label>
                                            <textarea
                                                type="text"
                                                name="additionInfo"
                                                id="additionInfo"
                                                className="form-control"
                                                rows="3"
                                            ></textarea>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label htmlFor="fileUpload" className="">
                                                File Upload
                                                <span className="frm_required"> *</span>
                                            </label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="fileUpload"
                                                        name="fileUpload"
                                                        required
                                                    />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                        Choose file
                                                    </label>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <div className="submit-file-receive-info-section">
                                        <MDBRow>
                                            <MDBCol md="12">
                                                <label className="">Receive occasional news &amp; offers from Aus-Tex
                                                    <span className="frm_required"> *</span>
                                                </label>
                                                <MDBRow>
                                                    <MDBCol style={{maxWidth: "180px"}}>
                                                        <input type="radio" id="receiveNewsYes" name="receiveNews" value="Yes" label="Yes, please!" checked /> <label for="receiveNewsYes">Yes, please!</label>
                                                    </MDBCol>
                                                    <MDBCol md="3" >
                                                        <input type="radio" id="receiveNewsNo" name="receiveNews" value="No" /> <label for="receiveNewsNo">No thanks.</label>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                        <div className="text-center mt-4">
                                            <MDBBtn className="file-submit-button" type="submit">Submit</MDBBtn>
                                        </div>
                                </form>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </Layout>
  )
}

export default SubmitFile;
