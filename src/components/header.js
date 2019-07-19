import React from 'react';
import { MDBIcon } from "mdbreact";
import logoSmall from '../images/logos/logo-small.png';
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={headerStyles.headerMainLogo}>
                <img className={headerStyles.headerMainLogoImg} src={logoSmall} alt="logo" />
            </div>

            <div className={headerStyles.upperBar} >
                <nav>
                    <ul className={headerStyles.upperBarList}>
                        <li className={headerStyles.upperBarText}>Printing, mailing, design and promotions... all under one roof.</li>
                        <li className={headerStyles.upperBarRightLinks}>
                            <span style={{ borderBottom: '.14rem solid #ffffff', padding: '.1rem', fontWeight: '500'}}>UPLOAD <MDBIcon icon="file-upload" /></span>
                        </li>
                        <li className={headerStyles.upperBarRightLinks}>
                            <span style={{ borderBottom: '.14rem solid #ffffff', padding: '.1rem', fontWeight: '500'}}>GET A QUOTE</span>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={headerStyles.lowerBar}>
                <ul className={headerStyles.aboveNavList}>
                    <li className={headerStyles.aboveNavItem}>512.476.7581</li>
                    <li className={headerStyles.aboveNavItem}>email: austex@austex.com</li>
                    <li className={headerStyles.aboveNavItem}>Directions</li>
                </ul>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li className={headerStyles.navItem}>Capabilties</li>
                        <li className={headerStyles.navItem}>Equipment</li>
                        <li className={headerStyles.navItem}>Gallery</li>
                        <li className={headerStyles.navItem}>Customer Comments</li>
                        <li className={headerStyles.navItem}>Specials</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Header;