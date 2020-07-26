import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'

import LeadSpace from '../components/sections/LeadSpace'
import About from '../components/sections/About'
import Benefits from '../components/sections/Benefits'
import Marketplace from '../components/sections/Marketplace'

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //
  //   }
  // `)
  return (
    <Layout>
      <LeadSpace />
      <About />
      <Benefits />
      <Marketplace />
    </Layout>
  )
}

export default IndexPage
