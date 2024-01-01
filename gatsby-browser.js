/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import "antd/dist/antd.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReactGa from "react-ga"
import "mdbootstrap/css/mdb.min.css"

import "bootstrap"
import "typeface-raleway"
import "typeface-roboto"
import "./src/css/lakeview.css"
import "./src/css/tailwind.css"
import "./src/scss/lakeview.css"

const TrackingId = "UA-138672264-2"
ReactGa.initialize(TrackingId)
ReactGa.pageview(window.location.pathname)

//G-P9ZM6X4CQG
