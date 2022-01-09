import React from "react"
import { v4 } from "uuid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home/Home"
import { Fasting, ThemeOfTheYear } from "../components/Home/intro/Intro"
import { carosel, smallSlides } from "../components/Main"
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  DialogTitle,
} from "@material-ui/core"
/* eslint-disable no-restricted-globals */

const IndexPage = () => {
  const date = new Date().getDate()
  const [fast, setFast] = React.useState({})
  const [fasts, setFasts] = React.useState([])
  const [events, setEvents] = React.useState([])
  const [welcome, setWelcome] = React.useState("Theme of the year 2022.")
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(date)
  const [greeted, setGreeted] = React.useState(false)
  const month = new Date().getMonth()

  const fetchData = async (url, callback) => {
    try {
      let fast = await fetch(url)
      fast = await fast.json()
      setTimeout(() => callback(fast), 2000)
    } catch (error) {
      callback({ id: 0 })
    }
  }
  // update the metrics
  const handleUserCount = isNew => {
    let localUser = localStorage.getItem("localuser")

    if (localUser === null) {
      localStorage.setItem("localuser", v4())
      localUser = localStorage.getItem("localuser")
    }

    fetch(
      `./server/fasting.php?recorduser=true&uuid=${localUser}&newuser=${isNew}`
    )
  }
  // the thing with fasting
  const handleUserDate = (e, p) => {
    if (p < 10 || p > 30) return

    if (p < 10 || p > 30) {
      //alert("21 days of fasting runs between January 10th and January 30th")
    } else {
      setFast({})
      setSelected(p)
      let url1 = `./server/fasting.php?getfast=true&day=${p}`

      fetchData(url1, setFast)
    }
  }
  // fasting metrics
  const recordMetrics = () => {
    let day = 6e4 * 60 * 24
    let now = new Date().getTime()
    let prayerday = localStorage.getItem("prayerday")
    const newYearMessage = localStorage.getItem("new-year-2022")

    if (prayerday) {
      if (now - Number(prayerday) > day) {
        localStorage.setItem("prayerday", JSON.stringify(now))

        if (newYearMessage && (date > 9 || date < 31)) {
          setGreeted(true)
          setOpen(true)
          setWelcome("20 Days of Prayer and Fasting")
        }
        handleUserCount(0)
      }
    } else {
      // also record on server...
      handleUserCount(1)

      // show dialog
      localStorage.setItem("prayerday", JSON.stringify(now))
    }
  }
  // close modal
  const closeModal = () => {
    setOpen(false)
    setGreeted(false)
  }
  // Events happening
  const fetchEvents = (month = "") => {
    fetch(`./server/sermon.php?fetchevents=true&month=${month}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) || data.length) {
          if (data.length) setEvents(data)
        }
      })
      .catch(error => console.log(error))
  }

  // new Year theme
  const newYearTheme = () => {
    const newYearMessage = localStorage.getItem("new-year-2022")
    if (!!!newYearMessage) {
      setOpen(true)
      localStorage.setItem("new-year-2022", "visited")
    }
  }
  React.useEffect(() => {
    //recordMetrics()
    //fetch events
    fetchEvents(month + 1)
    handleUserDate("", date)
    setTimeout(recordMetrics, 3000)
    setTimeout(newYearTheme, 3000)
  }, [])

  return (
    <Layout>
      <SEO
        title={`Home | Lakeview AGC-Nakuru-section 58 | ${new Date().getFullYear()}| Lakeview Academy school | Churches in Nakuru`}
      />

      <UseModal open={open} setOpen={closeModal} welcome={welcome}>
        {greeted ? (
          !!fast?.id && (
            <Fasting {...fast} getDate={handleUserDate} selected={selected} />
          )
        ) : (
          <ThemeOfTheYear />
        )}
      </UseModal>
      <Home
        carosel={carosel}
        churcharea={smallSlides}
        fast={fast}
        selected={selected}
        events={events}
        fetchEvent={fetchEvents}
        getDate={handleUserDate}
      />
    </Layout>
  )
}

export default IndexPage

const UseModal = ({
  children,
  title = "Lakeview AGC",
  open = true,
  setOpen,
  welcome,
}) => {
  return (
    <Dialog
      title={title}
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{welcome}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
/*

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
*/
console.log(
  "%cWelcome to %cLakeview AGC ",
  "font-family:cursive;font-size:4rem;color:purple; word-spacing:10px",
  "font-weight:bold; font-family:cursive;font-size:4rem;color:purple; letter-spacing:10px"
)
const calendar = ["January", "February", "March"]
