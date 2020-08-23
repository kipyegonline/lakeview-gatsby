import React from "react"
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Avatar,
  Card,
  CardActions,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  CardMedia,
} from "@material-ui/core"

import Form from "./form/Form"
import jp from "../../images/assets/img/newlcc/jp_psd.jpg"
import rachael from "../../images/assets/img/newlcc/IMG-20200813-WA0000.jpg"
import delton from "../../images/assets/img/pstdelton.jpg"

import eric from "../../images/assets/img/2019/eric_ochieng.jpg"
import harry from "../../images/assets/img/2019/harry.jpg"
import harry2 from "../../images/assets/img/newlcc/IMG-20200813-WA0002.jpg"

class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      staff: [],
      mailTracker: 0,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMap = this.handleMap.bind(this)
    this.handleMapLeave = this.handleMapLeave.bind(this)
  }
  componentWillMount(props) {
    this.setState({
      staff: pastoralStaff,
    })
  }

  handleClick(name) {
    $("#AnyModal").modal({
      show: true,
      backdrop: "static",
      keyboard: true,
    })
    this.setState({ mailTracker: name })
  }
  handleMap() {
    $(".map-container").find("iframe").addClass("clicked")
  }
  handleMapLeave() {
    $(".map-container").find("iframe").removeClass("clicked")
  }
  render() {
    const { staff, mailTracker } = this.state
    const { handleClick, handleMap, handleMapLeave } = this
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <GoogleMap
              handleMap={handleMap}
              handleMapLeave={handleMapLeave}
            />{" "}
          </div>
        </div>
        {/*row*/}

        <Divider />
        <Grid container direction="row" justify="center" alignItems="center">
          <ContactStaff openModal={handleClick} staffContacts={staff} />
          <Form tracker={mailTracker} />
        </Grid>
        {/*row*/}
      </div>
    )
  }
}
export default Contacts

const ContactStaff = ({ staffContacts, openModal }) => (
  <div>
    <p className="text-center p-2 font-weight-bold purple-border">
      Church office and personnel.
    </p>
    <div className="row">
      <GeneralInfo />
      {staffContacts.map(staff => (
        <Staff
          key={staff.id}
          openModal={() => openModal(staff.name)}
          {...staff}
        />
      ))}
    </div>
  </div>
)
const Staff = ({ pic, name, email, mobile, title, openModal }) => (
  <Grid item xs={12} lg={3} md={3}>
    <Card>
      <CardHeader title={name} subheader={title} />
      <CardMedia src={pic} title={name} component="img" />
      <CardContent>
        <Typography variant="subtitle2">Mobile: 0{mobile}</Typography>
      </CardContent>
    </Card>
  </Grid>
)

const rn = null

const pastoralStaff = [
  {
    name: "Rev. Delton Orgeness",
    email: "delorg@yahoo.com",
    mobile: 726907931,
    title: "Senior pastor",
    pic: delton,
    id: 1,
  },

  {
    name: "Pastor John Paul",
    email: "info@lakeviewagc.net",
    mobile: 771308750,
    title: "Assistant Pastor -\n  Discipleship and Youth Ministry.",
    pic: jp,
    id: 3,
  },
  {
    name: "Pastor Rachel Ngetich",
    email: "info@lakeviewagc.net",
    mobile: 721406155,
    title: "Pastor - Children,Missions, \n Evangelism and Compassion.",
    pic: rachael,
    id: 4,
  },
  {
    name: "Harry Yegon",
    email: "info@lakeviewagc.net",
    mobile: 726216029,
    title: "Accountant",
    pic: harry2,
    id: 5,
  },
]

const GoogleMap = ({ handleMap, handleMapLeave }) => (
  <div className="col-md-12  mt-3">
    <div
      onClick={() => handleMap()}
      onMouseLeave={() => handleMapLeave()}
      className="embed-responsive embed-responsive-16by9 map-container bg-light"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.5359027757895!2d36.09036012914633!3d-0.2879008840659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18299274ae85cb9f%3A0x371b0a1059a0ea54!2sLakeview+Africa+Gospel+Church!5e0!3m2!1sen!2ske!4v1512806886474"
        style={{
          width: resizeMap()[0],
          height: resizeMap()[1],
          frameBorder: 0,
          border: "5 gray solid",
          allowFullScreen: true,
        }}
      ></iframe>
    </div>
  </div>
)

const GeneralInfo = () => (
  <div className="col-md-3 p-2 mb-0 mx-auto card">
    <h5 className="pb text-uppercase text-center ">Connect with us </h5>

    <h4 className="mb-0 purple-border">
      <FontAwesomeIcon className="mr-2" icon="mobile" color="brown" size="sm" />
      Phone:
    </h4>
    <div className="my-2">0797438190</div>
    <h4 className="mb-0 text-lg purple-border">
      <FontAwesomeIcon
        className="mr-2"
        color="brown"
        icon="envelope"
        size="sm"
      />
      Email:
    </h4>
    <div className="my-2">
      <a href="mailto:info@lakeviewagc.net">info@lakeviewagc.net</a>
    </div>
    <h4 className="mb-0 text-lg purple-border">
      Facebook:{" "}
      <a href="https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480">
        <FontAwesomeIcon
          className="mr-2"
          icon={["fab", "facebook"]}
          size="sm"
        />
      </a>
    </h4>

    <h4 className="my-2 purple-border">
      <FontAwesomeIcon
        className="mr-2"
        icon="map-marker-alt"
        color="brown"
        size="sm"
      />
      Address:
    </h4>
    <div className="mb-0">
      Lakeview Africa Gospel Church, Section 58
      <br />
      P.O. Box 1680-20100,
      <br /> Nakuru-Kenya.
      <hr />
    </div>
  </div>
)

function resizeMap() {
  let w = globalThis.window && document.documentElement.clientWidth
  if (w <= 480) {
    return [380, 450]
  } else if (w <= 768) {
    return [600, 350]
  } else {
    return [w, 450]
  }
}
