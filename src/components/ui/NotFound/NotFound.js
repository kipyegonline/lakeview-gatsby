import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
const NotFound = ({ location }) => (
  <Layout>
    <div style={divStyle}>
      <h5 style={pStyle}>
        Ooops!.We could not find this location {location.pathname}.... <br />
        Let's get you back to our{" "}
        <Link style={linkStyle} to="/">
          Home{" "}
        </Link>{" "}
        page{" "}
      </h5>
    </div>
  </Layout>
)
export default NotFound

const divStyle = {
  width: "100%",
  height: "100vh",
  background: "red",
  padding: "2rem",
  margin: "8rem 0 0 0",
}
const pStyle = {
  textAlign: "center",
  color: "white",
  margin: "10rem auto",
  padding: "2rem",
}
const linkStyle = { color: "red", textDecoration: "underline" }
