import React from 'react';
import PropTypes from 'prop-types';
import Header from './header1';
import Footer from './footer';
import "../style/layout.css";

const Layout = ({ children }) => (
     <>
        <Header />
          {children}
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
