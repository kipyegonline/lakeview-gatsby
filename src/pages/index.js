import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home/Home"
import { carosel, smallSlides } from "../components/Main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Lakeview AGC -section 58" />
    <Home carosel={carosel} churcharea={smallSlides} />
  </Layout>
)

export default IndexPage

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
