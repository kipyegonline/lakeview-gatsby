import React, { useState } from "react"

import headerlg from "../images/assets/img/2020/lakeview_lg.jpg.png"
import headermd from "../images/assets/img/2020/march_header.png"
import headersm from "../images/assets/img/2020/LAKEVIEW_SM.jpg.png"
import { makeStyles } from "@material-ui/styles"

const headerDims = () => {
  let w
  if (window !== undefined) {
    w = document.documentElement.clientWidth
  }

  if (w < 480) {
    return headersm
  } else if (w < 768) {
    return headermd
  } else {
    return headerlg
  }
}
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

function SundayService() {
  const [siku, setSiku] = useState(getTime())
  function getTime() {
    const today = new Date()
    const day = today.getDay()

    if (day === 0) {
    } else {
      switch (day) {
        case 1: //mon
          return 6 - day
          break
        case 2: //tue
          return 6 - day
          break
        case 3: //wed
          return 6 - day
          break
        case 4: //thur
          return 6 - day
          break
        case 5: //fri
          return 6 - day
          break
        case 6: //sat
          return "tomorrow at 9:30"
          break
      }
    }
  }

  return <small className="">next service starts in {siku} days</small>
}
