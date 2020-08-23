import React from "react"
import Layout from "../components/layout"
import Contacts from "../components/contact/Contact"
import SEO from "../components/seo"

const GetInTouch = () => {
  return (
    <Layout>
      <SEO title="Contact us" />
      <Contacts />
    </Layout>
  )
}

export default GetInTouch
