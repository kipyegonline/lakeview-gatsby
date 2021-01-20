import React from "react"
import { Link } from "gatsby"
import {
  Grid,
  CardHeader,
  CardMedia,
  Card,
  Divider,
  Box,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  TextField,
} from "@material-ui/core"
import DatePicker from "react-datepicker"
import ArrowIcon from "@material-ui/icons/Link"
import ErrorIcon from "@material-ui/icons/Error"
import fasting from "../../../images/assets/img/2021/fastingwide.png"

import fastwrapper from "../../../images/assets/img/2021/fastwrapper.png"
const Intro = ({ churcharea = [], fast = {}, getDate, selected }) => {
  const PrayerFasting = (
    <Box>
      <Typography className="my-2">
        <Link to="/prayer-and-fasting">
          <ArrowIcon /> 21 days of prayers and fasting
        </Link>
      </Typography>
      <Typography variant="subtitle1">
        10<sup>th</sup>-31<sup>st</sup>January 2021 (
        <span className="text-danger">Day {fast?.id}</span>)
      </Typography>
    </Box>
  )
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        {/* grid one*/}
        <Grid item className="p-2 mb-1 mx-2 my-2" xs={12} md={4} lg={4}>
          <Card className="p-4">
            {" "}
            <Typography className=" r ">
              {" "}
              <strong>
                Theme of the Year - {new Date().getFullYear()}
              </strong>{" "}
            </Typography>
            <Typography variant="body2" className="font-weight-bold">
              LIVE (Rooted and Built in him)
            </Typography>
            {new Date().getMonth() < 1 && PrayerFasting}
          </Card>
        </Grid>

        {/* grid 2*/}
        <Grid className=" mr-2    my-2  p-2 mt-2 " xs={12} md={4} lg={4} item>
          <Card className="p-1">
            <Typography className=" r mb-2">
              <strong>
                Scripture of the Year - {new Date().getFullYear()}
              </strong>
            </Typography>
            <Typography>
              {" "}
              <q>
                {" "}
                So then,just as you received Christ Jest as Lord,continue to
                live in him,rooted and built in him.
              </q>
              <strong className="ml-3">-Colossians 2:6-7</strong>
            </Typography>
          </Card>
        </Grid>
        {/* grid 3*/}
        <Grid xs={12} md={3} lg={3} item className="d p-2">
          {/*<!-- Responsive section -->*/}
          <Card className=" p-2 m-2 ">
            {" "}
            <Typography
              variant="body1"
              className=" text-heading text-uppercase text-lg font-weight-bold   mb-2 "
            >
              {" "}
              Sunday Service
            </Typography>
            <Box className="my-3">
              <Typography variant="body1" className="mb-2">
                First service - 9:30 AM{" "}
              </Typography>
              <Typography> Second Service - 11:30 AM </Typography>
            </Box>
          </Card>
          {/*<!--End Responsive -->*/}
        </Grid>
      </Grid>

      {new Date().getMonth() < 1 && (
        <Fasting {...fast} getDate={getDate} selected={selected} />
      )}

      <Divider />
      <Celebrating churcharea={churcharea[0]} />
      <Divider />
      <Fellowship churcharea={churcharea[1]} />
      <Divider />
      <Companionship churcharea={churcharea[2]} />
      <Divider />
      <Missions churcharea={churcharea[3]} />
    </Box>
  )
}
export default Intro

const Celebrating = ({ churcharea }) => (
  <Card>
    <CardHeader
      title=" Celebrating and sharing the love of God."
      className="text-center my-1 p-0 purped"
    />

    <CardContent className=" my-1 p-3">
      <Box className="w-50 float-right">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
          height={200}
          width={100}
        />{" "}
      </Box>

      <Typography className=" my-1  ">
        {" "}
        Welcome to Lakeview Africa Gospel Church official website.
        <br /> We are delighted to have you in our church;{" "}
        <q> a house of prayer for all people </q>- Isaiah 56:7. We are bound by
        our vision of sharing the light of the gospel of the Lord Jesus in
        Nakuru and beyond.
      </Typography>
    </CardContent>
  </Card>
)

const Fellowship = ({ churcharea }) => (
  <Card>
    <CardHeader title="Fellowship" className="text-center my-1 p-0 purped" />
    <CardContent className=" my-1 p-3">
      <Box className="w-50 float-right">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
          height={200}
          width={100}
        />{" "}
      </Box>
      <Typography className=" my-1 p-0">
        At Lakeview AGC, we proclaim the Gospel of Jesus Christ to all people
        through preaching the word of God, Prayers, fellowship and communion.{" "}
      </Typography>
    </CardContent>
  </Card>
)

const Companionship = ({ churcharea }) => (
  <Card>
    <CardHeader
      title="Companionship"
      className="text-center my-1 p-1 purped "
    />

    <CardContent className=" my-1 p-3">
      <Box className="w-50 float-right">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
          height={200}
          width={100}
        />{" "}
      </Box>
      <Typography className=" my-1 p-0">
        {" "}
        We believe in companionship as a family bound by the body of Jesus
        Christ. We endeavor , through word and deed, to witness and undertake
        projects and programmes that lessen and free people from the bondage of
        sin, poverty and disease and lead a Christian life in a Christian
        environment that inculcate the fruits of holy spirit as envisaged in
        Galatians 5:6.{" "}
      </Typography>
    </CardContent>
  </Card>
)
const Missions = ({ churcharea }) => (
  <Card>
    <CardHeader
      title="  Missions and Partnerships"
      className="text-center my-1 p-0 purped"
    />
    <CardContent className=" my-1 p-3">
      <Box className="w-50 float-right">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
          height={200}
          width={100}
        />{" "}
      </Box>
      <Typography>
        {" "}
        We thank God for His blessings and for allowing us to reach the people
        of Turkana and Kakuma refugee camps.We are currently partnering with AGC
        mission station- Turkana/Kakuma.the missionaries on ground are{" "}
        <b>Zacceus</b> and <b>Faith Siele</b>.
      </Typography>
      <Typography>
        {" "}
        We thank God for our church plant Olive Fellowship AGC.Let's continue to
        pray for them.
      </Typography>
    </CardContent>
  </Card>
)

export const Fasting = ({
  date,
  title,
  subtitle,
  message,
  id,
  verse,
  getDate,
  selected,
}) => {
  const DatePickers = (
    <TextField
      type="date"
      onChange={getDate}
      error
      variant="filled"
      size="small"
      value={selected}
      helperText="Check fasting day"
    />
  )
  const dayz = {
    background: "rgba(0,0,0,.75)",
    color: "white",
    padding: 10,
    borderRadius: "60%",
    fontSize: ".75rem",
    fontWeight: "bold",
    border: "2px solid white",
    position: "absolute",
    top: 0,

    margin: 5,
  }
  return (
    <Card
      className="w-100 mb-3 p-2 position-relative"
      style={{ background: "#ccc" }}
    >
      <small style={dayz}>Day {id}</small>
      <Typography
        variant="subtitle2"
        align="center"
        className="p-0 m-0 text-primary"
      >
        {" "}
        {date ? new Date(date).toDateString() : new Date().toDateString()}
      </Typography>
      <CardHeader
        className="text-center text-transform my-1 p-0 purped"
        title={
          <Typography variant="h6">
            21 Days of Prayer and Fasting {"       "}
          </Typography>
        }
      />

      <CardContent className=" my-1 p-3">
        <Box className=" floater">
          <CardMedia
            component="img"
            src={fasting}
            className="thumbnail mx-2 w-100"
            height="auto"
            width="100%"
          />{" "}
        </Box>
        {!!id ? (
          <Box>
            <Typography align="center" variant="h6">
              {title}
            </Typography>
            <Typography variant="body1" className="mb-2">
              {subtitle}
            </Typography>
            <Typography variant="subtitle2">{verse}</Typography>
            <Typography paragraph className="mb-2">
              <q> {message}</q>
            </Typography>
            <div className="my-2">
              <Divider />
              <div className="mt-3">
                {DatePickers} |
                <Typography>
                  {" "}
                  <Link to="/prayer-and-fasting" clasName="ml-3">
                    See all the 21 days of prayer and fasting.
                  </Link>
                </Typography>
              </div>
            </div>
          </Box>
        ) : id === 0 ? (
          <div className="p-4 mx-auto m-2 text-danger">
            <Typography align="center">
              {" "}
              <ErrorIcon color="secondary" /> Error loading data
            </Typography>{" "}
          </div>
        ) : (
          <div className="text-center my-4 mx-auto p-4">
            <CircularProgress size="3rem" color="primary" />
            <Typography>Loading...</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
