import React from "react"
import { Link } from "gatsby"
import moment from "moment"
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

import theme from "../../../images/assets/img/2022/theme_of_the_year.jpg"
import theme2024 from "../../../images/assets/img/2024/IMG-20231230-WA0008.jpg"
import { makeStyles, StylesContext } from "@material-ui/styles"
import { Pagination } from "@material-ui/lab"
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
          <Card
            className="p-4"
            style={{
              minHeight: 160,

              padding: "1rem",
              textAlign: "center",
            }}
          >
            {" "}
            <Typography className=" r " variant="body1">
              {" "}
              <strong>
                Theme of the Year - {new Date().getFullYear()}
              </strong>{" "}
            </Typography>
            <Typography variant="body2" className="font-weight-bold mb-2">
              <q> A Heart for the Harvest </q>
            </Typography>
          </Card>
        </Grid>

        {/* grid 2*/}
        <Grid
          className=" mr-2    my-2  p-2 mt-2 "
          // sx={{ border: "1px solid red" }}
          xs={12}
          md={4}
          lg={4}
          item
        >
          <Card
            className="p-1 "
            style={{
              minHeight: 160,

              padding: "1rem",
              textAlign: "center",
            }}
          >
            <Typography className=" r mb-2">
              <strong>
                Scripture of the Year - {new Date().getFullYear()}
              </strong>
            </Typography>
            <Typography className="font-semibold">
              Mathew 9:35-Mathew 10:1
            </Typography>
          </Card>
        </Grid>
        {/* grid 3*/}
        <Grid xs={12} md={3} lg={3} item className="d p-2">
          {/*<!-- Responsive section -->*/}
          <Card
            className=" p-2 m-2 "
            style={{
              minHeight: 150,

              padding: "1rem",
              textAlign: "center",
            }}
          >
            {" "}
            <Typography
              variant="body1"
              style={{ fontWeight: "bold" }}
              className=" text-heading text-uppercase text-lg font-bold   mb-2 "
            >
              {" "}
              Sunday Service
            </Typography>
            <Box className="my-3">
              <Typography variant="body2" className="mb-2">
                First service 8:30 - 9:45 AM{" "}
              </Typography>
              <Typography variant="body2" className="mb-2">
                {" "}
                Second Service 10:00 - 11:30 AM{" "}
              </Typography>
              <Typography variant="body2">
                {" "}
                Youth Service & Sunday School 9:30 - 11:30 AM{" "}
              </Typography>
            </Box>
          </Card>
          {/*<!--End Responsive -->*/}
        </Grid>
      </Grid>

      {!!fast?.id &&
        new Date().getMonth() < 1 &&
        new Date().getFullYear() === 2022 && (
          <>
            <Fasting {...fast} getDate={getDate} selected={selected} />
          </>
        )}

      <Divider className="mt-4" />
      <Celebrating churcharea={churcharea[0]} />
      <Divider className="mt-4" />
      <Fellowship churcharea={churcharea[1]} />
      <Divider className="mt-4" />
      <Companionship churcharea={churcharea[2]} />
      <Divider className="mt-4" />
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
      <Box className=" float-right">
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
      <Box className=" float-right">
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
      <Box className=" float-right">
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
      <Box className=" float-right">
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
        We were honoured to have <b>Rev Isaac Saoshiro</b>, the founder of
        Lakeview AGC.{" "}
      </Typography>
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
      className="w-100 mb-3 my-2 p-2 position-relative"
      style={{ background: "#ccc" }}
    >
      <small style={dayz}>
        Day{" "}
        {new Date(date).getDate() - new Date("2022", "0", "10").getDate() + 1}
      </small>
      <Typography
        variant="subtitle2"
        align="center"
        className="p-0 m-0 text-primary"
      >
        {" "}
        {date
          ? moment(date).format("dddd,MMMM Do, YYYY")
          : moment().format("dddd,MMMM Do, YYYY")}
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
                <Typography>
                  {" "}
                  <Link to="/prayer-and-fasting" clasName="ml-3">
                    See all the 20 days of prayer and fasting.
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
const imgStyles = makeStyles({
  img: {
    "max-width": "600px",
    width: "100%",
    "@media (max-width:768px)": { maxWidth: 500, width: "100%" },
    "@media (max-width:480px)": { maxWidth: 300, width: "100%" },
  },
})
export const ThemeOfTheYear = () => {
  const styles = imgStyles()
  const year = new Date().getFullYear()
  return (
    <div className="p-4">
      <h6 className="py-2">Happy new Year {year} from Lakeview AGC</h6>
      <img
        className={styles.img}
        src={theme2024}
        alt={`Theme of the year ${year}`}
      />
    </div>
  )
}
