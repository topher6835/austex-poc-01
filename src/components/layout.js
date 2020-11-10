import React from 'react'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-up'

import Header from './header'
import Footer from './footer'
import '../style/layout.css'
import logoUp from '../images/logos/uparrow.png' /* austex-logo_web-small.png */

const Layout = ({ children }) => (
  <div className={'content'}>
    <Header />
    {children}
    <ScrollToTop showUnder={160} style={{ zIndex: '1'}}>
      <span> { /* style={{ textAlign: 'center' }} */ }
        <img src={logoUp} style={{ height: '66px' }} />  {/* height: '66px', width: '70px' // height 55 */}
        {/* <br />
        <p>TOP</p> */}
      </span>
    </ScrollToTop>
    <Footer style={{marginTop: "10px 1important"}} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
