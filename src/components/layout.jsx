import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListItemIcon, List, ListItem, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Facebook from "@material-ui/icons/Facebook"
import PropTypes from "prop-types"
import YouTube from "@material-ui/icons/YouTube"
import IG from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"

import Header from "./header"
import Footer from "./ui/footer/Footer"
import Nav from "./ui/Nav/Nav"
import { icons } from "./icons"
import Give from "./give/Give"
import { ArrowUpwardRounded } from "@material-ui/icons"
///import "./layout.css"

const Layout = ({ children }) => {
  const [socials, showSocials] = React.useState(false)
  const handleNavigation = () => window.scrollTo({ behavior: "smooth", top: 0 })
  const handleScroll = () => {
    const h = document.documentElement.clientHeight
    const arrow = document.querySelector(".navigation-arrow")
    if (arrow) {
      let scrolling = window.scrollY
      if (scrolling > h / 2) {
        arrow.style.visibility = "visible"
        arrow.style.bottom = scrolling / 100 + "%"
      } else {
        arrow.style.visibility = "hidden"
      }
    }
  }
  let arrowSize
  if (window !== undefined) {
    const smallScreen = document.documentElement.clientWidth
    arrowSize = smallScreen > 480 ? "2x" : "2x"
    if (smallScreen < 770) {
      window.onscroll = handleScroll
    }
  }

  React.useEffect(() => {
    let timer = setTimeout(() => showSocials(true), 5000)
    library.add(...icons)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container ">
      <Header Socials={Socials} />
      <Nav />
      <Give />
      {children}
      <Footer />

      <FontAwesomeIcon
        className="navigation-arrow"
        icon="arrow-alt-circle-up"
        size={arrowSize}
        color="purple"
        onClick={handleNavigation}
      />
      {socials ? <Socials useStyles={useStyles} /> : null}
    </div>
  )
}

export default Layout
const useStyles = makeStyles({
  socials: {
    width: 50,
    background: "#fff",
    padding: ".15rem",
    position: "fixed",
    zIndex: 100,
    top: "20%",
    right: 10,
    borderRadius: 5,
    transform: "skew(10,10)",
    margin: "0.25rem auto",
    textAlign: "center",
    transitition: "all .25s ease-in",
    "@media (max-width:480px)": {
      right: -5,
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    textAlign: "center",
  },
})
let url = "https://www.youtube.com/channel/UCVzXXOTTs7PLfh5wjB3KB9g"

const Socials = ({ useStyles }) => {
  const classes = useStyles()
  return (
    <div className={classes.socials}>
      <List className={classes.list}>
        <ListItem
          button
          dense
          onClick={() =>
            window.open(
              "https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
            )
          }
        >
          <ListItemIcon>
            {" "}
            <Facebook fontSize="small" color="primary" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          dense
          onClick={() => window.open("https://twitter.com/lakeviewagc")}
        >
          <ListItemIcon>
            {" "}
            <Twitter fontSize="small" color="primary" />
          </ListItemIcon>
        </ListItem>
        <ListItem button dense onClick={() => window.open(url)}>
          <ListItemIcon>
            {" "}
            <YouTube fontSize="small" color="secondary" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          dense
          onClick={() =>
            window.open("https://www.instagram.com/lakeviewagcnakuru/")
          }
        >
          <ListItemIcon>
            {" "}
            <IG fontSize="small" color="secondary" />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
