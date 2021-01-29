import React from "react"
import axios from "axios"
import Layout from "../components/layout"
import EmbedYouTube from "../components/sermons/OnlineServices"

import SEO from "../components/seo"
const saas = [
  {
    id: 1,
    title: "Live",
    message: "STay rooted*wanja*Vince*SHeila",
    date: new Date().toDateString(),
    verse: "Acts 1:8",
  },
  {
    id: 2,
    title: "Alive",
    message: "Open your heart*Mercy*Gilly*Jane*Mark",
    date: new Date().toDateString(),
    verse: "Acts 11:28",
  },
]
const ServicesPages = () => {
  const month = new Date().getMonth()
  const getMonth = month => "2021/" + month + "/01"

  const [sermons, setSermons] = React.useState([])
  const [loaded, setLoaded] = React.useState("")
  const [curmonth, setMonth] = React.useReducer((a, b) => (a = b), month)
  const fetchSermons = async month => {
    try {
      const { data } = await axios.get(
        `./server/sermon.php?fetchsermons=true&curmonth=${month}`
      )
      if (data.length && Array.isArray(data)) {
        setSermons(data)
      } else {
        throw new Error("There are no sermons at the moment. Check back soon")
      }
    } catch (error) {
      setLoaded(error.message)
    }
  }
  const handleMonthClick = month => {
    setMonth(month)
    fetchSermons(getMonth(month))
  }
  React.useEffect(() => {
    if (!sermons.length) fetchSermons(getMonth(month))
  }, [])
  return (
    <Layout>
      <SEO title="Sermons and Services" />
      <EmbedYouTube
        sermons={sermons}
        loaded={loaded}
        month={{ curmonth, setMonth: handleMonthClick }}
      />
    </Layout>
  )
}
export default ServicesPages
