import React from 'react'
import Layout from '@components/layout'
// import SEO from '../components/seo'

import LeadSpace from '@sections/LeadSpace'
import About from '@sections/About'
import Benefits from '@sections/Benefits'
import Marketplace from '@sections/Marketplace'
import GettingStarted from '@sections/GettingStarted'
import Banner from '@sections/Banner'

const IndexPage = () => {

  return (
    <Layout>
      <LeadSpace />
      <About />
      <Benefits />
      <Marketplace />
      <GettingStarted />
      <Banner />
    </Layout>
  )
}

export default IndexPage
