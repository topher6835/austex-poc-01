import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'
import Header from './header1'
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => (
     <>
        <Header />
        {/* <Navbar /> */}
          {children}
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
