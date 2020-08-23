import React from "react"
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
} from "@material-ui/core"

const Intro = ({ churcharea = [] }) => (
  <Grid container>
    <Grid container>
      <Divider />
      <Grid item className="p-2 mb-1 mx-2 my-2">
        <div className=" text-heading text-mu text-lg  ">
          {" "}
          <Typography>
            {" "}
            <strong>Theme of the Year {new Date().getFullYear()}</strong>{" "}
          </Typography>
          <Typography>
            <q>Rest</q>{" "}
          </Typography>
        </div>
      </Grid>
      <Grid
        className=" mr-2  p-2 mb-1 offset-md-2 "
        xs={12}
        md={3}
        lg={3}
        item
      ></Grid>
      <Grid
        className=" mr-2    my-2  p-2 mb-1 offset-md-2"
        xs={12}
        md={3}
        lg={3}
        item
      >
        <Typography>
          <strong>Scripture of the Year {new Date().getFullYear()}</strong>
        </Typography>
        <Typography>
          {" "}
          <q>
            {" "}
            Come to me all you who are weary and heavy laden and i will give
            rest
          </q>
        </Typography>

        <strong>Mathew 11:28</strong>
      </Grid>

      <Grid xs={12} md={3} lg={3} item>
        {/*<!-- Responsive section -->*/}
        <Box className=" navbar-brand  d-lg-none ">
          {" "}
          <Typography
            variant="h5"
            className="text-center text-heading text-uppercase text-lg text-bold mgn-bt purped "
          >
            {" "}
            Sunday Service
          </Typography>
          <ol className="list-group">
            <li className="list-group-item"> First service - 9:30 AM </li>
            <li className="list-group-item"> Second Service - 11:30 AM </li>
          </ol>
        </Box>
        {/*<!--End Responsive -->*/}
      </Grid>
    </Grid>

    <Celebrating churcharea={churcharea[0]} />
    <Divider />
    <Fellowship churcharea={churcharea[1]} />
    <Divider />
    <Companionship churcharea={churcharea[2]} />
    <Divider />
    <Missions churcharea={churcharea[3]} />
  </Grid>
)
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
