import React from "react"
import { v4 } from "uuid"
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
  DialogTitle,
} from "@material-ui/core"

const faux = {
  id: 1,
  verse: "john3:16",
  message: "so loved the word",
  title: "fasting.....",
  subtitle: "prayer and fasting",
  date: "2021-01-11",
}
const IndexPage = () => {
  const date = "2021-01-" + new Date().getDate()
  const [fast, setFast] = React.useState({})
  const [fasts, setFasts] = React.useState([])
  const [welcome, setWelcome] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(date)

  const fetchData = async (url, callback) => {
    try {
      let fast = await fetch(url)
      fast = await fast.json()
      setTimeout(() => callback(fast), 2000)
    } catch (error) {
      callback({ id: 0 })
    }
  }
  const handleUserCount = isNew => {
    let localUser = localStorage.getItem("localuser")

    if (!localUser) {
      localStorage.setItem("localuser", v4())
      localUser = localStorage.getItem("localuser")
    }

    fetch(
      `./server/fasting.php?recorduser=true&uuid=${localUser}&newuser=${isNew}`
    )
  }

  const handleUserDate = e => {
    const val = e.target.value

    if (val < "2021-01-10" || val > "2021-01-31") {
      alert("21 days of fasting runs between January 11th and January 31st")
    } else {
      setFast({})
      setSelected(val)
      let url1 = `./server/fasting.php?getfast=true&day=${val}`

      fetchData(url1, setFast)
    }
  }

  const showNotifications = date => {
    if (new Date().getMonth() > 0) return
    let prayerday = localStorage.getItem("prayerday")

    if (prayerday) {
      setWelcome("")

      if (prayerday !== date) {
        localStorage.setItem("prayerday", date)
        setTimeout(() => setOpen(true), 10000)
        handleUserCount(0)
      }
    } else {
      // also record on server...
      handleUserCount(1)

      // show dialog
      localStorage.setItem("prayerday", date)
      setTimeout(() => setOpen(true), 10000)
      setWelcome("Welcome to Lakeview AGC website.")
    }
  }
  React.useEffect(() => {
    let url1 = `./server/fasting.php?getfast=true&day=${date}`
    let url2 = `./server/fasting.php?getfasts=true`
    if (!!!fasts.length) {
      showNotifications(date)
      fetchData(url1, setFast)
      fetchData(url2, setFasts)
    }
  }, [])
  React.useLayoutEffect(() => {
    console.log("prime")
  }, [])
  return (
    <Layout>
      <SEO title="Home | Lakeview AGC -section 58 | 2021" />

      <UseModal open={open} setOpen={setOpen} welcome={welcome}>
        <Fasting {...fast} getDate={handleUserDate} selected={selected} />
      </UseModal>
      <Home
        carosel={carosel}
        churcharea={smallSlides}
        fast={fast}
        selected={selected}
        getDate={handleUserDate}
      />
    </Layout>
  )
}

export default IndexPage

const UseModal = ({
  children,
  title = "21 Days of Prayer and Fasting.",
  open = false,
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
