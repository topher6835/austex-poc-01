import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';

import Layout from '../components/layout';
import "../style/submitFile.css";

const SubmitFile = () => {
  return (
    <Layout>
        <MDBContainer>
            <MDBRow className="my-5 justify-content-center file-transfer-main-row">
                <MDBCol lg="5">
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
                <MDBCol lg="7">
                    <MDBRow className="justify-content-center">
                        <span ><h4 style={{fontSize: '2rem', marginBottom: '0'}}><MDBIcon icon="file-upload" />  File Upload</h4></span>
                    </MDBRow>
                    <MDBRow className="justify-content-center" >
                        <MDBCol md="12" className="send-file-col">
                            <div className="send-file-div">
                                <form name="file-submit" method="POST">
                                {/* <form name="file-submit" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="file-submit" /> */}
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                                Your Name <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="" name="yourName" className="form-control"/>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                                Your Company <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="" name="company" className="form-control"/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                                Email Address <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="" name="email" className="form-control"/>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                                Phone Number <span className="frm_required"> *</span>
                                            </label>
                                            <input type="text" id="" name="phoneNumber" className="form-control"/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label for="" className="grey-text">Your Sales Representative
                                                <span className="frm_required"> *</span>
                                            </label>
                                            <select name="salesRep" id="" className="browser-default custom-select">
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
                                            <label for="" className="grey-text">
                                                Message or Additional Information
                                                <span className="frm_required"></span>
                                            </label>
                                            <textarea
                                                type="text"
                                                name="additionInfo"
                                                id=""
                                                className="form-control"
                                                rows="3"
                                            ></textarea>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label for="" className="grey-text">
                                                File Upload
                                                <span className="frm_required"> *</span>
                                            </label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                    />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                    Choose file
                                                    </label>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <label className="grey-text">Receive occasional news &amp; offers from Aus-Tex
                                                <span className="frm_required"> *</span>
                                            </label>
                                            <MDBRow>
                                                <MDBCol md="3">
                                                    <input type="radio" id="" name="receiveNews" value="Yes" label="Yes, please!" checked /> <label for="choice1" style={{color: "#000000"}}>Yes, please!</label>
                                                </MDBCol>
                                                <MDBCol md="3">
                                                    <input type="radio" id="" name="receiveNews" value="No" /> <label for="choice2" style={{color: "#000000"}}>No thanks.</label>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
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

/* 
<MDBRow className="justify-content-center">
    <MDBIcon icon="file-upload" style={{fontSize: '6rem', color: '#1f3f7c'}} />
</MDBRow>
<MDBRow className="justify-content-center" >
    <MDBCol md="8" className="send-file-col">
        <div className="send-file-div">
        <MDBRow className="justify-content-center">
        <h5 className="send-file-text">Need to send us a file?</h5>
        </MDBRow>
        <MDBRow className="justify-content-center">
        <Link to="/submit-file">
        <MDBBtn outline color="white" className="send-file-button">
        Click Here!
        </MDBBtn>
        </Link>
        </MDBRow>
        </div>
    </MDBCol>
</MDBRow>
*/
