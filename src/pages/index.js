import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'

import LeadSpace from '../components/sections/LeadSpace'
import About from '../components/sections/About'

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
    </Layout>
  )
}

export default IndexPage
