import React from "react"
import { Link } from "gatsby"
import {
  QuickContacts,
  PrayerDays,
  WeeklyEvents,
  Give,
} from "../../Home/events/Events"
import { Typography, Box, Grid } from "@material-ui/core"
const Footer = () => (
  <Box style={footer} className="footer py-2 container">
    <Grid container justify="space-evenly" alignItems="flex-start">
      <Grid item xs={12} md={3} lg={3}>
        {" "}
        <PrayerDays />
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        {" "}
        <QuickContacts />
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <WeeklyEvents />
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Give />
      </Grid>
    </Grid>

    <Typography
      style={style}
      className="m-0 py-2 purple darken-2 text-center text-white"
      variant="h6"
    >
      {" "}
      Copyright &copy; {new Date().getFullYear()} Lakeview Africa Gospel Church.
      All rights reserved.
      <Link className="ml-5" target="_blank" to="/admin">
        staff
      </Link>
    </Typography>
  </Box>
)

export default Footer
const style = {
  fontSize: "1.25rem",
  fontFamily: "georgia",
  fontWeight: "normal",
  marginBottom: "1px solid #fefefe",
}
const footer = {
  color: "#000",
  borderRadius: "5px",
  marginTop: "1rem",
  borderTop: "1px solid rebeccapurple",
  boxShadow: "-2px -2px 5px purple,2px 2px 5px purple",
}
