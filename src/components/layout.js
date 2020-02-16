import React from 'react'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-up'

import Header from './header'
import Footer from './footer'
import '../style/layout.css'
import logoUp from '../images/logos/logo-up-small.png'

const Layout = ({ children }) => (
  <div className={'content'}>
    <Header />
    {children}
    <ScrollToTop showUnder={160} style={{ zIndex: '1' }}>
      <span style={{ textAlign: 'center' }}>
        <img src={logoUp} style={{ height: '55px', width: '70px' }} />
        <br />
        <p>TOP</p>
      </span>
    </ScrollToTop>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
