import React from "react"

import $ from "jquery"
import {
  Table,
  TableContainer,
  Avatar,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  ListItem,
  List,
  ListItemIcon,
  ListAvatar,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Divider,
  ListItemAvatar,
} from "@material-ui/core"
import Calendar from "@material-ui/icons/CalendarToday"
import User from "@material-ui/icons/AccountCircle"

import give from "../../../images/assets/img/PAYBILL.jpg"
import delton from "../../../images/assets/img/pstdelton.jpg"
import jp from "../../../images/assets/img/newlcc/jp_psd.jpg"
import harry from "../../../images/assets/img/2019/harry.jpg"
import harry2 from "../../../images/assets/img/newlcc/IMG-20200813-WA0002.jpg"
import rachael from "../../../images/assets/img/newlcc/IMG-20200813-WA0000.jpg"
import sam from "../../../images/assets/img/newlcc/sam.jpg"
import churcharea from "../../../images/assets/img/churcharea.jpg"

const Events = ({ events }) => {
  function handleModal() {
    $("#giveModal").modal({
      show: true,
      keyboard: true,
    })
  }

  return (
    <>
      <div className="row bg-light">
        <ComingUp events={events} />
      </div>{" "}
      {/*<!-- /.row -->*/}
    </>
  )
}
export default Events

//coming up
const ComingUp = () => (
  <div className="col-md-8 card mb-2">
    <h5 className="text-center text-md text-uppercase py-2 my-2 ">
      {" "}
      Missions and Partnerships
    </h5>
    <p>
      We thank God for His blessings and for allowing us to reach the people of
      Turkana and Kakuma refugee camps.We are currently partnering with AGC
      mission station- Turkana/Kakuma.the missionaries on ground are{" "}
      <b>Zacceus</b> and <b>Faith Siele</b>.
    </p>
    <p>
      We thank God for our church plant Olive Fellowship AGC.Let's continue to
      pray for them.{" "}
      <IconButton>
        <User />
      </IconButton>
    </p>
  </div>
)

//weekly events

export const WeeklyEvents = () => (
  <TableContainer className=" table-responsive ">
    <Typography
      className="text-center  text-black   text-bold py-2 my-2 font-weight-bold"
      variant="subtitle1"
    >
      {" "}
      Weekly Events (5:30 PM - 6:30 PM){" "}
    </Typography>
    <Divider />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Day</TableCell>
          <TableCell>Event</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow scope="col">
          <TableCell> Monday </TableCell>
          <TableCell>Church Visitation </TableCell>
        </TableRow>
        <TableRow scope="col">
          <TableCell> Tuesday</TableCell>
          <TableCell> YP BS @ Bontana Hotel</TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Wednesday</TableCell>
          <TableCell> Home Fellowship</TableCell>
        </TableRow>
        <TableRow scope="col">
          <TableCell> Thursday</TableCell>
          <TableCell>Choir Practice </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Friday</TableCell>
          <TableCell> Prayer Service </TableCell>
        </TableRow>
        <TableRow scope="col">
          <TableCell>Saturday </TableCell>
          <TableCell> Choir practice</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)
//prayer days
export const PrayerDays = () => (
  <Box className="w-100">
    <Typography
      className=" text-uppercase text-center mb-1 p-1 font-weight-bold"
      variant="body2"
    >
      {" "}
      Departments prayer days
    </Typography>
    <Divider />
    <TableContainer className=" p-1  table-responsive mb-1">
      <Table className=" table  table-hover ">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow scope="col">
            <TableCell> Monday</TableCell>
            <TableCell>Compassion & Children</TableCell>
          </TableRow>
          <TableRow scope="col">
            <TableCell> Tuesday</TableCell>
            <TableCell> Ladies & Men</TableCell>
          </TableRow>
          <TableRow scope="col">
            <TableCell> Wednesday</TableCell>
            <TableCell> Missions & Evangelism </TableCell>
          </TableRow>
          <TableRow scope="col">
            <TableCell> Thursday</TableCell>
            <TableCell>Youth Department & Academy</TableCell>
          </TableRow>
          <TableRow scope="col">
            <TableCell> Friday</TableCell>
            <TableCell> Worship and Development </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
)
export const QuickContacts = () => (
  <Paper className="w-100">
    <Typography
      className="text-center text-uppercase p-1 mb-1 font-weight-bold"
      variant="body2"
    >
      Quick contacts
    </Typography>{" "}
    <Divider />
    {/*<!--Contact us*/}
    <List>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={delton} />
        </ListItemIcon>

        <ListItemText primary="Rev. Delton Orgeness" secondary="0726907931" />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={jp} />
        </ListItemIcon>

        <ListItemText primary="Pastor John Paul" secondary="0771308750" />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={rachael} />
        </ListItemIcon>

        <ListItemText primary="Pastor Rachel Ng'etich" secondary="0721406155" />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={harry2} />
        </ListItemIcon>

        <ListItemText primary="Harry Yegon" secondary="0726216029" />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={sam} />
        </ListItemIcon>

        <ListItemText
          primary="Samuel Maina -Worship director"
          secondary="0724754423"
        />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={null} />
        </ListItemIcon>

        <ListItemText primary="Oswald Midamba" secondary=" 072358870" />
      </ListItem>
      <ListItem dense divider>
        <ListItemIcon>
          <Avatar src={churcharea} />
        </ListItemIcon>

        <ListItemText
          primary="Church office"
          secondary=" 0797438190/info@lakeviewagc.net"
        />
      </ListItem>
    </List>
  </Paper>
)
export const Give = () => {
  function handleModal() {
    $("#giveModal").modal({
      show: true,
      keyboard: true,
    })
  }
  return (
    <Box className="mx-auto ">
      {" "}
      {/*Give*/}
      <h5 className="text-center text-uppercase pt-2 font-weight-bold">Give</h5>
      <Divider />
      <img className="img-fluid mb-1 mb-lg-0" src={give} alt="M-Pesa paybill" />
      <small
        className="btn btn-primary btn-block mb-2"
        onClick={() => handleModal()}
      >
        More Options
      </small>
    </Box>
  )
}
