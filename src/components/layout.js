import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './fonts.css'
import './layout.css'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
