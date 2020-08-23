import React from "react"
import Layout from "../components/layout"
import Fellowship from "../components/fellowship/Fellowship"
import SEO from "../components/seo"

const HomeFellowship = () => {
  return (
    <Layout>
      <SEO title="Home fellowship and Bible study" />
      <Fellowship />
    </Layout>
  )
}

export default HomeFellowship
