import React from "react"
import { makeStyles } from "@material-ui/styles"
import headerlg from "../../../images/assets/img/2020/lakeview_lg.jpg.png"
import headermd from "../../../images/assets/img/2020/march_header.png"
import headersm from "../../../images/assets/img/2020/LAKEVIEW_SM.jpg.png"

const headerDims = () => {
  let w = document.documentElement.clientWidth
  if (w < 480) {
    return headersm
  } else if (w < 768) {
    return headermd
  } else {
    return headerlg
  }
}

/*
const navStyles = makeStyles({
  socials: {
    width: 50,
    background: "#fff",
    padding: ".35rem",
    position: "absolute",
    top: "30%",
    left: "85%",
    borderRadius: 5,
    transitition: "all .25s ease-in",
    "@media (max-width:480px)": {
      display: "none",
    },
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
})
*/
const header = {
  backgroundImage: `url(${headerDims()})`,
  backgroundSize: "contain",
  maxWidth: "1000px",
  padding: ".5rem",
  border: "1px solid rebecccapurpple",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  height: 125,
}
const Header = () => {
  return (
    <div id="header" className="my-1" style={header}>
      {/*  <div className=" tagline-upper top-header text-center text-heading  text-shadow  d-none d-lg-block" >Lakeview AGC </div>
   
    <h3 className="tagline-upper text-center text-heading d-none d-lg-block   p-1 text-shadow  text-expanded  text-lg"> The Whole Church taking the Whole Gospel to the Whole World  </h3> 
    */}
    </div>
  )
}
export default Header
