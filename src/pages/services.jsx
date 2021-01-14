import React from "react"
import Layout from "../components/layout"
import EmbedYouTube from "../components/sermons/OnlineServices"
import SEO from "../components/seo"
const ServicesPages = () => {
  return (
    <Layout>
      <SEO title="Online Services" />
      <EmbedYouTube />
    </Layout>
  )
}
export default ServicesPages
