import React, { Component, Fragment  } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";

import "../style/header.css"
import logo from '../images/Header-Logo-04.png';
import logoSmall from '../images/logos/logo-small.png';

class Header extends Component {
    state = {
        isOpen: false
    };
      
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
          <div>
            <header className="desktop-header">
              <div className="header-main-logo">
                <img
                  className="header-main-logo-img"
                  src={logoSmall}
                  alt="logo"
                />
              </div>

              <div className="upper-bar">
                <nav>
                  <ul className="upper-bar-list">
                    <li className="upper-bar-text">
                      Printing, mailing, design and promotions... all under one
                      roof.
                    </li>
                    <li className="upper-bar-right-links">
                      <span
                        style={{
                          borderBottom: '.14rem solid #ffffff',
                          padding: '.1rem',
                          fontWeight: '500',
                        }}
                      >
                        UPLOAD <MDBIcon icon="file-upload" />
                      </span>
                    </li>
                    <li className="upper-bar-right-links">
                      <span
                        style={{
                          borderBottom: '.14rem solid #ffffff',
                          padding: '.1rem',
                          fontWeight: '500',
                        }}
                      >
                        GET A QUOTE
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="lower-bar">
                <div style={{ float: 'left' }}>
                <ul className="above-nav-list">
                  <li className="above-nav-item">512.476.7581</li>
                  <li className="above-nav-item">
                    email: austex@austex.com
                  </li>
                  <li className="above-nav-item">Directions</li>
                </ul>
                <nav>
                  <ul className="nav-list">
                    <li className="nav-item">Capabilties</li>
                    <li className="nav-item">Equipment</li>
                    <li className="nav-item">Gallery</li>
                    <li className="nav-item">Customer Comments</li>
                    <li className="nav-item">Specials</li>
                  </ul>
                </nav>
                </div>
                <div className="quick-tour-nav">
                  <Fragment>
                    <MDBBtn className="quick-tour-nav-button" style={{backgroundColor: "#203E7C !important"}}>
                      <div className="quick-tour-nav-button-text">Quick Tour &nbsp; <MDBIcon icon="video" className="ml-1" /></div>
                    </MDBBtn>
                  </Fragment>
                </div>
              </div>
            </header>

            <header className="mobile-header">
              <MDBNavbar style={{backgroundColor: '#ffffff'}}  expand="md" >
                <MDBNavbarBrand>
                <img
                  className="header-main-logo-img"
                  src={logoSmall}
                  alt="logo"
                />
                </MDBNavbarBrand>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle className="mobile-nav-item" nav caret>
                                    <span className="mr-2 black-text">Menu</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu style={{backgroundColor: '#1F3F7C'}}>
                                    <MDBDropdownItem className="white-text" href="#!">Capabilties</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Equipment</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Gallery</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Customer Comments</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Specials</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Email</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Directions</MDBDropdownItem>
                                    <MDBDropdownItem className="white-text" href="#!">Get A Quote</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem className="mobile-nav-item">
                            <span className="mr-2 black-text">512.476.7581</span>
                        </MDBNavItem>
                    </MDBNavbarNav>
              </MDBNavbar>
            </header>
          </div>
        )
    }
}

export default Header;