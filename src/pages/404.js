import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO title="404: Not found" />

    <div style={divStyle}>
      <h1 className="text-center text-white">NOT FOUND</h1>
      <h5 style={pStyle}>
        Ooops!.We could not find a page at {location.pathname}.... <br />
        Let's get you back to the church{" "}
        <Link style={linkStyle} to="/">
          Home{" "}
        </Link>{" "}
        page{" "}
      </h5>
    </div>
  </Layout>
)

export default NotFoundPage

const divStyle = {
  width: "100%",
  height: "100vh",
  background: "red",
  padding: "2rem",
  margin: "2rem 0 0 0",
}
const pStyle = {
  textAlign: "center",
  color: "white",
  margin: "10rem auto",
  padding: "2rem",
}
const linkStyle = { color: "red", textDecoration: "underline" }
