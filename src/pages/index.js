import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'

import LeadSpace from '../components/sections/LeadSpace'
import About from '../components/sections/About'
import Benefits from '../components/sections/Benefits'
import Marketplace from '../components/sections/Marketplace'
import GettingStarted from '../components/sections/GettingStarted'

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
      <GettingStarted />
    </Layout>
  )
}

export default IndexPage
