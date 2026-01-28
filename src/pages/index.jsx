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
  Button,
  DialogTitle,
} from "@mui/material"
import images2026 from "../data/images2026"
/* eslint-disable no-restricted-globals */

const IndexPage = () => {
  const date = new Date().getDate()
  const [fast, setFast] = React.useState({})
  const [fasts, setFasts] = React.useState([])
  const [events, setEvents] = React.useState([])
  const [welcome, setWelcome] = React.useState(
    `Theme of the year ${new Date().getFullYear()}`,
  )
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(date)

  const [loader, setLoader] = React.useState(false)

  const fetchData = async (url, callback) => {
    try {
      let fast = await fetch(url)
      fast = await fast.json()
      setTimeout(() => callback(fast), 2000)
    } catch (error) {
      callback({ id: 0 })
    }
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

  // Events happening
  const fetchEvents = (month = "") => {
    setLoader(true)
    fetch(`./server/sermon.php?fetchevents=true&month=${month}`)
      .then(res => res.json())
      .then(data => {
        setLoader(false)
        if (Array.isArray(data) && data?.length > 0) {
          setEvents(data)
        }
      })
      .catch(error => {
        setLoader(false)
        console.log(error)
      })
  }

  return (
    <Layout>
      <SEO
        title={`Home | Lakeview AGC-Nakuru-section 58 | ${new Date().getFullYear()}| Lakeview Academy school | Churches in Nakuru`}
      />

      <Home
        carosel={carosel}
        churcharea={smallSlides}
        fast={fast}
        selected={selected}
        events={events}
        fetchEvent={fetchEvents}
        loader={loader}
        getDate={handleUserDate}
        images={[...images2026, ...carosel]}
      />
    </Layout>
  )
}

export default IndexPage

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
  "%cWelcome to %cLakeview Africa Gospel Church. We are delighted to have you — a house of prayer for all people.\n We are bound by our vision of sharing the light of the gospel in Nakuru and beyond.",
  "font-family:cursive;font-size:2rem;color:purple; word-spacing:10px",
  "font-weight:bold; font-family:cursive;font-size:2rem;color:purple; letter-spacing:10px",
)
