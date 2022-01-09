import React from "react"
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  CardMedia,
  Card,
  CardContent,
  Box,
  Divider,
  Grid,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core"
import Mobile from "@material-ui/icons/PhoneAndroid"
import Email from "@material-ui/icons/Email"
import Telephone from "@material-ui/icons/PhoneCallback"
import FeedbackIcon from "@material-ui/icons/Feedback"
import CommentIcon from "@material-ui/icons/Chat"
import ListIcon from "@material-ui/icons/List"
import ListIconAlt from "@material-ui/icons/ListAlt"
import academy from "../../images/assets/img/2019/academy_2019.jpg"
import aca1 from "../../images/assets/img/aca1.jpg"
import acad2 from "../../images/assets/img/acad2.jpg"
import acad3 from "../../images/assets/img/acad3.jpg"
import acad4 from "../../images/assets/img/acad4.jpg"
import acad5 from "../../images/assets/img/2019/academyclass2019.jpg"

class Academy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bg: aca1,
      border: false,
    }
  }

  handleMouse() {
    $("#transport").addClass("transport")
  }

  render() {
    const { bg, border } = this.state
    const style = {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right, bottom",
      backgroundSize: "cover",
      height: adjustHeight(),
      overflow: "hidden",
      width: "100%",
    }

    return (
      <>
        <h2
          className="text-center p-2 my-2 text-lg text-uppercase mb-3"
          style={{ fontFamily: "times", margin: 0.5 }}
        >
          Lakeview AGC Academy
        </h2>
        <div className="row">
          <div className="col-md-12  " style={style}></div>
        </div>
        <Divider />
        <AboutAcademy />
        <Grid
          container
          spacing={2}
          wrap="wrap"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={4} lg={4}>
            <Intro />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <AcademyFee />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <FeedBack />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <AcademyContact />
          </Grid>
        </Grid>
      </>
    )
  }
}
export default Academy

const AboutAcademy = () => (
  <div className="row bg-light">
    <div className="col-md-6 my-2 ">
      <Typography className="text-center  " variant="h5">
        {" "}
        Vision{" "}
      </Typography>
      <p className="text-center text-bold text-lg p-2">
        Lakeview Academy seeks to be a leading Christian based institution of
        Academic Excellence.
      </p>
    </div>
    <div className="col-md-6 my-2">
      <Typography className="text-center" variant="h5">
        {" "}
        Mission
      </Typography>

      <p className="text-center text-bold text-lg p-2 ">
        To impart spiritual virtues, offer Quality Education and Develop a
        God-fearing Generation.{" "}
      </p>
    </div>
  </div>
)
const Intro = () => (
  <Card>
    <Typography variant="h5" className="text-center my-1 p-2">
      Classes
    </Typography>
    <CardMedia component="img" src={acad2} />

    <CardContent>
      <ul className="list-group">
        <li className="list-group-item">
          <IconButton>
            <ListIcon color="secondary" />
          </IconButton>
          Playgroup/Daycare{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <IconButton>
            <ListIcon color="secondary" />
          </IconButton>
          Pre-primary 1
        </li>
        <li className="list-group-item">
          <IconButton>
            <ListIcon color="secondary" />
          </IconButton>
          Pre-primary 2
        </li>
      </ul>
    </CardContent>
  </Card>
)

const academyShots = [
  {
    pic: aca1,
    title: "Students weekly performance",
    id: 1,
  },
  {
    pic: acad2,
    title: "A student reciting a poem",
    id: 2,
  },
  {
    pic: acad3,
    title: "Dance sessions",
    id: 3,
  },
  {
    pic: acad4,
    title: "Dance group",
    id: 4,
  },
  {
    pic: acad5,
    title: "School compound",
    id: 5,
  },
]

const AcademyFee = () => (
  <Card>
    <Typography variant="h5" className="text-center my-1 p-2">
      Fees structure
    </Typography>
    <CardMedia component="img" src={acad3} />
    <TableContainer>
      <Table className="table-hover table-bordered ">
        <TableHead>
          <TableRow>
            <TableCell>Details</TableCell>
            <TableCell>Term 1 </TableCell>
            <TableCell> Term 2 </TableCell>
            <TableCell>Term 3 </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Admission</TableCell>
            <TableCell colSpan="3">
              {(1000).toLocaleString()} (payable once){" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tuition </TableCell>
            <TableCell>{(4500).toLocaleString()} </TableCell>
            <TableCell>4500</TableCell>
            <TableCell>4500 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Lunch & Snacks </TableCell>
            <TableCell>2500</TableCell>
            <TableCell>2500 </TableCell>
            <TableCell>2500 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <strong>Ksh {(8000).toLocaleString()}</strong>
            </TableCell>
            <TableCell>
              <strong>Ksh {(7000).toLocaleString()}</strong>
            </TableCell>
            <TableCell>
              <strong>Ksh {(7000).toLocaleString()}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Typography
      variant="body1"
      className="text-center text-danger text-white p-2 my-2"
    >
      {" "}
      <strong>SCHOOL TRANSPORT IS AVAILABLE</strong>{" "}
    </Typography>
  </Card>
)

const AcademyContact = () => (
  <Card className="bg-faded p-2 mt-3">
    <Typography variant="h5" className="text-center ">
      Contact Lakeview Academy Office{" "}
    </Typography>

    <ol className="list-group">
      <li className="list-group-item">
        {" "}
        <IconButton>
          <Telephone color="secondary" />
        </IconButton>
        0512212862{" "}
      </li>
      <li className="list-group-item">
        <IconButton>
          <Mobile color="secondary" />
        </IconButton>{" "}
        254773350101{" "}
      </li>
      <li className="list-group-item">
        <IconButton>
          <Mobile color="secondary" />
        </IconButton>
        254774532310{" "}
      </li>
      <li className="list-group-item">
        <IconButton>
          <Email color="secondary" />
        </IconButton>{" "}
        info@lakeviewagc.net
      </li>
    </ol>
  </Card>
)
const FeedBack = () => (
  <Card className=" p-2 my-1 ">
    <Typography className="text-center text-header" variant="h5">
      <IconButton>
        <FeedbackIcon />
      </IconButton>
      Parent's feedback
    </Typography>

    <CardMedia component="img" src={acad4} className="p-1 my-2" />
    <Divider />
    <p>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <q>...I am happy my baby is here and doing well...</q>
    </p>
    <Divider />
    <p>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <q>...Good nurturing of the children and positive improvemnts...</q>
    </p>
    <Divider />
    <p>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <q>...Very happy and proud of the teachers</q>
    </p>
    <Divider />
    <p>
      <q>
        ...I am impressed by the relationship the children and teachers have
      </q>
    </p>
    <Divider />
    <p>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <q>
        ...The difference between the time my child started coming here and now,
        she has improved in all areas.
      </q>
    </p>
    <Divider />
  </Card>
)

function adjustHeight() {
  let w
  if (globalThis?.window !== undefined) {
    w = document.documentElement.clientWidth
  } else {
    var globalThis
  }

  if (w <= 480) {
    return 100
  } else if (w < 768) {
    return 200
  } else {
    return 300
  }
}
