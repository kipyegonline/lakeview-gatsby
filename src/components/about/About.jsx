import React, { useState } from "react"
import { Link as NavLink } from "gatsby"
import History from "./History"
import { Vision, Purpose, WhoWeAreTab } from "./WhoWeAre"
import PStaff from "./Staff"

const About = ({ children }) => {
  const [current, showCurrent] = useState(0)
  let Jsx
  switch (current) {
    case 0:
      Jsx = WhoWeAreTab
      break
    case 1:
      Jsx = PStaff
      break
    case 2:
      Jsx = History
      break
    default:
      Jsx = WhoWeAreTab
      break
  }
  return (
    <div className="about-routes">
      <AboutNav current={current} setCurrent={showCurrent} />
      <Jsx />
    </div>
  )
}
export default About
const selectedStyle = {
  color: "white",
  borderBottom: "1px solid purple",
  textDecoration: "none",
  padding: ".25rem",
}

export const AboutNav = ({ current, setCurrent }) => {
  let w
  if (globalThis.window) {
    w = document.documentElement.clientWidth
  }

  const style = {
    background: "purple",
    transition: "all .3s ease-in-out",
    fontSize: "1.5rem",
    borderBottom: "1px solid purple",
  }

  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 })
  }
  let links
  if (globalThis.window) {
    links = document.querySelectorAll(".about-link")
  }

  if (w < 480) {
    const aboutLinks = [...links]

    aboutLinks.forEach(link => link.addEventListener("click", handleClick))
  }
  const handleMenu = (e, num) => {
    setCurrent(num)
    const lis = [...links]
    lis.forEach(li => li.classList.remove("highlight"))
    e.target.classList.add("higlight")
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="about-list red lighten-2 ">
          <li
            className="text-white about-link"
            style={current === 0 ? style : { color: "white" }}
            onClick={e => handleMenu(e, 0)}
          >
            Who We Are
          </li>

          <li
            className="text-white about-link"
            style={current === 1 ? style : { color: "white" }}
            onClick={e => handleMenu(e, 1)}
          >
            Pastoral Staff
          </li>

          <li
            className="text-white about-link"
            style={current === 2 ? style : { color: "white" }}
            onClick={e => handleMenu(e, 2)}
          >
            History{" "}
          </li>
        </ul>
      </div>
    </div>
  )
}
