import React, { Component, Fragment  } from 'react';
import { Link } from "gatsby";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";

import "../style/header.css";
import logoSmall from '../images/logos/Austex logo_web.png';

class Header extends Component {
    // state = {
    //     isOpen: false
    // };
      
    // toggleCollapse = () => {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }

    render() {
        return (
          <div>
            <header className="desktop-header">
              <div className="header-main-logo">
                <Link to="/">
                  <img
                    className="header-main-logo-img"
                    src={logoSmall}
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="upper-bar">
                <nav>
                  <ul className="upper-bar-list">
                    <li className="upper-bar-text">
                      Printing, mailing, design and promotions... all under one
                      roof.
                    </li>
                    <li className="upper-bar-right-item">
                      <Link to="/submit-file" className="upper-bar-right-item-link">
                        <span>
                          UPLOAD <MDBIcon icon="file-upload" />
                        </span>
                      </Link>
                    </li>
                    <li className="upper-bar-right-item">
                      <Link to="/request-a-custom-quote" className="upper-bar-right-item-link">
                        <span>
                          GET A QUOTE
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="lower-bar">
                <div style={{ float: 'left' }}>
                  <ul className="above-nav-list">
                    <li className="above-nav-item" style={{cursor: 'default'}}>512.476.7581</li>
                      <a href="mailto:email0@email.com" className="above-nav-item">
                        <li>
                          email: austex@austex.com
                        </li>
                      </a>
                    <Link to="/directions" className="above-nav-item"><li>Directions</li></Link>
                  </ul>
                  <nav>
                    <ul className="nav-list">
                      <Link to="/gallery" className="nav-item"><li>Our Story</li></Link>
                      <Link to="/gallery" className="nav-item"><li>Gallery</li></Link>
                      <Link to="/gallery" className="nav-item"><li>Customer Comments</li></Link>
                      <Link to="/specials" className="nav-item"><li>Specials</li></Link>
                    </ul>
                  </nav>
                </div>
                <div className="quick-tour-nav">
                  <Fragment>
                    <MDBBtn className="quick-tour-nav-button z-depth-0" style={{backgroundColor: "#203E7C !important"}}>
                      <div className="quick-tour-nav-button-text">Quick Tour &nbsp; <MDBIcon icon="video" className="ml-1" /></div>
                    </MDBBtn>
                  </Fragment>
                </div>
              </div>
            </header>

            <header className="mobile-header">
              <MDBNavbar style={{backgroundColor: '#ffffff'}}  expand="md" >
                <MDBNavbarBrand>
                  <Link to="/">
                    <img
                      className="header-main-logo-img"
                      src={logoSmall}
                      alt="logo"
                    />
                  </Link>
                </MDBNavbarBrand>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle className="mobile-nav-item" nav>
                                    <span className="mr-2 black-text" style={{marginRight: '0'}}>Menu</span> <MDBIcon icon="bars"/>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="mobile-dropdown-menu">
                                  <Link to="/gallery"><MDBDropdownItem className="white-text mobile-drop-item">Capabilties</MDBDropdownItem></Link>
                                  <Link to="/gallery"><MDBDropdownItem className="white-text mobile-drop-item">Equipment</MDBDropdownItem></Link>
                                  <Link to="/gallery"><MDBDropdownItem className="white-text mobile-drop-item">Gallery</MDBDropdownItem></Link>
                                  <Link to="/gallery"><MDBDropdownItem className="white-text mobile-drop-item">Customer Comments</MDBDropdownItem></Link>
                                  <Link to="/specials"><MDBDropdownItem className="white-text mobile-drop-item">Specials</MDBDropdownItem></Link>
                                  <Link to="/request-a-custom-quote">
                                    <MDBDropdownItem className="white-text mobile-drop-item">Get A Quote</MDBDropdownItem>
                                  </Link>
                                  <Link to="/"><MDBDropdownItem className="white-text mobile-drop-item">Directions</MDBDropdownItem></Link>
                                  <a href="mailto:email0@email.com"><MDBDropdownItem className="white-text mobile-drop-item">Email</MDBDropdownItem></a>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    
                    <MDBNavbarNav right>
                        <MDBNavItem className="mobile-nav-item mobile-phone">
                          <a href="tel:+1-555-555-5555"><span className="mr-2 black-text">512.476.7581</span></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
              </MDBNavbar>
            </header>
          </div>
        )
    }
}

export default Header;