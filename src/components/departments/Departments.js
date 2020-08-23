import React from "react"
import Layleader from "../../images/assets/img/Layleader.jpg"
import missions from "../../images/assets/img/marybett.jpg"
import secretary from "../../images/assets/img/secretary.jpg"
import youths from "../../images/assets/img/youthsleader.jpg"
import compassion from "../../images/assets/img/munyasia.jpg"
import christianEdu from "../../images/assets/img/logoG.jpg"
import ladies from "../../images/assets/img/logoG.jpg"
import men from "../../images/assets/img/newlcc/mens.jpg"
import dev from "../../images/assets/img/logoG.jpg"
import childrens from "../../images/assets/img/childrensleader.jpg"
import academy from "../../images/assets/img/educationleader.jpg"
import worship from "../../images/assets/img/newlcc/worship.jpg"
import treasurer from "../../images/assets/img/treasurer.jpg"
import fellowship from "../../images/assets/img/ngugikimani.jpg"
import outreach from "../../images/assets/img/logoG.jpg"
import children from "../../images/assets/img/newlcc/children.jpg"
import elder from "../../images/assets/img/newlcc/elder.jpg"
import kemboi from "../../images/assets/img/newlcc/kemboi.jpg"
import lusaka from "../../images/assets/img/newlcc/lusaka.jpg"
import stella from "../../images/assets/img/newlcc/stella.jpg"
import "./lcc.css"
//images

const Departments = (data, Depts) =>
  class Departments extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data,
        loaded: false,
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(index) {
      this.setState({
        data: [...this.state.data.filter((datam, i) => i !== index)],
      })
    }

    render() {
      const { data, loaded } = this.state
      return (
        <div className="row main-lcc">
          <h5 className="text-center font-weight-bold">
            {" "}
            The Local Church Council{" "}
          </h5>
          <div className="lcc-main">
            {data
              .sort((a, b) => (a.department > b.department ? 1 : -1))

              .map((datam, i) => (
                <Depts key={i} loaded={loaded} {...datam} />
              ))}
          </div>
        </div>
      )
    }
  }

const Depts = ({ title, department, name, profile, pic, loaded, func }) => {
  let ingo

  return (
    <div className="p-1 mb-2 text-lg lcc-member" ref={input => (ingo = input)}>
      <h5 className="text-center">{department}</h5>
      <figure>
        <img
          className="img-fluid img-lcc rounded-circle mx-auto d-lg-block"
          src={pic}
          alt={title}
        />
        <figcaption> {name}</figcaption>
        <p> {title}</p>
      </figure>

      {/* <button className='btn btn-lg btn-warning' data-toggle="collapse" href="#collapseExample">More</button>
             <div class="collapse" id="collapseExample">
  <div class="card card-body">
  <p> {profile}</p>
  </div>
</div>*/}
    </div>
  )
}

const lcc = [
  {
    name: "Mrs. Margaret Siele",
    title: "Mission's leader",
    department: "Missions deparment",
    pic: outreach,
    profile:
      "The mission's department coordinates the missions activities and budget.",
  },

  {
    name: " Mrs. Elizabeth Gathi ",
    title: "Secretary",
    department: "Secretary",
    pic: secretary,
    profile:
      "The secretary of LCC maintain proper records and minutes of LCC meetings",
  },

  {
    name: "Mrs Celestine Munyasia",
    title: "Youth leader",
    department: "Youth department",
    pic: youths,
    profile:
      "The youth department plans and oversees all youth activities in the church; it plans and organizes for midweek meetings and fellowships for the youths swell as the young adults fellowship. The department alsoi oversee the counselling for the youth.",
  },
  {
    name: "Mr. Charles Munyasia",
    title: "Lead",
    department: "Compassion",
    pic: compassion,
    profile: "The department leads the compassion from day to day.",
  },
  ,
  {
    name: "Risper Korir",
    title: "Leader",
    department: "Evangelism",
    pic: outreach,
    profil: "",
  },
  {
    name: "Mrs. Winnie Logemere",
    title: "Ladies' leader",
    department: "Ladies department",
    pic: elder,
    profile:
      "This department Prepares goals and plans for womens activities in the year. Women's council also implements the goals and plans for women’s activities and raise funds for women’s budget",
  },
  {
    name: "Mr. Zach Njeru",
    title: "Men's leader",
    department: "Men's department",
    pic: men,
    profile:
      "The men’s committee is responsible for organizing Bible studies and man enough series for LakeView AGC men",
  },
  {
    name: "Mr. Nelson kemboi",
    title: "leader",
    department: "Development Department",
    pic: kemboi,
    profile:
      "The department tasked with development and overseeing the general maintenance of church building, furniture and fitting and ensure in collaboration with the relevant church staff that the buildings are in sound shape.",
  },

  {
    name: "Ms. Margret Wachira",
    title: "Academy chair",
    department: "Lakeview Academy",
    pic: academy,
    profile:
      "The chair of the academy links the pastoral office with the academy, coordinates the development and activities of the Lakeview Academy with the help of the Pastoral staff. The commmittee also chairs CED committee and other CED programmed committees in the church",
  },
  {
    name: "Mrs Rose Gikonyo",
    title: "worship leader",
    department: "Worship ministry",
    pic: worship,
    profile:
      "The worship team leads the service in worship; both English and Kiswahili services.",
  },
  {
    name: "Mr. Andrew Lusaka",
    title: "Lay leader",
    department: "Laity",
    pic: lusaka,
    profile:
      "The lay leader serves as a liaison between pastoral staff and the laity",
  },

  {
    name: "Mrs Stella Korir",
    title: "Treasurer",
    department: "Treasurer",
    pic: stella,
    profile:
      "he treasurer supervises the proper keeping of the churches financial records and monitor receipts, records and disbursement as approved by the LCC. He/she produces financial reports of income and expenditure for the church monthly and annually.",
  },

  {
    name: "Mr. Ngugi Kimani",
    title: "leader",
    department: "Discipleship",
    pic: fellowship,
    profile:
      "The Home fellowship committe co-ordinates weekly home fellowship held every Wednesday in various zones with Nakuru region",
  },
  {
    name: "Mrs. Jenniffer Kosgei",
    title: "Children's leader",
    department: "Children",
    pic: children,
    profile:
      "The children department coordinates the sunday school activities, Vocational bible study and children activities",
  },
]
export const LccDepartments = Departments(lcc, Depts)

function sortMagic(data) {
  const real = data.sort((a, b) => (a.name > b.name ? 1 : -1))
  return real
}
