import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home/Home"
import { Fasting } from "../components/Home/intro/Intro"
import { carosel, smallSlides } from "../components/Main"
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
} from "@material-ui/core"
import { DateRangeRounded } from "@material-ui/icons"
import { DatePicker } from "antd"

const faux = {
  id: 1,
  verse: "john3:16",
  message: "so loved the word",
  title: "fasting.....",
  subtitle: "prayer and fasting",
  date: "2021-01-11",
}
const IndexPage = () => {
  const [fast, setFast] = React.useState({})
  const [fasts, setFasts] = React.useState([])
  const [open, setOpen] = React.useState(false)

  const date = "2021-01-" + new Date().getDate()
  const fetchData = async (url, callback) => {
    try {
      let fast = await fetch(url)
      fast = await fast.json()

      callback(fast)
    } catch (error) {
      callback({ id: 0 })
    }
  }
  const handleUserDate = e => {
    const val = e.target.value

    if (val < "2021-01-10" || val > "2021-01-31") {
      alert("21 days of fasting runs between January 11th and January 31st")
    } else {
      setFast({})
      let url1 = `./server/fasting.php?getfast=true&day=${val}`
      fetchData(url1, setFast)
    }
  }

  const showNotifications = date => {
    let prayerday = localStorage.getItem("prayerday")
    if (prayerday) {
      if (prayerday !== date) {
        localStorage.setItem("prayerday", date)
        setTimeout(() => setOpen(true), 5000)
      }
    } else {
      // also record on server...
      // show dialog
      localStorage.setItem("prayerday", date)
      setTimeout(() => setOpen(true), 5000)
    }
  }
  React.useEffect(() => {
    let url1 = `./server/fasting.php?getfast=true&day=${date}`
    let url2 = `./server/fasting.php?getfasts=true`
    showNotifications(date)
    fetchData(url1, setFast)
    fetchData(url2, setFasts)
  }, [])

  return (
    <Layout>
      <SEO title="Home | Lakeview AGC -section 58 | 2021" />

      <UseModal open={open} setOpen={setOpen}>
        <Fasting />
      </UseModal>
      <Home
        carosel={carosel}
        churcharea={smallSlides}
        fast={fast}
        getDate={handleUserDate}
      />
      <DatePicker />
    </Layout>
  )
}

export default IndexPage
const UseModal = ({
  children,
  title = "21 days of prayer and fasting.",
  open = false,
  setOpen,
}) => {
  return (
    <Dialog title={title} open={open}>
      <DialogContent>
        <Typography>Cook da food...</Typography>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
// cv

const skills = [
  {
    language: "JavaScript",
    libraries: [
      "React js",
      "jQuery",
      "Redux",
      "Next Js",
      "TypeScript",
      "D3 js",
      "CSS in JS",
      "Unit Testing (jest,Enzyme and Cypress)",
    ],
  },
  { language: "Python", libraries: ["Python", "Pandas"] },
  { language: "PHP", libraries: ["PHP core", "MySql", "Laravel"] },
]

console.log(
  "%cHello there, \n why are you here? \n Anyway, my name is Vincent Kipyegon, a front end web developer with over 3 years of experience. I enjoy building interfaces with javascript,backend stuff with php and Mysql and data analysis with python. \n \
    Get in touch %cvincekipyegon11@gmail.com",
  "font-family:cursive;font-size:1rem;",
  "font-weight:bold; font-family:cursive;font-size:1rem;"
)
for (let i = 0; i < skills.length; i++) {
  console.log(
    `%c${skills[i].language} \n `,
    "font-weight:bold; font-size:1rem;border-bottom:1px solid purple; color:purple; font-family:cursive;"
  )
  let lib = skills[i].libraries
  //console.table(lib);
  //libraries
  for (let j = 0; j < lib.length; j++) {
    if (j < 1) {
      console.log(
        "%cLibrarie(s): ",
        "font-style:italic; font-weight:bold; margin-left:.35rem"
      )
    }

    console.log(`%c${j + 1}. ${lib[j]}`, "margin-left:.5rem")
  }
  //css frameworks
}
