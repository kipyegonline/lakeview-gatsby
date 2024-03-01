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
  ButtonGroup,
  Button,
} from "@material-ui/core"
import Mobile from "@material-ui/icons/PhoneAndroid"
import Email from "@material-ui/icons/Email"
import Telephone from "@material-ui/icons/PhoneCallback"
import FeedbackIcon from "@material-ui/icons/Feedback"
import CommentIcon from "@material-ui/icons/Chat"
import ListIcon from "@material-ui/icons/List"
import ListIconAlt from "@material-ui/icons/ListAlt"
import ArrowLeft from "@material-ui/icons/ArrowBackIosOutlined"
import ArrowRight from "@material-ui/icons/ArrowForwardIosOutlined"
import acad1 from "../../images/assets/img/2022/academy/acad1.jpg"
import acad2 from "../../images/assets/img/2022/academy/acad2.jpg"
import acad3 from "../../images/assets/img/2022/academy/acad4.jpg"
import acad4 from "../../images/assets/img/2022/academy/acad4.jpg"
import acad5 from "../../images/assets/img/2022/academy/acad5.jpg"
import acad6 from "../../images/assets/img/2023/IMG-20230111-WA0000.jpg"
import acad7 from "../../images/assets/img/2022/academy/acad7.jpg"
import acad8 from "../../images/assets/img/2022/academy/acad8.jpg"
import MultiCarousel from "../MultiCarousel/Carousel"
import im1 from "../../images/assets/img/2023/IMG-20230111-WA0003.jpg"
import im2 from "../../images/assets/img/2024/IMG-20231230-WA0012.jpg"
import im3 from "../../images/assets/img/2024/IMG-20231230-WA0013.jpg"
import im4 from "../../images/assets/img/2024/IMG-20231230-WA0004.jpg"
import im5 from "../../images/assets/img/2024/IMG-20231230-WA0014.jpg"
import im6 from "../../images/assets/img/2024/IMG-20231230-WA0015.jpg"

const slides = [im1, im2, im3, im4, im5, im6]

class Academy extends React.Component {
  constructor(props) {
    super(props)
    this.pics = slides
    this.current = 1
    this.state = {
      bg: im1,
      border: false,
    }

    this.handleBackgrounds = this.handleBackgrounds.bind(this)
  }
  componentDidMount() {
    //this.handleBackgrounds()
    this.timer = setInterval(this.spinPics, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleMouse() {
    $("#transport").addClass("transport")
  }
  spinPics = () => {
    this.current = this.current % this.pics.length
    this.current++
    this.setState({ bg: this.pics[this.current] })
  }
  handleArrows(dir) {
    clearInterval(this.timer)
    if (dir === "L") {
      if (this.current <= 0) this.current = this.pics.length - 1
      else this.current--
    } else if (dir === "R") {
      if (this.current >= this.pics.length - 1) this.current = 0
      else this.current++
    }
    this.setState({ bg: this.pics[this.current] })
  }
  handleBackgrounds() {
    const today = new Date().getDay()
    let bg
    switch (today) {
      case 0:
        bg = im1
        break
      case 1:
        bg = im2
        break
      case 2:
        bg = im3
        break
      case 3:
        bg = im4
        break
      case 4:
        bg = im5
        break
      case 5:
        bg = im6
        break

      default:
        bg = im1
        break
    }
    this.setState({ bg })
  }

  render() {
    const { bg, border } = this.state
    const style = {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      height: adjustHeight(),
      overflow: "hidden",
      width: "100%",
      position: "relative",
    }
    const arrows = left => ({
      position: "absolute",
      top: "50%",
      margin: ".25rem",
      cursor: "pointer",
      left: left,
    })

    return (
      <>
        <h2
          className="text-center p-2 my-2 text-lg text-uppercase mb-3"
          style={{ margin: 0.5 }}
        >
          Lakeview AGC Academy
        </h2>
        <div className="row">
          <div className="col-md-12  " style={style}>
            <ArrowLeft
              size="large"
              onClick={() => this.handleArrows("L")}
              style={arrows("0")}
            />
            <ArrowRight
              size="large"
              onClick={() => this.handleArrows("R")}
              style={arrows("97%")}
            />
          </div>
        </div>
        <Divider />
        <AboutAcademy />
        <Grid
          container
          spacing={2}
          wrap="wrap"
          alignItems="flex-start"
          justify="flex-start"
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
            <CardMedia component="img" src={acad7} />
            <Typography className="p-2 m-2">
              Co-curricular activities.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <CardMedia component="img" src={acad5} />
            <Typography className="p-2 m-2">Class work</Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <CardMedia component="img" src={acad6} />
            <Typography className="p-2 m-2">Art and culture</Typography>
          </Grid>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 10,
            }}
          >
            <AcademyContact />
          </Box>
        </Grid>
      </>
    )
  }
}
export default Academy

const AboutAcademy = () => (
  <div className="row bg-light">
    <div className="col-md-6 my-2 ">
      <Typography className="text-center  " variant="h6">
        {" "}
        Vision{" "}
      </Typography>
      <p className="text-center  p-2">
        Lakeview academy seeks to be a leading Christian based institution of
        Academic Excellence.
      </p>
    </div>
    <div className="col-md-6 my-2">
      <Typography className="text-center" variant="h6">
        {" "}
        Mission
      </Typography>

      <p className="text-center  p-2 ">
        To impart spiritual virtues, offer Quality Education and Develop a
        God-fearing Generation.{" "}
      </p>
    </div>
  </div>
)
const Intro = () => (
  <Card>
    <Typography variant="h6" className="text-center my-1 p-2">
      Classes
    </Typography>
    <CardMedia component="img" src={im4} />

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
        <li className="list-group-item">
          <IconButton>
            <ListIcon color="secondary" />
          </IconButton>
          Grade 1
        </li>
        <li className="list-group-item">
          <IconButton>
            <ListIcon color="secondary" />
          </IconButton>
          Grade 2
        </li>
      </ul>
    </CardContent>
  </Card>
)

const academyShots = [
  {
    pic: im2,
    title: "Students weekly performance",
    id: 1,
  },
  {
    pic: im3,
    title: "A student reciting a poem",
    id: 2,
  },
  {
    pic: im4,
    title: "Dance sessions",
    id: 3,
  },
  {
    pic: im5,
    title: "Dance group",
    id: 4,
  },
  {
    pic: im6,
    title: "School compound",
    id: 5,
  },
]

const AcademyFee = () => {
  const [active, setActive] = React.useState("ECD")
  return (
    <Card>
      <Typography variant="h6" className="text-center my-1 p-2">
        Fees structure ({active})
      </Typography>
      <CardMedia component="img" src={active === "ECD" ? im2 : im3} />
      <Box className="p-2">
        <ButtonGroup className="d-flex justify-content-around">
          <Button
            variant={active === "ECD" ? "contained" : "outlined"}
            color="primary"
            style={{ width: 100, borderRight: "1px solid blue" }}
            onClick={() => setActive("ECD")}
          >
            ECD
          </Button>
          <Button
            variant={active === "PRIMARY" ? "contained" : "outlined"}
            onClick={() => setActive("PRIMARY")}
            color="primary"
          >
            PRIMARY
          </Button>
        </ButtonGroup>
        <Box className="p-3">
          {active === "ECD" && (
            <Typography variant="body2">
              {" "}
              Play group, Pre-primary 1, pre-primary 2
            </Typography>
          )}
          {active === "PRIMARY" && (
            <Typography variant="body2">Grade 1 and Grade 2</Typography>
          )}
        </Box>
      </Box>
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
              <TableCell>Admission </TableCell>
              <TableCell colSpan="3">
                {active === "ECD"
                  ? (1000).toLocaleString()
                  : (2000).toLocaleString()}{" "}
                (payable once){" "}
              </TableCell>
            </TableRow>
            {active === "ECD" ? (
              <>
                <TableRow>
                  <TableCell>Tuition </TableCell>
                  <TableCell>{(8500).toLocaleString()} </TableCell>
                  <TableCell>{(8500).toLocaleString()} </TableCell>
                  <TableCell>{(8500).toLocaleString()} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(9500).toLocaleString()}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(8500).toLocaleString()}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(8500).toLocaleString()}</strong>
                  </TableCell>
                </TableRow>
              </>
            ) : (
              <>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  <TableCell>{(300).toLocaleString()} </TableCell>
                  <TableCell>- </TableCell>
                  <TableCell>- </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tuition </TableCell>
                  <TableCell>{(10500).toLocaleString()} </TableCell>
                  <TableCell>{(10500).toLocaleString()} </TableCell>
                  <TableCell>{(10500).toLocaleString()} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(12800).toLocaleString()}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(10500).toLocaleString()}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Ksh {(10500).toLocaleString()}</strong>
                  </TableCell>
                </TableRow>
              </>
            )}
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
}

const AcademyContact = () => (
  <Card className="bg-faded p-2 mt-3">
    <Typography variant="h6" className="text-center ">
      Contact School Office{" "}
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
const FeedBack = () => {
  const feedback = [
    " ...I am happy my baby is here and doing well...",
    "...Good nurturing of the children and positive improvemnts...",
    ".Very happy and proud of the teachers",
    ".I am impressed by the relationship the children and teachers have",
    "The difference between the time my child started coming here and now, she has improved in all areas.",
  ]
  return (
    <Card className=" p-2 my-1 ">
      <Typography className="text-center text-header" variant="h5">
        <IconButton>
          <FeedbackIcon />
        </IconButton>
        Parent's feedback
      </Typography>

      <CardMedia component="img" src={im6} className="p-1 my-2" />
      <Divider />

      {feedback.map(feed => (
        <div key={feed}>
          <p className="parent-feedback">
            <IconButton>
              <CommentIcon />
            </IconButton>
            <q className="font-bold">...{feed}...</q>
          </p>
          <Divider />
        </div>
      ))}
    </Card>
  )
}

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
