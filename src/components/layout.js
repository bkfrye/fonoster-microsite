import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import './fonts.css'
import './layout.css'

const Layout = ({ children }) => {

  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
