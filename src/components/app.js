import React, { Component } from "react"

import ReactDOM from "react-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import GlobalProvider from "./context/MainContext"
import Main from "./components/Main"
import MainSermons from "./components/sermons/mainSermons"
import About from "./components/about/About"
import { LccDepartments } from "./components/departments/Departments"
import Academy from "./components/academy/Academy"
import Contacts from "./components/contact/Contact"
import Services from "./components/sermons/OnlineServices"
import Fellowship from "./components/fellowship/Fellowship"
import NotFound from "./components/ui/NotFound/NotFound"

import { icons } from "./HOC/icons"
import recordMetrics from "./components/metrics/metrics"
import "bootstrap"

import "../css/lakeview.css"
import "../scss/lakeview.scss"
import "../../node_modules/mdbootstrap/css/mdb.min.css"
import "typeface-raleway"
import "typeface-roboto"

if (module.hot) {
  module.hot.accept()
}

window.React = React
class App extends Component {
  componentDidMount() {
    library.add(...icons)
  }
  render() {
    return (
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about-us" component={About} />
            <Route path="/ministries" component={LccDepartments} />
            <Route path="/sermons" component={MainSermons} />
            <Route path="/lakeview-academy" component={Academy} />
            <Route path="/contact-us" component={Contacts} />
            <Route path="/services" component={Services} />
            <Route path="/fellowship-and-bible-study" component={Fellowship} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </GlobalProvider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))

document.body.addEventListener("click", function (e) {
  document.title =
    e.target.textContent !== ""
      ? e.target.textContent
      : "Lakeview Africa Gospel Church"
})
document.body.addEventListener("DOMContentLoaded", recordMetrics)

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
  { language: "PHP", libraries: ["PHP core", "MySql"] },
  {
    language: "C#",
    libraries: [
      "I am currently learning C#, static and strongly typed object oriented language or call it mother of Typescript",
    ],
  },
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
